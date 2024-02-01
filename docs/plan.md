# Zeitplan

| **Woche 1**  | **Montag**       | **Dienstag**      | **Mittwoch**                      | **Donnerstag**            | **Freitag**          |
| ------------ | ---------------- | ----------------- | --------------------------------- | ------------------------- | -------------------- |
| **Abgabe**   | Ideeneinreichung | ---               | Beschreibung Projekt              | ---                       | Zwischenpräsentation |
| **Workflow** | ---              | Ideenfestlegung   | Detaillierte Recherche            | Implementierung           | ---                  |
| **Workflow** | ---              | Recherche         | Vorbereitung Beschreibung Projekt | Vorbereitung Präsentation | ---                  |
| **Workflow** | ---              | Konkurrenzanalyse | Implementierung                   | ---                       | ---                  |

| **Woche 2** | **Montag**         | **Dienstag**    | **Mittwoch**    | **Donnerstag**            | **Freitag**     |
| ------------- | ------------------ | --------------- | --------------- | ------------------------- | --------------- |
| **Abgabe**    | Praxispräsentation | ---             | ---             | ---                       | Endpräsentation |
| **Workflow**  | Implementierung    | Implementierung | Implementierung | Implementierung           |                 |
| **Workflow**  | ---                | ---             | ---             | Vorbereitung Präsentation | ---             |
| **Workflow**  | ---                | ---             | ---             | ---                       | ---             |

# Ziele
1. Einerarbeitung in das Thema
2. Herausarbeitung verschiedener Umsetzungsstrategien und entwickeln dieser
3. MVP in Form einer Computeranwendung, die eine FEN ([Forsyth-Edwards Notation](https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation)) als Input erwartet und eine Erklärung über eine Schachposition zurückliefert und dabei den besten eigenen Zug erklärt
4. Erweiterung auf den gegnerischen besten Zug
5. Erstellen einer UI -> Entweder als Website oder als Erweiterung für den Browser

# Anforderungen
- Das fertige MVP soll eine FEN als Input aufnehmen
- Das fertige MVP soll die aktuelle Schachposition evaluieren (in centipawns) und in menschlich verständlicher Sprache ausdrücken können
- Das fertige MVP soll den besten Zug für den Spieler, der aktuell an der Reihe ist, finden
- Das fertige MVP soll den besten Zug für den Spieler, der aktuell an der Reihe ist, in menschlich verständlicher Sprache erklären können, warum genau dies der beste Zug ist und welche Chancen sich aus diesem Zug ergeben
- Das erweiterte MVP soll einen Schachzug als Input aufnehmen können und erklären können, warum dieser Zug gut/schlecht ist
- Das erweiterte MVP soll anschaulich dargestellt werden
- Das erweiterte MVP soll über die Möglichkeit verfügen, die aktuelle Schachposition zu verändern und erneut zu evaluieren
- Das erweiterte MVP soll eine PGN als Input aufnehmen und nach jedem Zug eine Evaluierung in menschlich verständlicher Sprache ausgeben
  
# Mögliche Umsetzungsstrategien inkl. Technologien

## Fine-tuned LLM -> Erklärung [Constantin]
### Benötigte Hardware
- Standard PC mit Rücksicht auf hohen RAM (min. 16GB)

### Ablauf und Technologie

### Unterscheidung

1. Fine-tune ein pre-trained base LLM Modells
   - Festlegen einer exakten Task
     - "Erkläre mir für die folgende Schachposition in FEN Notation eine den besten Zug für [weiß/schwarz]"
   - Auswahl eines geeigneten base LLM Modells
     - Question Answering Modell: Frage + Kontext (Stockfish Analyse)
     - 
   - Erstellen einer Prompt/Answer Datenbank (Supervised. Gibt noch Self-Supervised und Reinforcement Learning)
     - siehe PADatabase
2. Database embedding

### Grober Ablauf

- Benutzen eines Open Source Fine-tuned LLM Modells (Auswahl einer oder mehrerer Modelle)
  - Quelle allgemeines Vorgehen: https://www.youtube.com/watch?v=Q9zv369Ggfk
  - Quelle allgemeines Vorgehen: https://www.youtube.com/watch?v=eC6Hd1hFvos
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
- Oder: Reverse Engineering des Minimax Baums und nachvollziehen Evaluationsfunktion
  - Quelle Stockfish source code: https://github.com/official-stockfish/Stockfish
  - Quelle zur Stockfish Evaluierungsfunktion: https://www.chessprogramming.org/Stockfish#Evaluation_Guide
- Input der Schritte der besten Evaluationen in eine LLM, Verarbeitung im Backend (Python)
- Output einer Erklärung via eines Frontends Terminal oder als Webapplikation (Reacht/Next.js/HTML/TS/CSS)

# Konkurrenzanalyse

- https://chessgpt.ai/ -> Nicht das was wir wollen
- https://chessvision.ai/firefox-extension-success/?utm_source=firefox&utm_medium=store&utm_campaign=2.2.0 -> Nicht das was wir wollen
