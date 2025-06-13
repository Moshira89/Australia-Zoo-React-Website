import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import AnimalDetail from '../../components/AnimalDetail/AnimalDetail.jsx';
import animals from '../../data/animals.js';

const Mammals = () => {
  const [activeAnimal, setActiveAnimal] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const mammals = animals.filter(animal => animal.group.toLowerCase() === 'mammals');

  const handleAnimalClick = (animal) => {
    if (activeAnimal && activeAnimal.id === animal.id) {
      setActiveAnimal(null);
      setShowModal(false);
    } else {
      setActiveAnimal(animal);
    }
  };

  const openDetail = () => setShowModal(true);
  const closeDetail = () => setShowModal(false);

  return (
    <div className="pageLayout">
      <Sidebar
        animalList={mammals}
        onAnimalClick={handleAnimalClick}
        activeAnimalId={activeAnimal?.id}
      />
      <main className="mainContent">
        {!activeAnimal ? (
          <p>Welcome to the Australia Zoo mammal exhibition site! Select an animal from the sidebar.</p>
        ) : (
          <div>
            <h2>{activeAnimal.name}</h2>
            <p>{activeAnimal.description.slice(0, 200)}...</p>
            <p><strong>Food:</strong> {activeAnimal.food}</p>
            <p>
              <strong>Group:</strong>{' '}
              <Link to={`/${activeAnimal.group.toLowerCase()}`}>
                {activeAnimal.group}
              </Link>
            </p>
            <button onClick={openDetail}>Read More</button>
          </div>
        )}
      </main>
      {showModal && activeAnimal && (
        <AnimalDetail animal={activeAnimal} onClose={closeDetail} />
      )}
    </div>
  );
};

export default Mammals;
