import subprocess

class Stockfish:

    def __init__(self, path):
        self._stockfish = subprocess.Popen(
            path,
            universal_newlines=True,
            stdin=subprocess.PIPE,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT
        )
        self._put("uci")
        while self._read() != "uciok":
            pass

    def _put(self, command):
        self._stockfish.stdin.write(f"{command}\n")
        self._stockfish.stdin.flush()

    def _read(self):
        return self._stockfish.stdout.readline().strip()

    def set_fen(self, fen):
        self._put(f"position fen {fen}")

    def set_depth(self, depth):
        self._put(f"go depth {depth}")

    def do_move(self, fen, moves):
        self._put(f"position fen {fen} moves{moves}")

    def evaluate(self, fen, moves):
        if moves != "":
            self.do_move(fen, moves)
        else:
            self.set_fen(fen)
        self._put("eval")
        self._put("isready")
        while "Contributing" not in self._read():
            pass
        eval = ""
        s = self._read()
        while s != "readyok":
            eval += f"{s}\n"
            s = self._read()
        return eval

    def pv(self, fen, depth):
        self.set_fen(fen)
        self.set_depth(depth)
        pv = self._read()
        while "bestmove" not in pv:
            pv += f"{self._read()}\n"
        return pv
