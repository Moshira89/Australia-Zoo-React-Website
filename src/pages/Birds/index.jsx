import React, { useState } from 'react';
import animals from '../../data/animals';
import styles from './birds.module.css';

function Birds() {
  const [activeAnimal, setActiveAnimal] = useState(null);

  const birds = animals.filter(animal => animal.group === 'Bird');

  const handleAnimalClick = (animal) => {
    setActiveAnimal(prev => (prev && prev.id === animal.id ? null : animal));
  };

  return (
    <div className={styles.page}>
      <aside className={styles.sidebar}>
        <h3>Birds</h3>
        <ul>
          {birds.map(animal => (
            <li key={animal.id} onClick={() => handleAnimalClick(animal)}>
              {animal.name}
            </li>
          ))}
        </ul>
      </aside>
      <main className={styles.main}>
        <h2>Welcome to the Birds Page</h2>
        <p>Here you'll find information about Australian birds.</p>

        {activeAnimal && (
          <section className={styles.detail}>
            <h3>{activeAnimal.name}</h3>
            <img
              src={activeAnimal.image}
              alt={activeAnimal.name}
              className={styles.image}
            />
            <p>{activeAnimal.description}</p>
            <p><strong>Diet:</strong> {activeAnimal.diet}</p>
            <p><strong>Group:</strong> {activeAnimal.group}</p>
          </section>
        )}
      </main>
    </div>
  );
}

export default Birds;