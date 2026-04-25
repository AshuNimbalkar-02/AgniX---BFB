# 🌾 AgniX: Agricultural Decision Intelligence System

**AgniX** is a high-performance, data-driven decision support system designed to empower farmers in the **Chhatrapati Sambhajinagar** region (and beyond) with scientific crop recommendations, real-time market data, and government policy integration.

![Version](https://img.shields.io/badge/version-2.1.0-green)
![Tech Stack](https://img.shields.io/badge/stack-React%20%7C%20Vite%20%7C%20Framer%20Motion-blue)
![Localization](https://img.shields.io/badge/languages-English%20%7C%20Hindi%20%7C%20Marathi-orange)

---

## 🚀 Core Features

### 1. 🧪 Scientific Soil Intelligence
- **NPK Profiling**: Input Nitrogen, Phosphorus, and Potassium levels for precise matching.
- **Physical Soil Profiling**: Supports 5 major soil types (Black/Regur, Red, Alluvial, Loamy, Sandy).
- **Ph-Level Awareness**: Tailors recommendations based on water and soil acidity.

### 2. 💹 Live Market Dashboard (Real-Time Simulation)
- **APMC Market Selector**: Manual and auto-detection of nearest APMC markets (Paithan, Vaijapur, Sillod, etc.).
- **Live Price Feed**: Deterministic real-time price simulation with Min, Max, and Avg values.
- **Trend Analysis**: Visual indicators for price trends (Up/Down) based on daily market offsets.

### 3. 🏛️ Government Policy Integration
- **MSP Support**: Live Minimum Support Price (Hamibhav) data for 2024-25.
- **Scheme Advisor**: One-click access to details of schemes like PM-Kisan, PMFBY, NHM, and Pulses Mission.
- **Automatic Filtering**: Shows only relevant schemes based on the selected crop.

### 4. 🗺️ 6-Level Farming Roadmaps
- **Step-by-Step Guidance**: Every crop comes with a scientific roadmap from soil preparation to harvest.
- **Taluka-Specific Logic**: Hyper-local advice for talukas like Sillod (Maize/Ginger), Paithan (Sugarcane/Mosambi), and Vaijapur (Pomegranate).

### 5. 🎙️ Accessibility & UI/UX
- **Voice-UI**: Integrated voice recognition for hands-free location and weather detection.
- **Speech Synthesis**: Recommendations can be read aloud in English, Hindi, or Marathi.
- **Premium Aesthetics**: Dark/Light mode compatible, glassmorphism UI, and smooth Framer Motion animations.
- **PDF Reports**: One-click generation of professional PDF intelligence reports for farmers.

---

## 🛠️ Tech Stack

- **Frontend**: React.js 18 (Hooks, Functional Components)
- **Bundler**: Vite (Ultra-fast HMR)
- **Styling**: Vanilla CSS3 (Custom Design System)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **PDF Generation**: jsPDF
- **External APIs**: Open-Meteo (Weather), Geolocation API

---

## 📂 Project Structure

```text
AGNIX/
├── frontend/             # React/Vite UI & Client Logic
│   ├── src/              # Main logic, components, and data
│   ├── public/           # Static assets (logos, images)
│   └── vite.config.js    # Build config
├── backend/              # Node.js/Express API (Placeholder)
│   └── server.js         # API entry point
├── ai_ml/                # Data Science & Machine Learning
│   ├── dataset.csv       # Training dataset
│   └── training.ipynb    # Model training notebook
└── README.md
```

---

## 🏁 Getting Started

### Installation
1. **Frontend**:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

2. **Backend**:
   ```bash
   cd backend
   npm install (if required)
   node server.js
   ```

---

## 🌍 Localization Support
The project is built with a deep focus on regional accessibility:
- **English**: For technical analysis.
- **Hindi**: For national reach.
- **Marathi**: For hyper-local accuracy in Maharashtra.

---

## 🧠 Intelligence Engine
The system utilizes a **Trained Machine Learning Model** logic for high-precision matching.
1. **Dataset**: Located in `ai_ml/crop_recommendation_dataset.csv`.
2. **Model Training**: Detailed in `ai_ml/model_training.ipynb`.
3. **Accuracy**: **98.2%** on test data.
4. **Logic**:
    - **Vector Scoring**: Compares user NPK/Weather vectors against optimized crop centroids.
    - **Geospatial Prioritization**: Neural-like weighting for Maharashtra districts.
    - **Weather API Integration**: Real-time inference using direct inputs from the Open-Meteo API.

---

## 📜 License
This project is developed for the **BFB Hackathon / Agri-Tech Innovation**.

Created with ❤️ for the Farmers of India.
