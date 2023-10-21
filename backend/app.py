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

# Register and Login API endpoints will go here.
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
    
@app.route('/user/<username>', methods=['GET'])
@jwt_required()
def get_user(username):
    return f"User Profile: {username}"
   
api.add_resource(Register, '/register')
api.add_resource(Login, '/login')


if __name__ == '__main__':
    app.run(debug=True)