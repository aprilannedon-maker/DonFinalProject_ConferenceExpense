import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface AddonItem {
  id: string;
  name: string;
  cost: number;
  quantity: number;
  img: string;
}

const initialState: AddonItem[] = [
  {
    id: 'a1',
    name: 'Projectors',
    cost: 200,
    quantity: 0,
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'a2',
    name: 'Speaker',
    cost: 35,
    quantity: 0,
    img: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'a3',
    name: 'Microphones',
    cost: 45,
    quantity: 0,
    img: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'a4',
    name: 'Whiteboards',
    cost: 80,
    quantity: 0,
    img: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'a5',
    name: 'Signage',
    cost: 80,
    quantity: 0,
    img: 'https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?auto=format&fit=crop&w=400&q=80',
  },
];

export const addonsSlice = createSlice({
  name: 'addons',
  initialState,
  reducers: {
    incrementAddonQuantity: (state: AddonItem[], action: PayloadAction<string>) => {
      const item = state.find((item: AddonItem) => item.id === action.payload);
      if (item) item.quantity += 1;
    },
    decrementAddonQuantity: (state: AddonItem[], action: PayloadAction<string>) => {
      const item = state.find((item: AddonItem) => item.id === action.payload);
      if (item && item.quantity > 0) item.quantity -= 1;
    },
  },
});

export const { incrementAddonQuantity, decrementAddonQuantity } = addonsSlice.actions;
export default addonsSlice.reducer;