import React from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setNumberOfPeople, toggleMealOption } from '../features/mealSlice';

export const MealsSelection: React.FC = () => {
  const dispatch = useAppDispatch();
  const { numberOfPeople, options } = useAppSelector((state) => state.meals);

  const totalCost = options.reduce((sum, option) => {
    return option.selected ? sum + option.costPerPerson * numberOfPeople : sum;
  }, 0);

  return (
    <section id="meals-section" className="selection-section">
      <h2 className="section-title">Meals Selection</h2>
      <div className="people-input-container">
        <label htmlFor="num-people">Number of People:</label>
        <input
          id="num-people"
          type="number"
          min="0"
          value={numberOfPeople}
          onChange={(e) => dispatch(setNumberOfPeople(Number(e.target.value)))}
        />
      </div>
      <div className="meals-grid">
        {options.map((option) => (
          <div key={option.id} className="meal-option">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={option.selected}
                onChange={() => dispatch(toggleMealOption(option.id))}
              />
              <span className="meal-name">{option.name}</span>
            </label>
            <p className="price">${option.costPerPerson}</p>
          </div>
        ))}
      </div>
      <div className="subtotal-display">Total Cost: ${totalCost}</div>
    </section>
  );
};