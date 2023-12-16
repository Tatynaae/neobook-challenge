// index.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice'; // Import your slice(s)


const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Add other slices here if needed
  },
});

export default store;