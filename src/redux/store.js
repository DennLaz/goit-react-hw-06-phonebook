import { configureStore } from '@reduxjs/toolkit';
import phoneBookReducer from './phoneBook/phoneBookReducer';

const store = configureStore({
  reducer: {
    phoneBook: phoneBookReducer,
  },
});

export default store;
