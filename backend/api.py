from flask import Blueprint, jsonify, request, session
from flask_restful import Api, Resource
import requests
import json
from lxml import etree
from googleapiclient.discovery import build

# postされたテキストを検索するapi(POSTメソッド)
Search_bp = Blueprint('Call_Search_API', __name__, url_prefix='/api/call_search/post')

# postされたテキストを検索するapi(getメソッド)
Suggest_bp = Blueprint('Get_Suggest_API', __name__, url_prefix='/api/get_suggest/get')

class Call_Search(Resource):
    def post(self):
        total_result = []
        # postされたデータを読み込み
        input_data = request.json
        # Bing Web Search APIを利用してWeb検索結果を取得する

        # SUBSCRIPTION_KEY = 'd4d1d0c6fb0a494ba8fa3906b1224e48'
        # search_url = f"https://api.bing.microsoft.com/v7.0/search"
        # params = {"q": input_data["text"], "count": 10, "textDecorations": True, "textFormat": "HTML"}
        # # HTTPリクエストのヘッダにAPIキーを含める
        # headers = {"Ocp-Apim-Subscription-Key" : SUBSCRIPTION_KEY}
        # # 実際にリクエストを送る
        # bing_response = requests.get(search_url, headers=headers, params=params)
        # bing_result = bing_response.json()["webPages"]["value"]
        # total_result.append(bing_result)

        # ↑↑↑↑ここまでがBingの検索↑↑↑↑
        # ↓↓↓↓ここからGoogle検索↓↓↓↓
        print(input_data)
        print(input_data["text"])
        CUSTOM_SEARCH_ENGINE_ID = "4c81e5f5bf3c54cf3"
        GOOGLE_API_KEY          = "AIzaSyDhwvVQkJsxQAzEyjQoyw2kWChfjB1YKJc"
        search = build("customsearch","v1",developerKey = GOOGLE_API_KEY)
        ggl_response = search.cse().list(q = input_data["text"], cx = CUSTOM_SEARCH_ENGINE_ID,
        lr = 'lang_ja', gl = 'jp', num = 10, start = 1).execute()
        ggl_result = ggl_response["items"]
        total_result.append(ggl_result)
        print(total_result)
        return total_result


class Get_Suggest(Resource):
    def post(self):
        user_query = request.json["text"]
        google_r = requests.get("http://www.google.com/complete/search",
                         params={'q':user_query,
                                 'hl':'ja',
                                 'ie':'utf_8',
                                 'oe':'utf_8',
                                 'output': 'toolbar'})

        google_root = etree.XML(google_r.text)
        google_sugs = google_root.xpath("//suggestion")
        google_sugstrs = [s.get("data") for s in google_sugs]
        print(google_sugstrs)
        return google_sugstrs


Call_Search_API = Api(Search_bp)
Call_Search_API.add_resource(Call_Search, '')
#
Get_Suggest_API = Api(Suggest_bp)
Get_Suggest_API.add_resource(Get_Suggest, '')
