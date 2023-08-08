from flask import Flask,request, jsonify
from flask_restx import Api,Resource,fields
from flask_sqlalchemy import SQLAlchemy
from models import Post, User, db
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from posts import post_ns
from auth import auth_ns
from flask_cors import CORS
from config import DevConfig


app = Flask(__name__)
app.config.from_object(DevConfig)
db.init_app(app)

CORS(app)

migrate=Migrate(app,db)
JWTManager(app)

api=Api(app,doc='/docs')

api.add_namespace(post_ns)
api.add_namespace(auth_ns)
    

@app.shell_context_processor
def make_shell_context():
    return {
        'db':db,
        'Post':Post,
        'user': User
    }


if __name__ == '__main__':
    app.run()