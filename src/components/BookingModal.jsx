import React, { useState, useRef, useEffect } from 'react';
import { X, Calendar, User, Mail, Users } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { createBooking } from '../redux/bookingSlice';

export default function BookingModal({ destination, isOpen, onClose }) {
  const dispatch = useDispatch();
  const nameInputRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: 1,
    date: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isOpen && nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen || !destination) return null;

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Invalid email';
    }
    if (!formData.date) errs.date = 'Date is required';
    if (formData.guests < 1) errs.guests = 'Minimum 1 guest';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newBooking = {
      id: `BK-${Date.now().toString().slice(-4)}`,
      destinationName: destination.name,
      customerName: formData.name,
      email: formData.email,
      guests: Number(formData.guests),
      date: formData.date,
      totalPrice: destination.price * formData.guests,
      status: 'Confirmed'
    };

    dispatch(createBooking(newBooking));
    alert('Booking Confirmed Successfully!');
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <button className="modal-close" onClick={onClose}><X size={20} /></button>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '4px' }}>Confirm Reservation</h3>
        <p style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '20px' }}>
          {destination.name} — ${destination.price} / person
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              ref={nameInputRef}
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. John Doe"
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="e.g. john@example.com"
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div className="form-group">
              <label>Travel Date</label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
              {errors.date && <p className="error-text">{errors.date}</p>}
            </div>
            <div className="form-group">
              <label>Guests</label>
              <input
                type="number"
                min="1"
                max="10"
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
              />
              {errors.guests && <p className="error-text">{errors.guests}</p>}
            </div>
          </div>

          <div style={{ background: '#eef2ff', padding: '12px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', fontWeight: 700, margin: '14px 0', color: '#3730a3' }}>
            <span>Total:</span>
            <span>${destination.price * (formData.guests || 1)}</span>
          </div>

          <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '12px' }}>
            Complete Booking
          </button>
        </form>
      </div>
    </div>
  );
}