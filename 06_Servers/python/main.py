from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return { "message": "Welcome to our first server." }


@app.get("/firstroute")
def _():
    return { "message": "This is the message from root." }

# assignment create a raoute called /firstroute that sends a message