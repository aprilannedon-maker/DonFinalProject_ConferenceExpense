import React from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { incrementAddonQuantity, decrementAddonQuantity } from '../features/addonsSlice';

export const AddonsSelection: React.FC = () => {
  const dispatch = useAppDispatch();
  const addons = useAppSelector((state) => state.addons);

  const totalCost = addons.reduce((sum, item) => sum + item.cost * item.quantity, 0);

  return (
    <section id="addons-section" className="selection-section">
      <h2 className="section-title">Add-ons Selection</h2>
      <div className="grid-container">
        {addons.map((addon) => (
          <div key={addon.id} className="card">
            <img src={addon.img} alt={addon.name} />
            <h3>{addon.name}</h3>
            <p className="price">${addon.cost}</p>
            <div className="quantity-controls">
              <button onClick={() => dispatch(decrementAddonQuantity(addon.id))}>-</button>
              <span>{addon.quantity}</span>
              <button onClick={() => dispatch(incrementAddonQuantity(addon.id))}>+</button>
            </div>
          </div>
        ))}
      </div>
      <div className="subtotal-display">Total Cost: ${totalCost}</div>
    </section>
  );
};