import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Compass, Heart } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useTravel } from '../context/TravelContext';

export default function Navbar() {
  const { currency, setCurrency, favorites } = useTravel();
  const bookingsCount = useSelector((state) => state.bookings.items.length);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="nav-brand">
          <div className="brand-icon">
            <Compass size={22} />
          </div>
          <span>Hotel</span>Travel
        </Link>

        <nav className="nav-links">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Home</NavLink>
          <NavLink to="/destinations" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Destinations</NavLink>
          <NavLink to="/services" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Services</NavLink>
          <NavLink to="/bookings" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            My Bookings
            <span className="badge-count">{bookingsCount}</span>
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Contact</NavLink>
        </nav>

        <div className="nav-actions">
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#f43f5e', fontSize: '0.85rem', fontWeight: 600 }}>
            <Heart size={16} fill="currentColor" />
            <span>{favorites.length}</span>
          </div>

          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="currency-select"
          >
            <option value="INR">INR (₹)</option>
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="GBP">GBP (£)</option>
          </select>
        </div>
      </div>
    </header>
  );
}