import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/auth/UserSlice.js';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
