import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle2, TrendingUp, TrendingDown, AlertCircle, Calendar } from 'lucide-react';
import { getLivePrice } from '../utils/pricing';
import { schemeDetails } from '../constants/schemes';
import { talukaList } from '../constants/locations';

const Results = ({ recommendations, lang, t, inputs, setInputs, getLocLabel }) => {
  return (
    <motion.div 
      className="results-grid"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1 }
        }
      }}
    >
      {recommendations.map((crop) => (
        <motion.div 
          key={crop.id} 
          className="clean-card crop-card"
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1 }
          }}
        >
          <div className="market-selector-wrapper">
            <div className="live-dot"></div>
            <span style={{ fontSize: '0.7rem', fontWeight: '900', color: '#ef4444', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t.liveMarket}</span>
            <div style={{ width: '1px', height: '14px', background: '#e2e8f0', margin: '0 0.25rem' }}></div>
            <MapPin size={14} color="var(--primary)" />
            <select 
              className="market-select-clean"
              value={inputs.apmc}
              onChange={(e) => setInputs({...inputs, apmc: e.target.value})}
            >
              {talukaList[inputs.district]?.map(tName => (
                <option key={tName} value={tName}>{getLocLabel(tName)} APMC</option>
              ))}
            </select>
          </div>

          <h2 style={{ fontSize: '2.4rem', marginBottom: '1.5rem', color: 'var(--primary)', fontWeight: '900', letterSpacing: '-0.03em' }}>{crop.name[lang]}</h2>

          <div className="price-dashboard">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <div>
                <p style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>{t.avgPrice}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <p style={{ fontSize: '2.5rem', fontWeight: '950', color: 'var(--text-main)', lineHeight: 1 }}>₹{getLivePrice(crop.prices.avg, inputs.apmc)}</p>
                  <div className={`price-trend ${getLivePrice(crop.prices.avg, inputs.apmc) % 2 === 0 ? 'trend-up' : 'trend-down'}`}>
                    {getLivePrice(crop.prices.avg, inputs.apmc) % 2 === 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                    {getLivePrice(crop.prices.avg, inputs.apmc) % 2 === 0 ? '+2.4%' : '-1.2%'}
                  </div>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>{t.unit}</p>
                <p style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--text-main)' }}>{t.perQuintal}</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#f8fafc', padding: '1rem', borderRadius: '12px' }}>
              <div style={{ flex: 1 }}>
                <span style={{ fontSize: '0.65rem', fontWeight: '800', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block' }}>{t.minPrice}</span>
                <span style={{ fontSize: '1.1rem', fontWeight: '900', color: '#ef4444' }}>₹{getLivePrice(crop.prices.avg, inputs.apmc, 'min')}</span>
              </div>
              <div style={{ flex: 2, height: '6px', background: '#e2e8f0', borderRadius: '3px', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '20%', width: '60%', height: '100%', background: 'var(--primary)', opacity: 0.2, borderRadius: '3px' }}></div>
                <div style={{ position: 'absolute', left: '50%', width: '4px', height: '12px', background: 'var(--primary)', top: '-3px', borderRadius: '2px' }}></div>
              </div>
              <div style={{ flex: 1, textAlign: 'right' }}>
                <span style={{ fontSize: '0.65rem', fontWeight: '800', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block' }}>{t.maxPrice}</span>
                <span style={{ fontSize: '1.1rem', fontWeight: '900', color: '#10b981' }}>₹{getLivePrice(crop.prices.avg, inputs.apmc, 'max')}</span>
              </div>
            </div>
            
          </div>

          <div style={{ marginBottom: '2.5rem', background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)', padding: '1.5rem', borderRadius: '20px', border: '1px solid #bbf7d0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ background: '#166534', color: 'white', padding: '0.4rem', borderRadius: '8px', display: 'flex' }}>
                  <CheckCircle2 size={18} />
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: '800', color: '#166534' }}>{t.govSchemes}</h3>
              </div>
              {crop.msp && (
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '0.65rem', fontWeight: '800', color: '#166534', textTransform: 'uppercase', display: 'block' }}>{t.msp}</span>
                  <span style={{ fontSize: '1.1rem', fontWeight: '900', color: '#166534' }}>₹{crop.msp}</span>
                </div>
              )}
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {crop.schemes?.map((schemeObj, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    const schemeName = schemeObj[lang];
                    const info = schemeDetails[schemeObj.en]?.[lang] || "Details available soon";
                    alert(`${schemeName}\n\n${info}`);
                  }}
                  style={{ 
                    background: 'white', 
                    color: '#166534', 
                    fontSize: '0.75rem', 
                    fontWeight: '700', 
                    padding: '0.5rem 1rem', 
                    borderRadius: '10px', 
                    border: '1px solid #bbf7d0', 
                    boxShadow: '0 2px 4px rgba(22, 101, 52, 0.05)',
                    cursor: 'help',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  {schemeObj[lang]} <AlertCircle size={12} opacity={0.6} />
                </motion.div>
              ))}
              {(!crop.msp && crop.id > 6) && <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#166534', opacity: 0.7 }}>{t.notAvailable}</span>}
            </div>
            <p style={{ fontSize: '0.6rem', color: '#166534', marginTop: '0.75rem', opacity: 0.6, fontStyle: 'italic' }}>
              * {t.schemeInfo}
            </p>
          </div>
          

          <div style={{ padding: '1.25rem', background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', borderRadius: '16px', borderLeft: '5px solid var(--accent)', marginBottom: '2.5rem' }}>
            <p style={{ fontWeight: '800', color: 'var(--primary)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                <CheckCircle2 size={18} color="var(--primary)" /> {t.why}
            </p>
            <p style={{ fontSize: '1rem', fontWeight: '500', color: 'var(--text-main)', lineHeight: '1.5' }}>{crop.why[lang]}</p>
          </div>

          <div className="level-container">
            <p style={{ fontWeight: '900', color: 'var(--primary)', marginBottom: '2rem', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Calendar size={20} /> {t.roadmap}
            </p>
            
            {crop.roadmap[lang].map((levelText, i) => (
              <div key={i} className="level-step">
                <div className="level-circle"></div>
                <div style={{ background: 'white', padding: '1rem', borderRadius: '12px', border: '1px solid #f1f5f9', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                  <p style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-main)' }}>{levelText}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Results;
