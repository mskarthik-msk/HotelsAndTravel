export const mockDestinations = [
  {
    id: "1",
    name: "Santorini Caldera Tour",
    country: "Greece",
    category: "Beach",
    price: 1250,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80",
    description: "Experience iconic whitewashed villages overlooking azure waters and stunning volcanic sunsets.",
    featured: true
  },
  {
    id: "2",
    name: "Kyoto Autumn Temple Walk",
    country: "Japan",
    category: "Culture",
    price: 980,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
    description: "Stroll beneath crimson maple trees and immerse in centuries-old Zen traditions and shrines.",
    featured: true
  },
  {
    id: "3",
    name: "Swiss Alps Express",
    country: "Switzerland",
    category: "Mountain",
    price: 1650,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80",
    description: "Panoramic train rides, snowcapped peaks, crystal alpine lakes, and breathtaking hiking trails.",
    featured: true
  },
  {
    id: "4",
    name: "Machu Picchu Explorer",
    country: "Peru",
    category: "Adventure",
    price: 1400,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=800&q=80",
    description: "Trek the legendary Inca Trail and explore the sacred citadel hidden among misty Andean peaks.",
    featured: false
  },
  {
    id: "5",
    name: "Bali Island Retreat",
    country: "Indonesia",
    category: "Beach",
    price: 750,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    description: "Relax in private cliff-side villas with lush tropical jungle views and pristine sandy beaches.",
    featured: false
  }
];

export const fetchDestinations = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...mockDestinations]), 300);
  });
};