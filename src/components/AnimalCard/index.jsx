import React from 'react';
import styles from './animalCard.module.css';

function AnimalCard({ animal }) {
  return (
    <div className={styles.card}>
      <img
        src={animal.image}
        alt={animal.name}
        className={styles.cardImage}
      />
      <h3>{animal.name}</h3>
      <p>{animal.description}</p>
    </div>
  );
}

export default AnimalCard;