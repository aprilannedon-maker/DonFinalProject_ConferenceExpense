import React from 'react';

interface NavbarProps {
  onToggleDetails: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onToggleDetails }) => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="nav-title">Conference Expense Planner</div>
      <div className="nav-links">
        <button onClick={() => scrollToSection('venue-section')}>Venue</button>
        <button onClick={() => scrollToSection('addons-section')}>Add-ons</button>
        <button onClick={() => scrollToSection('meals-section')}>Meals</button>
        <button className="show-details-btn" onClick={onToggleDetails}>
          Show Details
        </button>
      </div>
    </nav>
  );
};