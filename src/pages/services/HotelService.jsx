import React from 'react';
import { Hotel, Coffee, Sparkles } from 'lucide-react';

export default function HotelService() {
  return (
    <div className="service-card">
      <h2 style={{ marginBottom: '8px' }}>Hand-Selected Boutique Hotels</h2>
      <p style={{ color: '#64748b', marginBottom: '20px' }}>Exclusive perks and room upgrades at luxury properties.</p>
      <div className="features-grid">
        <div className="feature-box">
          <Coffee color="#d97706" />
          <div><h4>Complimentary Breakfast</h4><p>Fresh daily farm-to-table breakfast included.</p></div>
        </div>
        <div className="feature-box">
          <Sparkles color="#4f46e5" />
          <div><h4>Complimentary Room Upgrades</h4><p>Priority upgrades based on availability.</p></div>
        </div>
      </div>
    </div>
  );
}