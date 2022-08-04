from flask import Flask, jsonify, request, session

app = Flask(__name__)

@app.route('/')
def index():
    return 'Backend'