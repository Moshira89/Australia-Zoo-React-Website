import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import animals from '../../data/animals';
import styles from './home.module.css';

function Home() {
  const [activeAnimal, setActiveAnimal] = useState(null);

  const handleAnimalClick = (animal) => {
    if (activeAnimal && activeAnimal.id === animal.id) {
      setActiveAnimal(null);
    } else {
      setActiveAnimal(animal);
    }
  };

  return (
    <div className={styles.home}>
      <aside className={styles.sidebar}>
        <h3>All Animals</h3>
        <ul>
          {animals.map((animal) => (
            <li key={animal.id} onClick={() => handleAnimalClick(animal)}>
              {animal.name}
            </li>
          ))}
        </ul>
      </aside>
      <main className={styles.main}>
        {activeAnimal ? (
          <>
            <h2>{activeAnimal.name}</h2>
            <img
              src={activeAnimal.image}
              alt={activeAnimal.name}
              className={styles.image}
            />
            <p>{activeAnimal.description.slice(0, 200)}...</p>
            <p>
              <strong>Diet:</strong> {activeAnimal.diet}
            </p>
            <p>
              <strong>Group:</strong>{' '}
              <Link to={`/${activeAnimal.group.toLowerCase()}s`}>
                {activeAnimal.group}
              </Link>
            </p>
            <Link to={`/animal/${activeAnimal.id}`}>Read More</Link>
          </>
        ) : (
          <p>Welcome to the Australia Zoo! Click on an animal to learn more.</p>
        )}
      </main>
    </div>
  );
}

export default Home;