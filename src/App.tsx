import React, { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { Navbar } from './components/NavBar';
import { VenueSelection } from './components/VenueSelection';
import { AddonsSelection } from './components/AddonsSelectins';
import { MealsSelection } from './components/MealsSelection';
import { DetailsModal } from './components/Detail.Modal';

export const App: React.FC = () => {
  const [showProductPage, setShowProductPage] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  return (
    <div className="app-container">
      {!showProductPage ? (
        <LandingPage onStart={() => setShowProductPage(true)} />
      ) : (
        <>
          <Navbar onToggleDetails={() => setShowDetailsModal(true)} />
          <main className="main-content">
            <VenueSelection />
            <AddonsSelection />
            <MealsSelection />
          </main>
          {showDetailsModal && (
            <DetailsModal onClose={() => setShowDetailsModal(false)} />
          )}
        </>
      )}
    </div>
  );
};

export default App;