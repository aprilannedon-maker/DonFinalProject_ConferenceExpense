import { configureStore } from '@reduxjs/toolkit';
import venueReducer from '../features/venueSlice';
import addonsReducer from '../features/addonsSlice';
import mealsReducer from '../features/mealSlice';

export const store = configureStore({
  reducer: {
    venue: venueReducer,
    addons: addonsReducer,
    meals: mealsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;