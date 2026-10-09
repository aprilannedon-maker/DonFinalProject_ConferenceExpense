import React from 'react';
import { useAppSelector } from '../app/hooks';
import type { RootState } from '../app/store';
import type { VenueItem } from '../features/venueSlice';
import type { AddonItem } from '../features/addonsSlice';
import type { MealOption, MealsState } from '../features/mealSlice';

interface DetailsModalProps {
  onClose: () => void;
}

export const DetailsModal: React.FC<DetailsModalProps> = ({ onClose }) => {
  const venueItems = useAppSelector((state: RootState): VenueItem[] => state.venue);
  const addonItems = useAppSelector((state: RootState): AddonItem[] => state.addons);
  const { numberOfPeople, options: mealOptions } = useAppSelector((state: RootState): MealsState => state.meals);

  const selectedVenues = venueItems.filter((i: VenueItem) => i.quantity > 0);
  const selectedAddons = addonItems.filter((i: AddonItem) => i.quantity > 0);
  const selectedMeals = mealOptions.filter((i: MealOption) => i.selected && numberOfPeople > 0);

  const venueTotal = selectedVenues.reduce((sum: number, i: VenueItem) => sum + i.cost * i.quantity, 0);
  const addonTotal = selectedAddons.reduce((sum: number, i: AddonItem) => sum + i.cost * i.quantity, 0);
  const mealTotal = selectedMeals.reduce((sum: number, i: MealOption) => sum + i.costPerPerson * numberOfPeople, 0);

  const grandTotal = venueTotal + addonTotal + mealTotal;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-btn" onClick={onClose}>✕</button>
        
        {/* Total Cost Display Header matching PDF instructions */}
        <h2 style={{ textTransform: 'uppercase', color: '#333', fontSize: '1.2rem', marginBottom: '0.25rem' }}>
          TOTAL COST FOR THE EVENT
        </h2>
        <h1 style={{ color: '#0284c7', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
          ${grandTotal}
        </h1>

        <table className="summary-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Unit Cost</th>
              <th>Quantity</th>
              <th>Total Cost</th>
            </tr>
          </thead>
          <tbody>
            {selectedVenues.map((item: VenueItem) => (
              <tr key={item.id}>
                <td>{item.name} (Capacity:{item.capacity})</td>
                <td>${item.cost}</td>
                <td>{item.quantity}</td>
                <td>${item.cost * item.quantity}</td>
              </tr>
            ))}
            {selectedAddons.map((item: AddonItem) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>${item.cost}</td>
                <td>{item.quantity}</td>
                <td>${item.cost * item.quantity}</td>
              </tr>
            ))}
            {selectedMeals.map((item: MealOption) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>${item.costPerPerson}</td>
                <td>For {numberOfPeople} people</td>
                <td>${item.costPerPerson * numberOfPeople}</td>
              </tr>
            ))}
            {selectedVenues.length === 0 && selectedAddons.length === 0 && selectedMeals.length === 0 && (
              <tr>
                <td colSpan={4} style={{ textAlign: 'center', padding: '1rem' }}>
                  No items selected yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};