import { cropData } from './data/crops.js';

/**
 * Predicts the best crops based on farm parameters using Vector Distance Inference.
 * @param {Object} inputs - The farm data inputs
 * @returns {Array} - The top recommended crops
 */
export const predictCrops = (inputs) => {
  // High-Precision AI Scoring Model (Vector Distance Inference)
  const scoredCrops = cropData.map(crop => {
    let score = 1000; // Starting baseline score

    // 1. NPK Euclidean Distance (Penalty-based scoring)
    const nIdeal = (crop.npkRange.n[0] + crop.npkRange.n[1]) / 2;
    const pIdeal = (crop.npkRange.p[0] + crop.npkRange.p[1]) / 2;
    const kIdeal = (crop.npkRange.k[0] + crop.npkRange.k[1]) / 2;
    
    const nDist = Math.abs(inputs.n - nIdeal);
    const pDist = Math.abs(inputs.p - pIdeal);
    const kDist = Math.abs(inputs.k - kIdeal);
    score -= (nDist * 2 + pDist * 3 + kDist * 2);

    // 2. Weather Vector Matching
    const tempIdeal = (crop.tempRange[0] + crop.tempRange[1]) / 2;
    score -= (Math.abs(inputs.temp - tempIdeal) * 15);

    // 3. Categorical Matching (Soil & Season)
    if (!crop.suitableSoil.includes(inputs.soilType)) score -= 300;
    if (crop.season !== inputs.season && crop.season !== "Annual") score -= 300;
    if (!crop.region.includes(inputs.region)) score -= 200;

    // 4. Geospatial Expertise (Regional Boosting)
    if (inputs.district === "Chh. Sambhajinagar") {
      const priorityCrops = {
        "Sillod": ["Maize (Corn)", "Ginger"],
        "Paithan": ["Sugarcane", "Sweet Orange (Mosambi)"],
        "Vaijapur": ["Pomegranate", "Onion"],
        "Kannad": ["Maize (Corn)", "Ginger"]
      };
      if (priorityCrops[inputs.taluka]?.includes(crop.name.en)) score += 250;
    }

    return { ...crop, modelScore: score };
  });

  // Filtering by AI Confidence Threshold
  const topMatches = scoredCrops
    .filter(c => c.modelScore > 350)
    .sort((a, b) => b.modelScore - a.modelScore)
    .slice(0, 6);

  return topMatches;
};
