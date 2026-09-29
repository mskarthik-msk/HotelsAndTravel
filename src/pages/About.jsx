import React from 'react';

export default function About() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ marginBottom: '12px' }}>About WanderLust</h1>
      <p style={{ color: '#64748b', marginBottom: '32px' }}>
        We are a passionate team of travelers and technologists building seamless journey-planning experiences for explorers worldwide.
      </p>

      <div className="service-card" style={{ textAlign: 'left', lineHeight: '1.8' }}>
        <h3 style={{ marginBottom: '12px' }}>Our Mission</h3>
        <p style={{ color: '#475569', marginBottom: '16px' }}>
          Every traveler deserves effortless bookings, complete transparency, and curated destinations that respect local heritage and environments.
        </p>
        <div className="features-grid" style={{ marginTop: '24px' }}>
          <div className="feature-box"><h4>45+ Countries</h4></div>
          <div className="feature-box"><h4>12,000+ Journeys</h4></div>
          <div className="feature-box"><h4>99.4% Rating</h4></div>
        </div>
      </div>
    </div>
  );
}