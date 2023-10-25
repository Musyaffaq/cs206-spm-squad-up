from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from flask_restful import Api, Resource, reqparse
import jwt
import bcrypt
from datetime import datetime, timedelta
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token, JWTManager
from flask_cors import CORS


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
        args = parser.parse_args()

        existing_user = mongo.db.users.find_one({'username': args['username']})

        if existing_user:
            return {'message': 'Username already exists'}, 400

        hashed_password = bcrypt.hashpw(args['password'].encode('utf-8'), bcrypt.gensalt())
        user_id = mongo.db.users.insert_one({'username': args['username'], 'password': hashed_password})

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
            return {'token': access_token, 'token_type': 'Bearer'}

        return {'message': 'Invalid username or password'}, 401

# Group Endpoints

# Event Endpoints
class CreateEvent(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('eventName', required=True)

        args = parser.parse_args()

        existing_event = mongo.db.event.find_one({'id': args['eventName']})

        if existing_event:
            return {'message': 'Event already exists'}, 400

        event_id = mongo.db.event.insert_one({'EventName':  args['eventName']})

        return {'message': 'Event added'}, 401

@app.route('/get-all-events', methods=['GET'])
@jwt_required()
def GetAllEvent():
    events = list(mongo.db.event.find({}))
    event_names = [event['EventName'] for event in events]
    return {'events': event_names}, 200

api.add_resource(Register, '/register')
api.add_resource(Login, '/login')
api.add_resource(CreateEvent, '/create-event')

if __name__ == '__main__':
    app.run(debug=True)