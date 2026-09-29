import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchDestinations } from '../api/travelApi';
import DestinationCard from '../components/DestinationCard';
import BookingModal from '../components/BookingModal';
import { useDebounce } from '../hooks/useDebounce';
import { Search } from 'lucide-react';

export default function Destinations() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [destinations, setDestinations] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const categoryParam = searchParams.get('category') || 'All';
  const queryParam = searchParams.get('search') || '';

  const [searchInput, setSearchInput] = useState(queryParam);
  const debouncedSearch = useDebounce(searchInput, 300);

  useEffect(() => {
    fetchDestinations().then(setDestinations);
  }, []);

  useEffect(() => {
    const params = {};
    if (categoryParam !== 'All') params.category = categoryParam;
    if (debouncedSearch) params.search = debouncedSearch;
    setSearchParams(params);
  }, [debouncedSearch, categoryParam]);

  const categories = ['All', 'Beach', 'Culture', 'Mountain', 'Adventure'];

  const filtered = destinations.filter(item => {
    const matchesCategory = categoryParam === 'All' || item.category === categoryParam;
    const matchesQuery = item.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
                         item.country.toLowerCase().includes(debouncedSearch.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div>
      <h1 style={{ marginBottom: '8px' }}>Explore All Destinations</h1>
      <p style={{ color: '#64748b', marginBottom: '24px' }}>Discover the perfect trip from our catalog.</p>

      <div className="filter-toolbar">
        <div className="search-input-box">
          <Search size={18} className="search-icon-pos" />
          <input
            type="text"
            placeholder="Search by city or country..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>

        <div className="category-pills">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                const params = {};
                if (cat !== 'All') params.category = cat;
                if (searchInput) params.search = searchInput;
                setSearchParams(params);
              }}
              className={`pill-btn ${categoryParam === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="cards-grid">
        {filtered.map(item => (
          <DestinationCard key={item.id} item={item} onBookNow={setSelectedBooking} />
        ))}
      </div>

      <BookingModal
        isOpen={Boolean(selectedBooking)}
        destination={selectedBooking}
        onClose={() => setSelectedBooking(null)}
      />
    </div>
  );
}