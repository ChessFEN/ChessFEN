from stockfish import Stockfish

class EvalParser:

    def __init__(self, path):
        self._sf = Stockfish(path)
        self._eval = ""
        self.white = EvalData()
        self.black = EvalData()

    def stockfish_eval(self, fen, depth=10):
        self._eval = self._sf.evaluate(fen, depth)
        full_evaluation = self._eval.split("\n")
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

            # print(f"{term} {white} {black} {total}")
        # print(f"white: {self.white}\n\nblack: {self.black}")
        return f"white: {self.white}\n\nblack: {self.black}"
        # print(evaluation)
        # first static analysis
        # do bestmove
        # second static analysis
        # check which parameters changed
        # XXX if in check, eval wont work

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

# eval = EvalParser("/mnt/c/Users/sauer/Downloads/stockfish-windows-x86-64-avx2/stockfish/stockfish-windows-x86-64-avx2.exe")
# eval = EvalParser(r"C:\Users\sauer\Downloads\stockfish-windows-x86-64-avx2\stockfish\stockfish-windows-x86-64-avx2.exe")
# eval.stockfish_eval("5rk1/6pp/PNp5/2Pp4/1P1Pbq1P/6R1/4Q2P/6K1 b -", 20)
