import React from 'react';
import { Map, Users, Check } from 'lucide-react';

export default function TourService() {
  return (
    <div className="service-card">
      <h2 style={{ marginBottom: '8px' }}>Small Group Guided Expeditions</h2>
      <p style={{ color: '#64748b', marginBottom: '20px' }}>Authentic tours guided exclusively by licensed local residents.</p>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}><Check color="#10b981" size={18} /> Group sizes strictly limited to 12 guests</li>
        <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}><Check color="#10b981" size={18} /> Skip-the-line passes at major heritage sights</li>
      </ul>
    </div>
  );
}