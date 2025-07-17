import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import AnimalDetail from '../../components/AnimalDetail/AnimalDetail';
import animals from '../../data/animals';

const Home = () => {
  const [activeAnimal, setActiveAnimal] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleAnimalClick = (animal) => {
    if (activeAnimal && activeAnimal.id === animal.id) {
      setActiveAnimal(null);
      setShowModal(false); 
    } else {
      setActiveAnimal(animal);
      setShowModal(false); 
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

      <main className="mainContent" aria-live="polite">
        {!activeAnimal ? (
          <p>Welcome to the Australia Zoo animal exhibition site!</p>
        ) : (
          <section aria-label={`Summary of ${activeAnimal.name}`}>
            <h2>{activeAnimal.name}</h2>
            <p>{activeAnimal.description.length > 200
              ? activeAnimal.description.slice(0, 200) + '...'
              : activeAnimal.description}</p>
            <p><strong>Food:</strong> {activeAnimal.food}</p>
            <p>
              <strong>Group:</strong>{' '}
              <Link to={`/${activeAnimal.group.toLowerCase()}`}>
                {activeAnimal.group}
              </Link>
            </p>
            <button onClick={openDetail}>Read More</button>
          </section>
        )}
      </main>

      {showModal && activeAnimal && (
        <AnimalDetail animal={activeAnimal} onClose={closeDetail} />
      )}
    </div>
  );
};

export default Home;
