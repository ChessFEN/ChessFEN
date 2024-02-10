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
    ep = EvalParser("../../stockfish.exe", fen)
    diff = ep.diff()
    resp = get_response(diff)
    return f"{ep._eval}<br>bestmove: {ep._bm}<br><br>{resp}"


def get_response(static_eval):
    response = client.chat.completions.create(
            model="gpt-3.5-turbo-16k-0613",
            messages=[
                {"role": "system", "content": "im going to give you an evaluation of a chess position that is reached if the 10 best moves are played, the evaluation is broken down into different terms. can you generate a comprehensive text for it?:\n" + static_eval}
                ]
            )
    return response.choices[0].message.content
