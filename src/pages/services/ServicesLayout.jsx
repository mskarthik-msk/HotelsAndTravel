import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Plane, Hotel, Map } from 'lucide-react';

export default function ServicesLayout() {
  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <h1 style={{ marginBottom: '8px' }}>Our Concierge Travel Services</h1>
        <p style={{ color: '#64748b' }}>Choose one of our dedicated booking options below.</p>
      </div>

      <nav className="nested-nav">
        <NavLink to="/services/flights" className={({ isActive }) => `nested-link ${isActive ? 'active' : ''}`}>
          <Plane size={18} /> Flights
        </NavLink>
        <NavLink to="/services/hotels" className={({ isActive }) => `nested-link ${isActive ? 'active' : ''}`}>
          <Hotel size={18} /> Hotels
        </NavLink>
        <NavLink to="/services/tours" className={({ isActive }) => `nested-link ${isActive ? 'active' : ''}`}>
          <Map size={18} /> Guided Tours
        </NavLink>
      </nav>

      {/* Nested Children Render Here */}
      <Outlet />
    </div>
  );
}