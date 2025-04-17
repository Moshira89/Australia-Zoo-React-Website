import React, { useState } from 'react'
import animals from '../../data/animals'
import styles from './reptiles.module.css'

function Reptiles() {
  const [activeAnimal, setActiveAnimal] = useState(null);

  const reptiles = animals.filter(animal => animal.group === 'Reptile');

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

export default Reptiles