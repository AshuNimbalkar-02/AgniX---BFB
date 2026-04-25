import express from 'express';
import cors from 'cors';
import { predictCrops } from '../ai_ml/predictor.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('AgniX Backend API'));

app.post('/api/recommend', (req, res) => {
  try {
    const inputs = req.body;
    if (!inputs) {
      return res.status(400).json({ error: 'Missing farm inputs' });
    }
    
    const recommendations = predictCrops(inputs);
    res.json({ recommendations });
  } catch (error) {
    console.error("Prediction Error:", error);
    res.status(500).json({ error: 'Failed to generate recommendations' });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));