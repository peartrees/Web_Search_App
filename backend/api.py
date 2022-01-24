from flask import Blueprint, jsonify, request, session
from flask_restful import Api, Resource
import requests
import json
from lxml import etree
import time
import datetime
from googleapiclient.discovery import build
import mysql.connector

# postされたテキストを検索するapi(POSTメソッド)
Search_bp = Blueprint('Call_Search_API', __name__, url_prefix='/api/call_search/post')

# postされたテキストを検索するapi(getメソッド)
Suggest_bp = Blueprint('Get_Suggest_API', __name__, url_prefix='/api/get_suggest/get')

# データベース処理を扱うapi(postメソッド)
SQL_bp = Blueprint('Send_SQL_API', __name__, url_prefix='/api/send_sql/post')

class Call_Search(Resource):
    def post(self):
        time.sleep(1)
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
        CUSTOM_SEARCH_ENGINE_ID = "4c81e5f5bf3c54cf3"
        GOOGLE_API_KEY          = "AIzaSyDhwvVQkJsxQAzEyjQoyw2kWChfjB1YKJc"
        search = build("customsearch","v1",developerKey = GOOGLE_API_KEY)
        ggl_response = search.cse().list(q = input_data["text"], cx = CUSTOM_SEARCH_ENGINE_ID,
        lr = 'lang_ja', gl = 'jp', num = 10, start = 1).execute()
        ggl_result = ggl_response["items"]
        total_result.append(ggl_result)
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
        # print(google_sugstrs)
        return google_sugstrs


class Send_SQL(Resource):
    def post(self):
        user_query = request.json["text"]
        dt_now = datetime.datetime.now()
        print("Executing SQL")
        def conn_db():
              conn_to_db = mysql.connector.connect(
                      host = 'localhost',      # localhostでもOK
                      user = 'yutaimasaka',    # データベースにログインするuser
                      passwd = 'pass1234',     # データベースへのパスワード
                      db = 'search_log'        # 利用するデータベース
              )
              return conn_to_db

        # SQL文
        sql = ('''
            INSERT INTO logs
                (time, query)
            VALUES
                (%s, %s)
            ''')
        data = [(dt_now, user_query)]
        # sql = 'SELECT * FROM logs'

        try:
              # DBとのconnection確立
              con_to_db = conn_db()
              # カーソルを取得
              cursor = con_to_db.cursor()
              # sql文を投げる
              cursor.executemany(sql, data)
              # cursor.execute(sql)
              con_to_db.commit()
              print(f"{cursor.rowcount} records inserted.")
              cursor.close()
              con_to_db.close()
              # selectの結果を全件タプルに格納
              # rows = cursor.fetchall()
              # print(rows)

        except(mysql.connector.errors.ProgrammingError) as e:
              print('エラー')
              print(e)

        # print(f'{sql.split()[0]}文実行')
        return "Done"


Call_Search_API = Api(Search_bp)
Call_Search_API.add_resource(Call_Search, '')

Get_Suggest_API = Api(Suggest_bp)
Get_Suggest_API.add_resource(Get_Suggest, '')

Send_SQL_API = Api(SQL_bp)
Send_SQL_API.add_resource(Send_SQL, '')
