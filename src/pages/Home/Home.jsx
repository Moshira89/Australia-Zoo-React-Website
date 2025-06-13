import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import AnimalDetail from '../../components/AnimalDetail/AnimalDetail.jsx';
import animals from '../../data/animals.js';

const Home = () => {
  const [activeAnimal, setActiveAnimal] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleAnimalClick = (animal) => {
    if (activeAnimal && activeAnimal.id === animal.id) {
      setActiveAnimal(null);
    } else {
      setActiveAnimal(animal);
    }
  };

  const openDetail = () => setShowModal(true);
  const closeDetail = () => setShowModal(false);

  return (
    <div className="pageLayout">
      <Sidebar
        animalList={animals}
        onAnimalClick={handleAnimalClick}
        activeAnimalId={activeAnimal?.id}
      />
      <main className="mainContent">
        {!activeAnimal ? (
          <p>Welcome to the Australia Zoo animal exhibition site!</p>
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

export default Home;
