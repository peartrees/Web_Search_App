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
        print(input_data)
        # ここでAPIの呼び出し
        # google_result = {'title1':'title1', 'LINK1':'LINK1'}
        # bing_result = {'title2':'title2', 'LINK2':'LINK2'}
        # search_result = [google_result, bing_result]
        # Bing Web Search APIを利用してWeb検索結果を取得する
        SUBSCRIPTION_KEY = 'd4d1d0c6fb0a494ba8fa3906b1224e48' # 取得したキーをここに入力する
        search_url = f"https://api.bing.microsoft.com/v7.0/search"
        params = {"q": input_data, "count": 50, "textDecorations": True, "textFormat": "HTML"}
        headers = {"Ocp-Apim-Subscription-Key" : SUBSCRIPTION_KEY} # HTTPリクエストのヘッダにAPIキーを含める
        response = requests.get(search_url, headers=headers, params=params) # 実際にリクエストを送る
        result = response.json()
        return result

Call_Search_API = Api(Search_bp)
Call_Search_API.add_resource(Call_Search, '')
