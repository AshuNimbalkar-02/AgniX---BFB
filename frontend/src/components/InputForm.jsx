import React from 'react';
import { Leaf, Wind, MapPin, Navigation } from 'lucide-react';
import { regionsList, distList, talukaList } from '../constants/locations';

const InputForm = ({ t, inputs, handleInput, isAutoLoading, detectLocation, detectWeather, getLocLabel }) => {
  return (
    <div className="form-grid">
      <section className="clean-card">
        <h3 className="section-title"><Leaf size={24} /> {t.soil}</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="input-field"><label>{t.nitrogen}</label><input type="number" name="n" value={inputs.n} onChange={handleInput} /></div>
          <div className="input-field"><label>{t.phosphorus}</label><input type="number" name="p" value={inputs.p} onChange={handleInput} /></div>
          <div className="input-field"><label>{t.potassium}</label><input type="number" name="k" value={inputs.k} onChange={handleInput} /></div>
          <div className="input-field">
            <label>{t.soilType}</label>
            <select name="soilType" value={inputs.soilType} onChange={handleInput}>
              <option value="Black Soil">{t.blackSoil}</option>
              <option value="Red Soil">{t.redSoil}</option>
              <option value="Alluvial Soil">{t.alluvialSoil}</option>
              <option value="Loamy Soil">{t.loamySoil}</option>
              <option value="Sandy Soil">{t.sandySoil}</option>
            </select>
          </div>
        </div>
      </section>

      <section className="clean-card">
        <h3 className="section-title"><Wind size={24} /> {t.weather}</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <button className="btn btn-secondary" onClick={detectWeather} style={{ marginBottom: '0.5rem' }}>
            <Navigation size={18} /> {isAutoLoading ? t.fetching : t.detectWeather}
          </button>
          <div className="input-field"><label>{t.temp}</label><input type="number" name="temp" value={inputs.temp} onChange={handleInput} /></div>
          <div className="input-field"><label>{t.humidity}</label><input type="number" name="humidity" value={inputs.humidity} onChange={handleInput} /></div>
          <div className="input-field"><label>{t.rainfall}</label><input type="number" name="rainfall" value={inputs.rainfall} onChange={handleInput} /></div>
        </div>
      </section>

      <section className="clean-card">
        <h3 className="section-title"><MapPin size={24} /> {t.market}</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <button className="btn btn-secondary" onClick={detectLocation} style={{ marginBottom: '0.5rem' }}>
            <Navigation size={18} /> {isAutoLoading ? t.fetching : t.detectLoc}
          </button>
          <div className="input-field">
            <label>{t.region}</label>
            <select name="region" value={inputs.region} onChange={handleInput}>
              {regionsList.map(r => <option key={r} value={r}>{getLocLabel(r)}</option>)}
            </select>
          </div>
          {inputs.region === "Maharashtra" && (
            <>
              <div className="input-field">
                <label>{t.district}</label>
                <select name="district" value={inputs.district} onChange={handleInput}>
                  {distList.map(d => <option key={d} value={d}>{getLocLabel(d)}</option>)}
                </select>
              </div>
              <div className="input-field">
                <label>{t.taluka}</label>
                <select name="taluka" value={inputs.taluka} onChange={handleInput}>
                  {talukaList[inputs.district]?.map(tal => <option key={tal} value={tal}>{getLocLabel(tal)}</option>)}
                </select>
              </div>
            </>
          )}
          <div className="input-field">
            <label>{t.selectSeason}</label>
            <select name="season" value={inputs.season} onChange={handleInput}>
              <option value="Kharif">{t.kharif}</option>
              <option value="Rabbi">{t.rabbi}</option>
            </select>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InputForm;
