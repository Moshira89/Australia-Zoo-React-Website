import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import AnimalDetail from '../../components/AnimalDetail/AnimalDetail.jsx';
import animals from '../../data/animals.js';
import styles from './mammals.module.css';

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
      setShowModal(false); 
    }
  };

  const openDetail = () => setShowModal(true);
  const closeDetail = () => setShowModal(false);

  return (
    <div className={styles.pageLayout}>
      <Sidebar
        animalList={mammals}
        onAnimalClick={handleAnimalClick}
        activeAnimalId={activeAnimal?.id}
      />
      <main className={styles.mainContent}>
        {!activeAnimal ? (
          <p>Welcome to the Australia Zoo mammal exhibition site! Select an animal from the sidebar.</p>
        ) : (
          <section>
            <h2>{activeAnimal.name}</h2>
            <p>{activeAnimal.description.slice(0, 200)}...</p>
            <p><strong>Food:</strong> {activeAnimal.food}</p>
            <p>
              <strong>Group:</strong>{' '}
              <Link to={`/${activeAnimal.group.toLowerCase()}`} className={styles.groupLink}>
                {activeAnimal.group}
              </Link>
            </p>
            <button className={styles.readMoreButton} onClick={openDetail}>
              Read More
            </button>
          </section>
        )}
      </main>

      {showModal && activeAnimal && (
        <AnimalDetail animal={activeAnimal} onClose={closeDetail} />
      )}
    </div>
  );
};

export default Mammals;
