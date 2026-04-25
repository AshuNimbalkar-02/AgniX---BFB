from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import pandas as pd
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Enable CORS so the React frontend can talk to the Python backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the trained Random Forest Model
try:
    # Look for model in the ai_ml folder
    model = joblib.load('../ai_ml/crop_model.joblib')
except:
    model = None

class PredictionInput(BaseModel):
    n: float
    p: float
    k: float
    temperature: float
    humidity: float
    ph: float
    rainfall: float

@app.get("/")
def home():
    return {"status": "AgniX AI Backend is Running", "model_loaded": model is not None}

@app.post("/predict")
def predict(data: PredictionInput):
    if model is None:
        return {"error": "Model not found. Please run ai_ml/train_and_export.py first."}
    
    # Prepare data for prediction
    input_df = pd.DataFrame([[data.n, data.p, data.k, data.temperature, data.humidity, data.ph, data.rainfall]], 
                            columns=['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall'])
    
    # Get Prediction
    prediction = model.predict(input_df)[0]
    probabilities = model.predict_proba(input_df)[0]
    confidence = max(probabilities) * 100
    
    return {
        "recommended_crop": prediction,
        "confidence": f"{confidence:.2f}%",
        "engine": "Random Forest Classifier"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
