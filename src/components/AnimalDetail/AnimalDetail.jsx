import React from 'react';
import styles from './animalDetail.module.css'; 
import { getImageUrl } from '../../utils/getImageUrl';

function AnimalDetail({ animal, onClose }) {
  if (!animal) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button onClick={onClose} className={styles.closeBtn}>
          Close
        </button>
        <img src={getImageUrl(animal.image)} alt={animal.name} />
        <h2>{animal.name}</h2>
        <p><strong>Group:</strong> {animal.group}</p>
        <p><strong>Lifespan:</strong> {animal.lifespan}</p>
        <p><strong>Food:</strong> {animal.food}</p>
        <p><strong>Description:</strong> {animal.description}</p>
        <p><strong>Length:</strong> {animal.length}</p>
        <p><strong>Weight:</strong> {animal.weight}</p>
        <p><strong>Habitat:</strong> {animal.habitat}</p>
        <p><strong>Found in:</strong> {animal.found}</p>
      </div>
    </div>
  );
}

export default AnimalDetail;
