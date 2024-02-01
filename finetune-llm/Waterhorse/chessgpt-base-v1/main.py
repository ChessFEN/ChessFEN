import json
import ChessGPTBase as gpt
import time

import time
start_time = time.time()

# Load JSON data from file
with open('testQuestions.json', 'r') as file:
    data = json.load(file)
    
GPT = gpt.ChessGPTBase()

# Extract questions from the "questionsPieceFinding" array
questions = [list(item.values())[0] for item in data['questionsPieceFindingV2']]

# Print the parsed questions
for idx, question in enumerate(questions):
    print("---------------------------------------------------")
    print(f"Question {idx + 1}: {question} /// Answer \n{GPT.run_model(question)} \n\n\n")
    
print("--- %s seconds ---" % (time.time() - start_time))
