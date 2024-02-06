from flask import Flask, request
from eval_parser import EvalParser

app = Flask(__name__)

@app.get("/")
def get_test():
    fen = request.args.get("fen")
    ep = EvalParser(r"C:\Users\sauer\Downloads\stockfish-windows-x86-64-avx2\stockfish\stockfish-windows-x86-64-avx2.exe")
    return f"{fen}<br><br>{ep.stockfish_eval(fen)}"
