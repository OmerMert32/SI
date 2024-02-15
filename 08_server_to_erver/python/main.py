from fastapi import FastAPI
import requests
app = FastAPI()

@app.get("/fastapiData")
def _():
    return{"message:": [1,2,3,4,5]}

@app.get("/requestExpress")
def get_express_data():
    return {}


@app.get("/requestExpress")
def get_express_data():
    response = requests.get('http://127.0.0.1:8080/expressData')
    return {"data": response.json()}



# poetry shell
# poetry uvicorn main:app