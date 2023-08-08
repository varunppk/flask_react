from flask_restx import Namespace, Resource, fields
from flask_jwt_extended import jwt_required
from flask import request
from models import Post



post_ns=Namespace('post',description="A namespace for Posts")

post_model=post_ns.model(
    "Post",
    {
        "id":fields.Integer(),
        "title":fields.String(),
        "description": fields.String()

    }
)

@post_ns.route('/hello')
class HelloResource(Resource):
    def get(self):
        return {'message':'Hello Everyone'}
    

@post_ns.route('/posts')
class PostsResource(Resource):

    @post_ns.marshal_list_with(post_model)
    def get(self):
        posts=Post.query.all()
        return posts

    @post_ns.marshal_with(post_model)
    @post_ns.expect(post_model)
    @jwt_required()
    def post(self):
        data=request.get_json()
        new_post=Post(
            title=data.get('title'),
            description=data.get('description')
        )
        new_post.save()

        return new_post,201

@post_ns.route('/post/<int:id>')
class PostResource(Resource):

    @post_ns.marshal_with(post_model)
    def get(self,id):
        post = Post.query.get_or_404(id)
        return post

    @post_ns.marshal_with(post_model)
    @jwt_required()
    def put(self,id):
        post_to_update=Post.query.get_or_404(id)

        data=request.get_json()

        post_to_update.update(data.get('title'),data.get('description'))
        
        # post_to_update.title=data.get('title')
        # post_to_update.description=data.get('description')
        # post_to_update.save()

        return post_to_update,201

    @post_ns.marshal_with(post_model)
    @jwt_required()
    def delete(self,id):
        post_to_delete=Post.query.get_or_404(id)
        post_to_delete.delete()
        return post_to_delete

