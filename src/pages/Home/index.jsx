import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'
import animals from '../../data/animals'
import styles from './home.module.css'

function Home() {
  const [activeAnimal, setActiveAnimal] = useState(null);

  const handleAnimalClick = (animal) => {
    if (activeAnimal && activeAnimal.id === animal.id) {
      setActiveAnimal(null); 
    } else {
      setActiveAnimal(animal);
    }
  };

  const allAnimalNames = animals.map((animal) => (
    <li key={animal.id} onClick={() => handleAnimalClick(animal)}>
      {animal.name}
    </li>
  ));

  return (
    <div className={styles.home}>
      <aside className={styles.sidebar}>
        <h3>All Animals</h3>
        <ul>{allAnimalNames}</ul>
      </aside>
      <main className={styles.main}>
        {activeAnimal ? (
          <>
            <h2>{activeAnimal.name}</h2>
            <img src={`images/${activeAnimal.image}`} alt={activeAnimal.name} />
            <p>{activeAnimal.description.slice(0, 200)}...</p>
            <p>Diet: {activeAnimal.diet}</p>
            <p>Group: <Link to={`/${activeAnimal.group.toLowerCase()}s`}>{activeAnimal.group}</Link></p>
            <Link to={`/animal/${activeAnimal.id}`}>Read More</Link>
          </>
        ) : (
          <p>Welcome to the Australia Zoo! Click on an animal to learn more.</p>
        )}
      </main>
    </div>
  );
}

export default Home