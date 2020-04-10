import os

from flask import Flask,render_template, jsonify, request
from flask_mongoengine import MongoEngine
from pymongo import MongoClient


app = Flask(__name__, template_folder='./templates')


###


@app.route('/')
def index():
    return render_template('index.html')

###

app.config.update(
        DEBUG=True
        )

if __name__ == '__main__':
    app.jinja_env.auto_reload = True
    app.run()
