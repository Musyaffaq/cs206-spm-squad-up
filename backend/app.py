from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from flask_restful import Api, Resource, reqparse
import jwt
import bcrypt
from datetime import datetime, timedelta
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token, JWTManager
from flask_cors import CORS
import datetime
from bson import ObjectId

app = Flask(__name__)
CORS(app)

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

        return {'message': 'Squad added', 'squadid': str(squad_id.inserted_id)}, 201

@app.route('/get-all-squad', methods=['GET'])
@jwt_required()
def GetAllSquads():
    squads = list(mongo.db.squad.find({}))
    squad_names = [squad['squadName'] for squad in squads]
    return {'squad': squad_names}, 200

@app.route('/get-all-users', methods=['GET'])
# @jwt_required()
def GetAllUsers():
    users = list(mongo.db.users.find({}))
    usersList = []

    for user in users:
        user_info = {
            'username': user['username'],
            'userid':str(user['_id']),
            'skills': user['skills'],
            'personality': user['personality'],
            'timeCommitment': user['timeCommitment']
        }
        usersList.append(user_info)

    return {'usersList': usersList}, 201

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

        usersList = []

        for user in users:
            user_info = {
                'username': user['username'],
                'userid':str(user['_id']),
                'skills': user['skills'],
                'personality': user['personality'],
                'timeCommitment': user['timeCommitment']
            }
            usersList.append(user_info)

        return {'usersList': usersList}, 201

# Get a specific user profile
@app.route('/get-user/<string:userId>', methods=['GET'])
# @jwt_required()
def GetUser(userId):
    user = mongo.db.users.find_one({'_id': ObjectId(userId)})

    if user:
        user_info = {
            'userid': str(user['_id']),
            'skills': user['skills'],
            'personality': user['personality'],
            'timeCommitment': user['timeCommitment']
        }
        return {'user': user_info}, 200
    else:
        return {'message': 'User not found'}, 404

# Get a specific squad based on squadId
@app.route('/get-squad/<string:squadId>', methods=['GET'])
# @jwt_required()
def GetSquad(squadId):
    squad = mongo.db.squad.find_one({'_id': ObjectId(squadId)})

    if squad:
        squad_info = {
            'squadName': squad['squadName'],
            'eventName': squad['eventName'],
            'leaderID': squad['leaderID'],
            'skillsRequired': squad['skillsRequired'],
            'fromDate': squad['fromDate'],
            'toDate': squad['toDate'],
            'timeCommitment': squad['timeCommitment'],
            'personality': squad['personality'],
            'confirmedMembers': squad['confirmedMembers']
        }
        return {'squad': squad_info}, 200
    else:
        return {'message': 'Squad not found'}, 404

# Get a specific squad based on leaderId
@app.route('/get-squad-by-leader/<string:leaderId>', methods=['GET'])
@jwt_required()
def GetSquadByLeader(leaderId):
    squad = mongo.db.squad.find_one({'leaderID': leaderId})

    if squad:
        squad_info = {
            'squadName': squad['squadName'],
            'eventName': squad['eventName'],
            'leaderID': squad['leaderID'],
            'skillsRequired': squad['skillsRequired'],
            'fromDate': squad['fromDate'],
            'toDate': squad['toDate'],
            'timeCommitment': squad['timeCommitment'],
            'personality': squad['personality'],
            'confirmedMembers': squad['confirmedMembers']
        }
        return {'squad': squad_info}, 200
    else:
        return {'message': 'Squad not found'}, 404

@app.route('/add-user', methods=['POST'])
# @jwt_required()
def InviteMember():
    parser = reqparse.RequestParser()
    parser.add_argument('squadName', required=True)
    parser.add_argument('memberName', required=True)
    args = parser.parse_args()
    print(args)

    event_id = mongo.db.squad.update_one(
        {
            'squadName':args['squadName']
        },
        {
            '$push': {'invitedMembers': args['memberName']}
        })
    return {'message':'Member invited'}





api.add_resource(Register, '/register')
api.add_resource(Login, '/login')
api.add_resource(CreateSquad, '/create-squad')
api.add_resource(Filter, '/filter')

if __name__ == '__main__':
    app.run(debug=True)