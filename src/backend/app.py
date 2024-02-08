from flask import Flask, request
from flask_cors import CORS
from eval_parser import EvalParser
from openai import OpenAI

app = Flask(__name__)
CORS(app)
client = OpenAI()

@app.get("/")
def get_test():
    fen = request.args.get("fen")
    ep = EvalParser("../../stockfish.exe", fen).diff()
    # resp = get_response(ep)
    resp = ""
    return f"{fen}<br><br>{ep}<br><br>{resp}"


def get_response(message):
    response = client.chat.completions.create(
            model="gpt-3.5-turbo-16k-0613",
            messages=[
                {"role": "system", "content": "im going to give you an evaluation of a chess position, the evaluation is    broken down into different terms. can you generate a comprehensive text for it? white: {'material': 0.48, 'imbalance': 0.31, 'pawns': 0.03, 'knights': -0.14, 'bishops': 0.0, 'rooks': 0.05, 'queens': 0.0, 'mobility': 0.36, 'king safety': -3.5, 'threats': 0.7, 'passed': 0.88, 'space': 0.0, 'winnable': 0.0}, black: {'material': 0.48, 'imbalance': 0.31, 'pawns': 0.12, 'knights': 0.0, 'bishops': -0.05, 'rooks': 0.15, 'queens': 0.0, 'mobility': 0.54, 'king safety': -0.19, 'threats': 0.84, 'passed': 0.0, 'space': 0.0, 'winnable': 0.0}"}
                ]
            )
    return response.choices[0].message
