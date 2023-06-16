import { configureStore } from '@reduxjs/toolkit';
import logReducer from '../features/log/logSlice'

export const store = configureStore({
  reducer: {
    log: logReducer,
  },
});
