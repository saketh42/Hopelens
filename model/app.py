from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

import joblib
import uvicorn

# Load the model
model = joblib.load("XGB.pkl")

app = FastAPI()

# create a request model
class InputData(BaseModel):
    feature: List[float]

# root route
@app.get("/")
def read_root():
    return {
        "api": "Hopelens",
        "version": "0.1",
        "status": "running",
        "usage": "Use /predict to get predictions"
    }

# predict route
@app.get("/predict")
def predict(data: InputData):
    try:
        # predict probability
        probabilities = model.predict_proba([data.feature])[0]

        # extracting class 1
        risk = round(probabilities[1] * 100, 2)

        # Custom messages based on risk
        if risk <= 30:
            message = "Low risk. Continue healthy habits and stay connected with others."
        elif risk <= 60:
            message = "Moderate risk. Consider talking to a counselor or someone you trust."
        else:
            message = "High risk. Please seek support from a mental health professional as soon as possible."

        return {
            "risk_percentage": risk,
            "message": message
        }

    except Exception as e:
        return {"error": str(e)}
    
if __name__ == '__main__':
    uvicorn.run(app, host='0.0.0.0', port=5000)