import React from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { incrementVenueQuantity, decrementVenueQuantity } from '../features/venueSlice';

export const VenueSelection: React.FC = () => {
  const dispatch = useAppDispatch();
  const rooms = useAppSelector((state) => state.venue);

  const totalCost = rooms.reduce((sum, item) => sum + item.cost * item.quantity, 0);

  return (
    <section id="venue-section" className="selection-section">
      <h2 className="section-title">Venue Room Selection</h2>
      <div className="grid-container">
        {rooms.map((room) => (
          <div key={room.id} className="card">
            <img src={room.img} alt={room.name} />
            <h3>{room.name}</h3>
            <p className="capacity">(Capacity: {room.capacity})</p>
            <p className="price">${room.cost}</p>
            <div className="quantity-controls">
              <button onClick={() => dispatch(decrementVenueQuantity(room.id))}>-</button>
              <span>{room.quantity}</span>
              <button onClick={() => dispatch(incrementVenueQuantity(room.id))}>+</button>
            </div>
          </div>
        ))}
      </div>
      <div className="subtotal-display">Total Cost: ${totalCost}</div>
    </section>
  );
};