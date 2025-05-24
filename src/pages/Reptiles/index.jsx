import React, { useState } from 'react';
import animals from '../../data/animals';
import styles from './reptiles.module.css';

function Reptiles() {
  const [activeAnimal, setActiveAnimal] = useState(null);

  const reptiles = animals.filter(animal => animal.group === 'Reptile');

  const handleAnimalClick = (animal) => {
    setActiveAnimal(prev =>
      prev && prev.id === animal.id ? null : animal
    );
  };

  return (
    <div className={styles.page}>
      <aside className={styles.sidebar}>
        <h3>Reptiles</h3>
        <ul>
          {reptiles.map(animal => (
            <li key={animal.id} onClick={() => handleAnimalClick(animal)}>
              {animal.name}
            </li>
          ))}
        </ul>
      </aside>
      <main className={styles.main}>
        <h2>Welcome to the Reptiles Page</h2>
        <p>Here you'll find information about Australian reptiles.</p>

        {activeAnimal && (
          <div className={styles.detail}>
            <h3>{activeAnimal.name}</h3>
            <img
              src={activeAnimal.image}
              alt={activeAnimal.name}
              className={styles.image}
            />
            <p>{activeAnimal.description}</p>
            <p><strong>Diet:</strong> {activeAnimal.diet}</p>
            <p><strong>Group:</strong> {activeAnimal.group}</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default Reptiles;