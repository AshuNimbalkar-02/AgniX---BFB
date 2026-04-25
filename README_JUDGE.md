# Technical Project Documentation: Crop Decision Intelligence System (CDIS)

## 1. Project Overview
**Problem Statement:** Farmers lack integrated access to soil, weather, and market data, leading to suboptimal crop selection and lower yields.
**Solution:** CDIS is a data-driven platform that integrates soil NPK levels, real-time weather APIs, and regional factors to provide localized crop recommendations and step-by-step cultivation roadmaps.

## 2. Key Technical Innovations
*   **Live Weather Sync:** Integration with Open-Meteo API for real-time environmental data acquisition.
*   **Verified Dataset:** Built-in repository of 5+ major Indian crops with scientifically verified NPK and climate ranges.
*   **Triple-Language Voice Assistant:** Full support for English, Hindi, and Marathi with voice-activated recommendation logic.
*   **Risk Mitigation:** Automated "Rainfall Contingency Plans" for every recommended crop.
*   **Report Generation:** Direct-to-PDF export of personalized farming strategies.

## 3. Technology Stack
*   **Framework:** React 18 + Vite (for ultra-fast performance)
*   **State Management:** React Hooks
*   **UI/UX:** Vanilla CSS with custom "Clean-Farmer" Design System
*   **Libraries:** Lucide-React (Icons), Framer Motion (Animations), jsPDF (PDF Export)
*   **APIs:** Geolocation API, Web Speech API, Open-Meteo API


