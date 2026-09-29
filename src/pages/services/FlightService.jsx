import React from 'react';
import { PlaneTakeoff, Award, Shield } from 'lucide-react';

export default function FlightService() {
  return (
    <div className="service-card">
      <h2 style={{ marginBottom: '8px' }}>Flight Booking Concierge</h2>
      <p style={{ color: '#64748b', marginBottom: '20px' }}>Global connections across premier partner airlines with priority boarding.</p>
      <div className="features-grid">
        <div className="feature-box">
          <Award color="#4f46e5" />
          <div><h4>Business Class Deals</h4><p>Up to 25% off trans-continental routes.</p></div>
        </div>
        <div className="feature-box">
          <Shield color="#10b981" />
          <div><h4>Automatic Flight Insurance</h4><p>Instant compensation for delays over 2 hours.</p></div>
        </div>
      </div>
    </div>
  );
}