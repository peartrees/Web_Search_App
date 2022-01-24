from flask import Flask, render_template
from api import Search_bp
from api import Suggest_bp
from api import SQL_bp


app = Flask(__name__, static_folder='../dist/static', template_folder='../dist')
app.register_blueprint(Search_bp)
app.register_blueprint(Suggest_bp)
app.register_blueprint(SQL_bp)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    return render_template('index.html')

if __name__ == '__main__':
    app.run()
