import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBooking, toggleBookingStatus, updateBooking } from '../redux/bookingSlice';
import { Trash2, Edit3, XCircle, CheckCircle } from 'lucide-react';

export default function Bookings() {
  const bookings = useSelector(state => state.bookings.items);
  const dispatch = useDispatch();

  const [editingId, setEditingId] = useState(null);
  const [guestCount, setGuestCount] = useState(1);

  const handleEdit = (b) => {
    setEditingId(b.id);
    setGuestCount(b.guests);
  };

  const handleSave = (b) => {
    dispatch(updateBooking({
      id: b.id,
      updatedData: {
        guests: Number(guestCount),
        totalPrice: (b.totalPrice / b.guests) * Number(guestCount)
      }
    }));
    setEditingId(null);
  };

  return (
    <div>
      <h1 style={{ marginBottom: '8px' }}>My Bookings Dashboard</h1>
      <p style={{ color: '#64748b', marginBottom: '24px' }}>Review, edit party size, or cancel your travel reservations.</p>

      {bookings.length === 0 ? (
        <div style={{ textAlign: 'center', background: '#fff', padding: '40px', borderRadius: '12px' }}>
          <p style={{ color: '#64748b' }}>No bookings found.</p>
        </div>
      ) : (
        bookings.map(b => (
          <div key={b.id} className="booking-item">
            <div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '4px' }}>
                <span style={{ fontWeight: 800, fontSize: '0.85rem' }}>{b.id}</span>
                <span className={`status-tag ${b.status === 'Confirmed' ? 'confirmed' : 'cancelled'}`}>
                  {b.status}
                </span>
              </div>
              <h3 style={{ fontSize: '1.1rem' }}>{b.destinationName}</h3>
              <div style={{ color: '#64748b', fontSize: '0.85rem', marginTop: '4px' }}>
                Guest: {b.customerName} | Date: {b.date} | Party of: {editingId === b.id ? (
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    style={{ width: '50px', padding: '2px 4px' }}
                  />
                ) : b.guests}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Total</div>
                <div className="price-text">${b.totalPrice}</div>
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                {editingId === b.id ? (
                  <button onClick={() => handleSave(b)} className="btn-primary" style={{ padding: '6px 12px' }}>Save</button>
                ) : (
                  <button onClick={() => handleEdit(b)} className="btn-secondary" style={{ padding: '6px 10px' }}><Edit3 size={16} /></button>
                )}

                <button
                  onClick={() => dispatch(toggleBookingStatus(b.id))}
                  className="btn-secondary"
                  style={{ padding: '6px 10px' }}
                  title="Toggle status"
                >
                  {b.status === 'Confirmed' ? <XCircle size={16} color="#ef4444" /> : <CheckCircle size={16} color="#10b981" />}
                </button>

                <button
                  onClick={() => dispatch(deleteBooking(b.id))}
                  className="btn-secondary"
                  style={{ padding: '6px 10px', color: '#ef4444' }}
                  title="Delete"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}