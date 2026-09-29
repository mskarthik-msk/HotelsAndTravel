import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockDestinations } from '../api/travelApi';
import BookingModal from '../components/BookingModal';
import { ArrowLeft, CheckCircle, MapPin } from 'lucide-react';

export default function DestinationDetail() {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const found = mockDestinations.find(d => d.id === id);
    setDestination(found);
  }, [id]);

  if (!destination) {
    return (
      <div style={{ textAlign: 'center', padding: '50px 0' }}>
        <h3>Destination Not Found</h3>
        <Link to="/destinations" style={{ color: '#4f46e5' }}>Back to Destinations</Link>
      </div>
    );
  }

  return (
    <div>
      <Link to="/destinations" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '16px', color: '#64748b' }}>
        <ArrowLeft size={16} /> Back to Catalog
      </Link>

      <div className="detail-card">
        <img src={destination.image} alt={destination.name} className="detail-img" />
        <div className="detail-content">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0', paddingBottom: '16px' }}>
            <div>
              <div style={{ color: '#4f46e5', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                <MapPin size={16} /> {destination.country}
              </div>
              <h1 style={{ fontSize: '2rem' }}>{destination.name}</h1>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Total per person</div>
              <div className="price-text" style={{ fontSize: '2rem' }}>${destination.price}</div>
            </div>
          </div>

          <p style={{ margin: '20px 0', fontSize: '1rem', lineHeight: '1.7', color: '#475569' }}>
            {destination.description}
          </p>

          <div className="perks-list">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle color="#10b981" size={18} /> Daily Breakfast & Dinner</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle color="#10b981" size={18} /> Private Airport Transport</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle color="#10b981" size={18} /> Certified Mountain & Local Guide</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle color="#10b981" size={18} /> 100% Free Date Rescheduling</div>
          </div>

          <button onClick={() => setModalOpen(true)} className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: '1rem' }}>
            Book This Destination
          </button>
        </div>
      </div>

      <BookingModal isOpen={modalOpen} destination={destination} onClose={() => setModalOpen(false)} />
    </div>
  );
}