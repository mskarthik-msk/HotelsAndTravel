import React from 'react';
import { Star, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTravel } from '../context/TravelContext';

export default function DestinationCard({ item, onBookNow }) {
  const { formatPrice, favorites, toggleFavorite } = useTravel();
  const isFav = favorites.includes(item.id);

  return (
    <div className="card">
      <div className="card-img-wrap">
        <img src={item.image} alt={item.name} />
        <button
          onClick={() => toggleFavorite(item.id)}
          className={`card-fav-btn ${isFav ? 'active' : ''}`}
        >
          <Heart size={16} fill={isFav ? '#f43f5e' : 'none'} color={isFav ? '#f43f5e' : '#475569'} />
        </button>
        <span className="card-category">{item.category}</span>
      </div>

      <div className="card-body">
        <div className="card-header-line">
          <span>{item.country}</span>
          <span className="rating-badge">
            <Star size={14} fill="#d97706" /> {item.rating}
          </span>
        </div>

        <h3 className="card-title">{item.name}</h3>
        <p className="card-desc">{item.description}</p>

        <div className="card-footer">
          <div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>From</div>
            <div className="price-text">{formatPrice(item.price)}</div>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <Link to={`/destinations/${item.id}`} className="btn-secondary">Details</Link>
            <button onClick={() => onBookNow(item)} className="btn-primary">Book</button>
          </div>
        </div>
      </div>
    </div>
  );
}