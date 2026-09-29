import React, { useEffect, useState } from 'react';
import { fetchDestinations } from '../api/travelApi';
import DestinationCard from '../components/DestinationCard';
import BookingModal from '../components/BookingModal';
import { Link } from 'react-router-dom';
import { MapPin, ShieldCheck, Zap } from 'lucide-react';

export default function Home() {
  const [destinations, setDestinations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(null);

  useEffect(() => {
    fetchDestinations().then(data => setDestinations(data.filter(d => d.featured)));
  }, []);

  return (
    <div>
      <section className="hero">
        <span className="hero-pill">Handpicked Journeys</span>
        <h1>Explore The World's Most Wonderous Spots</h1>
        <p>Book boutique hotels, exclusive small-group adventures, and custom vacation itineraries with total confidence.</p>
        <div className="hero-buttons">
          <Link to="/destinations" className="btn-white">Browse Packages</Link>
          <Link to="/services" className="btn-outline-white">Our Services</Link>
        </div>
      </section>

      <section className="features-grid">
        <div className="feature-box">
          <MapPin color="#4f46e5" size={28} />
          <div>
            <h4>500+ Curated Escapes</h4>
            <p>Every itinerary is vetted for comfort and authenticity.</p>
          </div>
        </div>
        <div className="feature-box">
          <ShieldCheck color="#10b981" size={28} />
          <div>
            <h4>Flexible Cancellations</h4>
            <p>Modify or cancel any booking within seconds online.</p>
          </div>
        </div>
        <div className="feature-box">
          <Zap color="#f59e0b" size={28} />
          <div>
            <h4>Instant Confirmation</h4>
            <p>Receive your itinerary immediately upon checkout.</p>
          </div>
        </div>
      </section>

      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2>Featured Destinations</h2>
          <Link to="/destinations" style={{ color: '#4f46e5', fontWeight: 600, fontSize: '0.9rem' }}>View All →</Link>
        </div>
        <div className="cards-grid">
          {destinations.map(item => (
            <DestinationCard key={item.id} item={item} onBookNow={setSelectedDestination} />
          ))}
        </div>
      </section>

      <BookingModal
        isOpen={Boolean(selectedDestination)}
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
      />
    </div>
  );
}