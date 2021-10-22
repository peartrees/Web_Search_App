from flask import Blueprint, jsonify, request, session
from flask_restful import Api, Resource
import json

# postされたテキストをカウントするapi(POSTメソッド)
Search_bp = Blueprint('Call_Search_API', __name__, url_prefix='/api/post')
class Call_Search(Resource):
    def post(self):
        # postされたデータを読み込み
        input_data = request.json
        # ここでAPIの呼び出し

        google_result = {'title1':'title', 'LINK1':'LINK'}
        return jsonify(google_result)

Call_Search_API = Api(Search_bp)
Call_Search_API.add_resource(Call_Search, '')
