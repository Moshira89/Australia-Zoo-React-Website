import React, { useState } from 'react'
import animals from '../../data/animals'
import styles from './birds.module.css'

function Birds() {
  const [activeAnimal, setActiveAnimal] = useState(null);

  const birds = animals.filter(animal => animal.group === 'Bird');

  const handleAnimalClick = (animal) => {
    if (activeAnimal && activeAnimal.id === animal.id) {
      setActiveAnimal(null);
    } else {
      setActiveAnimal(animal);
    }
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
          <>
            <h3>{activeAnimal.name}</h3>
            <img src={`images/${activeAnimal.image}`} alt={activeAnimal.name} />
            <p>{activeAnimal.description}</p>
            <p>Diet: {activeAnimal.diet}</p>
            <p>Group: {activeAnimal.group}</p>
            <p>Habitat: {activeAnimal.habitat}</p>
          </>
        )}
      </main>
    </div>
  );
}

export default Birds
