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
├── src/
│   ├── data/
│   │   └── crops.js       # Centralized Crop & Scheme Database (15+ Crops)
│   ├── App.jsx            # Main Application Logic & Expert System
│   ├── App.css            # Component-specific styles
│   ├── index.css          # Global Design System & Utility Classes
│   └── main.jsx           # React Entry Point
├── public/                # Static Assets (Logo, Backgrounds)
├── index.html             # Entry HTML
└── vite.config.js         # Build configuration
```

---

## 🏁 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/AshuNimbalkar-02/AgniX---BFB.git
   ```

2. **Navigate to the directory**:
   ```bash
   cd AGNIX
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

---

## 🌍 Localization Support
The project is built with a deep focus on regional accessibility:
- **English**: For technical analysis.
- **Hindi**: For national reach.
- **Marathi**: For hyper-local accuracy in Maharashtra, including regional terminology like "Regur" soil and "Hamibhav".

---

## 🧠 Recommendation Logic
The system uses a **Deterministic Rule-Based Engine**. It evaluates:
1. **Region/Climate Match**: Checks if the crop can survive in the input temperature/rainfall.
2. **Soil Match**: Cross-references `suitableSoil` arrays in the database.
3. **Taluka Prioritization**: Boosts "More Recommended" tags for crops famous in specific talukas of Chh. Sambhajinagar.

---

## 📜 License
This project is developed for the **BFB Hackathon / Agri-Tech Innovation**.

Created with ❤️ for the Farmers of India.
