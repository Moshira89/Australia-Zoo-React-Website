import React from 'react'
import styles from './animalCard.module.css'

function AnimalCard({ animal }) {
  const imageSrc = new URL(`../../assets/${animal.image}`, import.meta.url).href;

  return (
    <div className="card">
      <img
        src={imageSrc}
        alt={animal.name}
        className={styles.cardImage}
      />
      <h3>{animal.name}</h3>
      <p>{animal.description}</p>
    </div>
  );
}

export default AnimalCard