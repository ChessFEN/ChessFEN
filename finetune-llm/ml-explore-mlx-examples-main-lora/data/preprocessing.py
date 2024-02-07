import json

with open('trainBeforePreprocessing.json', 'r') as file:
    data = json.load(file)

formatted_data = []

for fen, moves in data.items():
    for move_info in moves:
        move_number, move_description = move_info.popitem()
        formatted_entry = {
            "text": f"fen: {fen}\nQ: What is the next best move and why?\nA: {move_description}"
        }
        formatted_data.append(formatted_entry)

# Write the formatted data to a new JSON file
with open('train.json', 'w') as output_file:
    for entry in formatted_data:
        json.dump(entry, output_file)
        output_file.write('\n')
