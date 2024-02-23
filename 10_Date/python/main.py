import datetime
from fastapi import FastAPI
print(datetime.datetime)

from flask import Flask, jsonify

from datetime import datetime

print(datetime)

current_datetime = datetime.now()

print(current_datetime)

print(datetime.now().strftime('%Y-%m-%d %H:%M'))


app = FastAPI()

@app.get("/")
def _():
    return{current_datetime}