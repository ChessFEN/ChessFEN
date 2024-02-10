from stockfish import Stockfish
import copy

class EvalParser:

    def __init__(self, path, fen):
        self._sf = Stockfish(path)
        self._fen = fen
        self._bm = ""
        self._eval = ""
        self.white = EvalData()
        self.black = EvalData()

    def stockfish_static_eval(self, moves=""):
        # XXX if in check, eval wont work
        eval = self._sf.evaluate(self._fen, moves)
        full_evaluation = eval.split("\n")
        self._eval = full_evaluation[-5]
        evaluation = full_evaluation[4:full_evaluation.index("")]
        evaluation = evaluation[:evaluation.index("+------------+-------------+-------------+-------------+")]
        for e in evaluation:
            s = list(filter(None, e.split("|")))
            term = s[0].strip()
            white = list(filter(None, s[1].split(" ")))[0]
            black = list(filter(None, s[2].split(" ")))[0]
            total = list(filter(None, s[3].split(" ")))[0]

            try:
                self.white.data[term.lower()] = float(white)
                self.black.data[term.lower()] = float(black)
            except ValueError:
                self.white.data[term.lower()] = float(total)
                self.black.data[term.lower()] = float(total)

        return f"white: {self.white}<br>black: {self.black}"

    def pv(self, depth=10):
        pv = self._sf.pv(self._fen, depth).split("\n")
        line = pv[-3].split(" pv")[1]
        self._bm = line.split()[0]
        self.stockfish_static_eval(line)

    def diff(self, depth=10):
        self.stockfish_static_eval()
        white, black = copy.deepcopy(self.white), copy.deepcopy(self.black)
        self.pv(depth)
        return f"white: {self.white}\nblack: {self.black}"

class EvalData:

    def __init__(self):
        self.data = {
            "material" : { 0.0 },
            "imbalance" : { 0.0 },
            "pawns" : { 0.0 },
            "knights" : { 0.0 },
            "bishops" : { 0.0 },
            "rooks" : { 0.0 },
            "queens" : { 0.0 },
            "mobility" : { 0.0 },
            "king safety" : { 0.0 },
            "threats" : { 0.0 },
            "passed" : { 0.0 },
            "space" : { 0.0 },
            "winnable" : { 0.0 }
            # mate
        }


    def __str__(self):
        return str(self.data)
