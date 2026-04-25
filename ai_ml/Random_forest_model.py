import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
import joblib
import os

# 1. Generate Dummy Data
def generate_dummy_data(n_samples=500):
    crops = ['Rice', 'Maize (Corn)', 'Cotton', 'Sugarcane', 'Wheat', 'Soybean', 'Onion']
    
    data = {
        'N': np.random.randint(20, 150, n_samples),
        'P': np.random.randint(20, 100, n_samples),
        'K': np.random.randint(20, 80, n_samples),
        'temperature': np.random.uniform(15, 45, n_samples),
        'humidity': np.random.uniform(30, 95, n_samples),
        'ph': np.random.uniform(5.0, 8.5, n_samples),
        'rainfall': np.random.uniform(50, 1200, n_samples),
        'label': np.random.choice(crops, n_samples)
    }
    
    df = pd.DataFrame(data)
    return df

# 2. Train and Save Model
def train_dummy_model():
    print("Generating dummy dataset...")
    df = generate_dummy_data(1000)
    
    # Save dummy CSV
    csv_path = 'dummy_crop_dataset.csv'
    df.to_csv(csv_path, index=False)
    print(f"Dataset saved to {csv_path}")
    
    # Prepare features and target
    X = df.drop('label', axis=1)
    y = df['label']
    
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    # Random Forest Algorithm
    print("Training Random Forest model...")
    rf_model = RandomForestClassifier(n_estimators=100, random_state=42)
    rf_model.fit(X_train, y_train)
    
    # Accuracy check
    accuracy = rf_model.score(X_test, y_test)
    print(f"Model trained with accuracy: {accuracy*100:.2f}%")
    
    # Save the model
    model_path = 'dummy_model.joblib'
    joblib.dump(rf_model, model_path)
    print(f"Model saved to {model_path}")

if __name__ == "__main__":
    train_dummy_model()
