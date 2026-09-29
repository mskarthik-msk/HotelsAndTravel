import React from 'react';
import { Compass } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fff', fontWeight: 800, marginBottom: '10px' }}>
            <Compass color="#818cf8" /> WanderLust
          </div>
          <p style={{ fontSize: '0.85rem' }}>Premium travel concierge and curated vacation booking platform.</p>
        </div>
        <div>
          <h4>Discover</h4>
          <p style={{ fontSize: '0.85rem' }}>Santorini Caldera</p>
          <p style={{ fontSize: '0.85rem' }}>Swiss Alps Express</p>
          <p style={{ fontSize: '0.85rem' }}>Kyoto Temple Walks</p>
        </div>
        <div>
          <h4>Customer Care</h4>
          <p style={{ fontSize: '0.85rem' }}>Terms of Service</p>
          <p style={{ fontSize: '0.85rem' }}>Privacy & Security</p>
          <p style={{ fontSize: '0.85rem' }}>24/7 Live Support</p>
        </div>
      </div>
      <div className="footer-bottom">
        © 2026 WanderLust Inc. All rights reserved.
      </div>
    </footer>
  );
}