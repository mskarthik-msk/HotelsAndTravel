import React, { createContext, useContext, useState } from 'react';

const TravelContext = createContext();

export const TravelProvider = ({ children }) => {
  const [currency, setCurrency] = useState('INR');
  const [favorites, setFavorites] = useState([]);

  const rates = { USD: 1, EUR: 0.92, GBP: 0.79, INR: 83.2 };
  const symbols = { USD: '$', EUR: '€', GBP: '£', INR: '₹' };

  const formatPrice = (usdAmount) => {
    const rate = rates[currency] || 1;
    const symbol = symbols[currency] || '$';
    return `${symbol}${(usdAmount * rate).toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
  };

  const toggleFavorite = (id) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  return (
    <TravelContext.Provider value={{ currency, setCurrency, formatPrice, favorites, toggleFavorite }}>
      {children}
    </TravelContext.Provider>
  );
};

export const useTravel = () => useContext(TravelContext);