from flask import Blueprint, jsonify, request, session
from flask_restful import Api, Resource
import json

# postされたテキストを検索するapi(POSTメソッド)
Search_bp = Blueprint('Call_Search_API', __name__, url_prefix='/api/post')
class Call_Search(Resource):
    def post(self):
        # postされたデータを読み込み
        input_data = request.json
        # ここでAPIの呼び出し
        google_result = {'title1':'title1', 'LINK1':'LINK1'}
        bing_result = {'title2':'title2', 'LINK2':'LINK2'}
        search_result = [google_result, bing_result]
        return search_result

Call_Search_API = Api(Search_bp)
Call_Search_API.add_resource(Call_Search, '')
