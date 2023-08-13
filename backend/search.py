from flask_restx import Namespace, Resource, fields
from flask import request, render_template
from models import Post, User
from sqlalchemy import or_

search_ns=Namespace('post',description="A namespace for Search")

search_model=search_ns.model(
    "Search",
    {
        "search_string": fields.String()
    }
)


@search_ns.route("/search")
class SearchResource(Resource):

    @search_ns.marshal_list_with(search_model)
    def search(self):
        data = request.get_json()
        search_string = data.get('search_string')
        filter_condition = or_(
            Post.description.ilike(f"%{search_string}%"),  # ilike for case-insensitive search
            Post.title.ilike(f"%{search_string}%")
        )
        posts = Post.query.filter(filter_condition).all()
        filter_condition = or_(
            User.username.ilike(f"%{search_string}%"),  # ilike for case-insensitive search
            User.email.ilike(f"%{search_string}%")
        )
        users = User.query.filter(filter_condition).all()
        return {"users":users, "posts":posts}
        # render_template("search", users, posts)



        