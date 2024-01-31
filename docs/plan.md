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

# Mögliche Umsetzungsstrategien

## Fine-tuned LLM -> Erklärung [Constantin]

- Benutzen eines Open Source Fine-tuned LLM Modells
  - Quelle allgemeines Vorgehen: https://www.youtube.com/watch?v=Q9zv369Ggfk
  - Quelle Benutzen von LLM Modellen: https://ollama.ai/download
- Generieren eines Datensatzes, dass FEN als Input und gute Analysen als Output liefert
- Trainieren von einem/mehreren Modellen
- Output einer Erklärung bei Input eines FEN

## Chess Engine -> Evaluation -> LLM -> Erklärung [Aaron]

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
