from fastapi import FastAPI
import csv
import json
import xml.etree.ElementTree as ET
import yaml

app = FastAPI()

# Example for CSV file
@app.get("/data/csv")
def read_csv():
    with open('C:/Users/omerm/SI/02_Data_Files/me.csv', mode='r', newline='') as file:
        reader = csv.DictReader(file)
        data = [row for row in reader]
    return {"data": data}

# Example for JSON file
@app.get("/data/json")
def read_json():
    with open('C:/Users/omerm/SI/02_Data_Files/me.json', 'r') as file:
        data = json.load(file)
    return {"data": data}

# Example for TXT file
@app.get("/data/txt")
def read_txt():
    with open('C:/Users/omerm/SI/02_Data_Files/me.txt', 'r') as file:
        data = file.read()
    return {"data": data}

# Example for XML file
@app.get("/data/xml")
def read_xml():
    tree = ET.parse('C:/Users/omerm/SI/02_Data_Files/me.xml')
    root = tree.getroot()
    # This assumes that you want to convert the XML to a dictionary.
    # You might need to adjust the parsing according to your XML structure.
    data = {elem.tag: elem.text for elem in root}
    return {"data": data}

# Example for YAML file
@app.get("/data/yaml")
def read_yaml():
    with open('C:/Users/omerm/SI/02_Data_Files/me.yaml', 'r') as file:
        data = yaml.safe_load(file)
    return {"data": data}

