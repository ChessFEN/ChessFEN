from stockfish import Stockfish

sf = Stockfish("/mnt/c/Users/sauer/Downloads/stockfish-windows-x86-64-avx2/stockfish/stockfish-windows-x86-64-avx2.exe")
eval = sf.evaluation("4q1k1/1Q4p1/3bp2p/pN1p1pn1/3P3K/P3PPP1/1Pr4P/8 b -", 20)
