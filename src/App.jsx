import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import DestinationDetail from './pages/DestinationDetail';
import Bookings from './pages/Bookings';
import About from './pages/About';
import Contact from './pages/Contact';

// Nested Services Pages
import ServicesLayout from './pages/services/ServicesLayout';
import FlightService from './pages/services/FlightService';
import HotelService from './pages/services/HotelService';
import TourService from './pages/services/TourService';

import './App.css';

export default function App() {
  return (
    <div className="app-container">
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/:id" element={<DestinationDetail />} />

          {/* Nested Routes */}
          <Route path="/services" element={<ServicesLayout />}>
            <Route index element={<Navigate to="flights" replace />} />
            <Route path="flights" element={<FlightService />} />
            <Route path="hotels" element={<HotelService />} />
            <Route path="tours" element={<TourService />} />
          </Route>

          <Route path="/bookings" element={<Bookings />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}