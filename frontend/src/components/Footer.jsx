import React from 'react';

const Footer = () => {
  return (
    <footer style={{ marginTop: '5rem', padding: '3rem 0', borderTop: '1px solid #e2e8f0', textAlign: 'center' }}>
      <p style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '1.1rem' }}>CSMSS Agriculture Intelligence Lab</p>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Data-driven decisions for a sustainable future.</p>
      <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
        <a href="#" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '700', fontSize: '0.85rem' }}>Research Paper</a>
        <a href="#" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '700', fontSize: '0.85rem' }}>Methodology</a>
        <a href="#" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '700', fontSize: '0.85rem' }}>Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
