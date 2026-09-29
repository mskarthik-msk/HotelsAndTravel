import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert('Please fill out all fields.');
      return;
    }
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '8px' }}>Get In Touch</h1>
      <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '32px' }}>Our travel coordinators are available 24/7.</p>

      <div className="service-card" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
        <div>
          <h3 style={{ marginBottom: '16px' }}>Contact Information</h3>
          <p style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', color: '#64748b' }}>
            <MapPin size={18} color="#4f46e5" /> 123, Ammapet, Salem, TN, India
          </p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', color: '#64748b' }}>
            <Phone size={18} color="#4f46e5" /> +91 9876543210
          </p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b' }}>
            <Mail size={18} color="#4f46e5" /> hotalandtravel@stk.com
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {submitted && (
            <div style={{ background: '#dcfce7', color: '#15803d', padding: '10px', borderRadius: '6px', marginBottom: '12px', fontSize: '0.85rem' }}>
              Thank you! We have received your message.
            </div>
          )}
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Your Email"
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              rows="3"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="How can we help you?"
            />
          </div>
          <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            <Send size={16} /> Send Inquiry
          </button>
        </form>
      </div>
    </div>
  );
}