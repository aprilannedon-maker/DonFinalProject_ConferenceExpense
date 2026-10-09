import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface VenueItem {
  id: string;
  name: string;
  capacity: number;
  cost: number;
  quantity: number;
  img: string;
}

const initialState: VenueItem[] = [
  {
    id: 'v1',
    name: 'Conference Room',
    capacity: 15,
    cost: 1500,
    quantity: 0,
    img: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'v2',
    name: 'Auditorium Hall',
    capacity: 200,
    cost: 5500,
    quantity: 0,
    img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'v3',
    name: 'Presentation Room',
    capacity: 50,
    cost: 3500,
    quantity: 0,
    img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'v4',
    name: 'Large Meeting Room',
    capacity: 10,
    cost: 1000,
    quantity: 0,
    img: 'https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'v5',
    name: 'Small Meeting Room',
    capacity: 5,
    cost: 800,
    quantity: 0,
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80',
  },
];

export const venueSlice = createSlice({
  name: 'venue',
  initialState,
  reducers: {
    incrementVenueQuantity: (state: VenueItem[], action: PayloadAction<string>) => {
      const item = state.find((item: VenueItem) => item.id === action.payload);
      if (item) item.quantity += 1;
    },
    decrementVenueQuantity: (state: VenueItem[], action: PayloadAction<string>) => {
      const item = state.find((item: VenueItem) => item.id === action.payload);
      if (item && item.quantity > 0) item.quantity -= 1;
    },
  },
});

export const { incrementVenueQuantity, decrementVenueQuantity } = venueSlice.actions;
export default venueSlice.reducer;