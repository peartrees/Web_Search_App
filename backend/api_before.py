from flask import Blueprint, jsonify, request, session
from flask_restful import Api, Resource
import requests
import json

# postされたテキストを検索するapi(POSTメソッド)
Search_bp = Blueprint('Call_Search_API', __name__, url_prefix='/api/post')
class Call_Search(Resource):
    def post(self):
        # postされたデータを読み込み
        input_data = request.json
        # Bing Web Search APIを利用してWeb検索結果を取得する
        SUBSCRIPTION_KEY = 'd4d1d0c6fb0a494ba8fa3906b1224e48'
        search_url = f"https://api.bing.microsoft.com/v7.0/search"
        params = {"q": input_data["text"], "count": 10, "textDecorations": True, "textFormat": "HTML"}
        # HTTPリクエストのヘッダにAPIキーを含める
        headers = {"Ocp-Apim-Subscription-Key" : SUBSCRIPTION_KEY}
        # 実際にリクエストを送る
        response = requests.get(search_url, headers=headers, params=params)
        result = response.json()["webPages"]["value"]
        return result

Call_Search_API = Api(Search_bp)
Call_Search_API.add_resource(Call_Search, '')
