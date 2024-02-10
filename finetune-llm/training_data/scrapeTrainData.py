from bs4 import BeautifulSoup
import json
import os

def scrape_fen_dead(htmlFile):
    # Path to the local HTML file
    file_path = f"htmls/{htmlFile}"

    # Read the HTML content from the file
    with open(file_path, 'r', encoding='utf-8') as file:
        html_content = file.read()

    # Parse the HTML content of the file
    soup = BeautifulSoup(html_content, 'html.parser')

    # Find the element with class "fen dead"
    fen_dead_element = soup.find(class_="fen dead")

    # Extract the text content of the element
    if fen_dead_element:
        result_string = fen_dead_element.get_text()
        return result_string
    else:
        print("Element with class 'fen dead' not found in the HTML file.")
        
def scrape_best_move_explanation(htmlFile):
    filePath = f"htmls/{htmlFile}"
    with open(filePath, 'r', encoding='utf-8') as file:
        htmlContent = file.read()

    # Parse the HTML using BeautifulSoup
    soup = BeautifulSoup(htmlContent, 'html.parser')

    # Find the div with the class "dgame-best-cont"
    divElement = soup.find('div', class_='dgmf-cont pgn-selected')

    # Check if the div element is found
    if divElement:
        # Get the inner HTML code
        innerHtmlCode = str(divElement)
        
    soup = BeautifulSoup(innerHtmlCode, 'html.parser')

    results = []

    # Find the best move
    best_move_span = soup.find('div', class_='best-move').find('span', class_='move')
    best_move = best_move_span.text if best_move_span else None

    # Find the list items under mf-list-cont
    list_items = soup.select('.mf-list-cont ul li')

    # Iterate through list items
    idx = 1
    for i, item in enumerate(list_items):
        move_span = item.find('span', class_='mf-text')
        
        # Check if move_span is not None before accessing its text property
        if move_span:
            move_text = move_span.text.strip()

            result = f"The best move is {best_move}, because it {move_text}."
            results.append({str(idx): result})
            idx += 1

    # Convert results to JSON
    json_output = json.dumps(results, ensure_ascii=False, indent=2)
    
    return json_output
        
def append_entry_to_json(jsonFile, fen, evaluations):
    with open(jsonFile,'r+') as file:
        # Convert string2 to a Python object
        string2_json = json.loads(evaluations)
        existing_json = json.load(file)

        # Add the new entry to the existing JSON
        existing_json[fen] = string2_json
        
    with open(jsonFile,'w') as file:
        # Convert the combined JSON to a string
        json.dump(existing_json, file, indent=2)


directory = os.fsencode("htmls/")
    
for file in os.listdir(directory):
    htmlFile = os.fsdecode(file)
    if htmlFile.endswith(".html"): 
        jsonFile = "testJson.json"

        fen = scrape_fen_dead(htmlFile)
        evaluations = scrape_best_move_explanation(htmlFile=htmlFile)
        append_entry_to_json(jsonFile, fen, evaluations)

        continue
    else:
        continue
