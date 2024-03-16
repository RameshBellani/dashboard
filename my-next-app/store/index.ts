import { configureStore } from '@reduxjs/toolkit';
import savedItemsReducer from './slice';

const store = configureStore({
  reducer: {
    savedItems: savedItemsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; // Define RootState type

export default store;
