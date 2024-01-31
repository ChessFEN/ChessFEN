# Zeitplan

| **Woche 1**  | **Montag**       | **Dienstag**      | **Mittwoch**                      | **Donnerstag**            | **Freitag**          |
| ------------ | ---------------- | ----------------- | --------------------------------- | ------------------------- | -------------------- |
| **Abgabe**   | Ideeneinreichung | ---               | Beschreibung Projekt              | ---                       | Zwischenpräsentation |
| **Workflow** | ---              | Ideenfestlegung   | Detaillierte Recherche            | Implementierung           | ---                  |
| **Workflow** | ---              | Recherche         | Vorbereitung Beschreibung Projekt | Vorbereitung Präsentation | ---                  |
| **Workflow** | ---              | Konkurrenzanalyse | Implementierung                   | ---                       | ---                  |

| **Woche 2 2** | **Montag**         | **Dienstag**    | **Mittwoch**    | **Donnerstag**            | **Freitag**     |
| ------------- | ------------------ | --------------- | --------------- | ------------------------- | --------------- |
| **Abgabe**    | Praxispräsentation | ---             | ---             | ---                       | Endpräsentation |
| **Workflow**  | Implementierung    | Implementierung | Implementierung | Implementierung           |                 |
| **Workflow**  | ---                | ---             | ---             | Vorbereitung Präsentation | ---             |
| **Workflow**  | ---                | ---             | ---             | ---                       | ---             |

# Ziele
1. Einerarbeitung in das Thema
2. Herausarbeitung verschiedener Umsetzungsstrategien und entwickeln dieser
3. MVP in Form einer Computeranwendung, die einen FEN ([Forsyth-Edwards Notation](https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation)) als Input erwartet und eine Erklärung über eine Schachposition zurückliefert und dabei besten eigenen Zug erklärt
4. Erweiterung auf den gegnerischen besten Zug
5. Erweiterung auf den jeweils schlechtesten Zug
6. Erstellen einer UI -> Entweder als Website oder als Erweiterung für den Browser

# Anforderung
- Das fertige MVP soll einen FEN als Input aufnehmen
- Das fertige MVP soll den besten Zug für den Spieler, der aktuell an der Reihe ist, finden
- Das fertige MVP soll den besten Zug für den Spieler, der aktuell an der Reihe ist, in menschlicher, verständlicher Sprache Erklären können, warum genau dies der beste Zug ist und welche Chancen sich aus diesem Zug ergeben
- Das erweiterte MVP soll den besten Zug für den Spieler, der als nächstes an der Reihe ist, finden
- Das erweiterte MVP soll den besten Zug für den Spieler, der aktuell an der Reihe ist, in menschlicher, verständlicher Sprache Erklären können, warum genau dies der beste Zug ist und welche Chancen sich aus diesem Zug ergeben
- Das erweiterte MVP soll jeweils den schlechtesten Zug für den Spieler, der aktuell an der Reihe ist und den Spieler, der als nächstes an der Reihe ist, finden
- Das erweiterte MVP soll den schlechtesten Zug für den Spieler, der aktuell an der Reihe ist und den Spieler, der als nächstes an der Reihe ist, in menschlicher, verständlicher Sprache Erklären können, warum genau dies der beste Zug ist und welche Chancen sich aus diesem Zug ergeben
- Das erweiterte MVP soll anschaulich dargestellt werden
  
# Mögliche Umsetzungsstrategien inkl. Technologien

## Fine-tuned LLM -> Erklärung [Constantin]
### Benötigte Hardware
- Standard PC mit Rücksicht auf hohen RAM (min. 16GB)

### Ablauf und Technologie

- Benutzen eines Open Source Fine-tuned LLM Modells (Auswahl einer oder mehrerer Modelle)
  - Quelle allgemeines Vorgehen: https://www.youtube.com/watch?v=Q9zv369Ggfk
  - Quelle Benutzen von LLM Modellen: https://ollama.ai/download
  - Quelle LLM Modelle: https://huggingface.co/
- Generieren eines Datensatzes, dass FEN als Input und gute Analysen als Output liefert
- Trainieren von einem/mehreren Modellen
- Output einer Erklärung bei Input eines FEN

## Chess Engine -> Evaluation -> LLM -> Erklärung [Aaron]
### Benötigte Hardware
- Standard PC

### Ablauf und Technologie
- Programmieren einer eigener Chess Engine
  - Quelle Erklärung Algorithmus: https://www.youtube.com/watch?v=w4FFX_otR-4
- Reverse Engineering des Minimax Baums und nachvollziehen Evaluationsfunktion
  - Quelle Stockfish source code: https://github.com/official-stockfish/Stockfish
  - Quelle zur Stockfish Evaluierungsfunktion: https://www.chessprogramming.org/Stockfish#Evaluation_Guide
- Input der Schritte der besten/schlechtesten Evaluationen in eine LLM
- Output einer Erklärung

# Konkurrenzanalyse

- https://chessgpt.ai/ -> Nicht das was wir wollen
- https://chessvision.ai/firefox-extension-success/?utm_source=firefox&utm_medium=store&utm_campaign=2.2.0 -> Nicht das was wir wollen
