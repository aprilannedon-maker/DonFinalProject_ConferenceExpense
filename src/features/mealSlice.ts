import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface MealOption {
  id: string;
  name: string;
  costPerPerson: number;
  selected: boolean;
}

export interface MealsState {
  numberOfPeople: number;
  options: MealOption[];
}

const initialState: MealsState = {
  numberOfPeople: 0,
  options: [
    { id: 'm1', name: 'Breakfast', costPerPerson: 50, selected: false },
    { id: 'm2', name: 'High Tea', costPerPerson: 25, selected: false },
    { id: 'm3', name: 'Lunch', costPerPerson: 65, selected: false },
    { id: 'm4', name: 'Dinner', costPerPerson: 70, selected: false },
  ],
};

export const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    setNumberOfPeople: (state: MealsState, action: PayloadAction<number>) => {
      state.numberOfPeople = Math.max(0, action.payload);
    },
    toggleMealOption: (state: MealsState, action: PayloadAction<string>) => {
      const option = state.options.find((opt: MealOption) => opt.id === action.payload);
      if (option) option.selected = !option.selected;
    },
  },
});

export const { setNumberOfPeople, toggleMealOption } = mealsSlice.actions;
export default mealsSlice.reducer;