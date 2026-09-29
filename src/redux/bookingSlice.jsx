import { createSlice } from '@reduxjs/toolkit';

const initialBookings = [
  {
    id: "BK-101",
    destinationName: "Santorini Caldera Tour",
    customerName: "Alex Morgan",
    email: "alex@example.com",
    guests: 2,
    date: "2026-10-15",
    totalPrice: 2500,
    status: "Confirmed"
  }
];

const bookingSlice = createSlice({
  name: 'bookings',
  initialState: {
    items: initialBookings
  },
  reducers: {
    // CREATE
    createBooking: (state, action) => {
      state.items.unshift(action.payload);
    },
    // UPDATE
    updateBooking: (state, action) => {
      const { id, updatedData } = action.payload;
      const index = state.items.findIndex(item => item.id === id);
      if (index !== -1) {
        state.items[index] = { ...state.items[index], ...updatedData };
      }
    },
    // DELETE
    deleteBooking: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    // TOGGLE STATUS
    toggleBookingStatus: (state, action) => {
      const item = state.items.find(b => b.id === action.payload);
      if (item) {
        item.status = item.status === 'Confirmed' ? 'Cancelled' : 'Confirmed';
      }
    }
  }
});

export const { createBooking, updateBooking, deleteBooking, toggleBookingStatus } = bookingSlice.actions;
export default bookingSlice.reducer;