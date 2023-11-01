from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from flask_restful import Api, Resource, reqparse
import jwt
import bcrypt
from datetime import datetime, timedelta
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token, JWTManager
from flask_cors import CORS
import datetime

app = Flask(__name__)
CORS(app)
# CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})
# CORS(app, resources={r"/api/*": {"origins": "*"}})

app.config['SECRET_KEY'] = 'your-secret-key'
app.config['MONGO_URI'] = 'mongodb+srv://admin:spm100@cluster0.qgb6fhm.mongodb.net/squadup'

mongo = PyMongo(app)
api = Api(app)
jwtManager = JWTManager(app)

@app.route('/', methods=['GET'])
@jwt_required()
def hello():
    return {'message': "Hello!"}

# Profile Endpoints
class Register(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('username', required=True)
        parser.add_argument('password', required=True)
        parser.add_argument('skills', type=list, location='json')  # List of skills
        parser.add_argument('personality', type=str)
        parser.add_argument('timeCommitment', type=int)

        args = parser.parse_args()

        existing_user = mongo.db.users.find_one({'username': args['username']})

        if existing_user:
            return {'message': 'Username already exists'}, 400

        hashed_password = bcrypt.hashpw(args['password'].encode('utf-8'), bcrypt.gensalt())
        user_data = {
            'username': args['username'],
            'password': hashed_password,
            'skills': args.get('skills', []),
            'personality': args.get('personality', ''),
            'timeCommitment': args.get('timeCommitment', 0),
        }

        user_id = mongo.db.users.insert_one(user_data)

        return {'message': 'User registered successfully'}, 201

class Login(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('username', required=True)
        parser.add_argument('password', required=True)
        args = parser.parse_args()

        user = mongo.db.users.find_one({'username': args['username']})

        if user and bcrypt.checkpw(args['password'].encode('utf-8'), user['password']):
            # Generate a Bearer token with user identifier ('sub' claim)
            access_token = create_access_token(identity=user['username'])

            # Return the Bearer token in the response
            return {'token': access_token, 'token_type': 'Bearer', 'userid': str(user['_id'])}

        return {'message': 'Invalid username or password'}, 401

# Squad Endpoints
class CreateSquad(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('squadName', type=str, required=True)
        parser.add_argument('leaderID', type=str, required=True)
        parser.add_argument('eventName', type=str, required=True)
        parser.add_argument('skillsRequired', type=str, action='append', required=True)
        parser.add_argument('fromDate', type=str, required=True)  # Assuming the date is passed as a string
        parser.add_argument('toDate', type=str, required=True)  # Assuming the date is passed as a string
        parser.add_argument('timeCommitment', type=int, required=True)
        parser.add_argument('personality', type=str, required=True)

        args = parser.parse_args()

        existing_squad = mongo.db.squad.find_one({'squadName': args['squadName']})

        if existing_squad:
            return {'message': 'Squad already exists'}, 400

        # Assuming you have a date format that you need to convert from string to a datetime object
        from_date = datetime.datetime.strptime(args['fromDate'], '%Y-%m-%d') if args['fromDate'] else None
        to_date = datetime.datetime.strptime(args['toDate'], '%Y-%m-%d') if args['toDate'] else None

        squad_data = {
            'squadName': args['squadName'],
            'leaderID': args['leaderID'],
            'eventName': args['eventName'],
            'skillsRequired': args.get('skillsRequired', []),
            'fromDate': from_date,
            'toDate': to_date,
            'timeCommitment': args.get('timeCommitment', 0),
            'personality': args.get('personality', ''),
            'confirmedMembers': [],
            'invitedMembers': [],
        }

        squad_id = mongo.db.squad.insert_one(squad_data)

        return {'message': 'Squad added'}, 201

@app.route('/get-all-squad', methods=['GET'])
@jwt_required()
def GetAllSquads():
    squads = list(mongo.db.squad.find({}))
    squad_names = [squad['squadName'] for squad in squads]
    return {'squad': squad_names}, 200

@app.route('/get-all-users', methods=['GET'])
@jwt_required()
def GetAllUsers():
    users = list(mongo.db.users.find({}))
    users_names = [user['username'] for user in users]
    return {'users': users_names}, 200

# Filter endpoint
class Filter(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('personality', type=str, required=True)
        parser.add_argument('timeCommitment', type=int, required=True)
        parser.add_argument('skillsRequired', type=str, action='append', required=True)

        args = parser.parse_args()
        personality = args['personality']
        time_commitment = args['timeCommitment']
        skills_required = args['skillsRequired']

        users = list(mongo.db.users.find({
            'personality': personality,
            'timeCommitment': time_commitment,
            'skills': {"$in" : skills_required}
        }))

        users_names = [user['username'] for user in users]

        return {'message': users_names}, 201

api.add_resource(Register, '/register')
api.add_resource(Login, '/login')
api.add_resource(CreateSquad, '/create-squad')
api.add_resource(Filter, '/filter')

if __name__ == '__main__':
    app.run(debug=True)