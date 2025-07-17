import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import animals from '../../data/animals';
import styles from './animalDetail.module.css';

const AnimalDetail = ({ animal: propAnimal, onClose }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [animal, setAnimal] = useState(propAnimal);

  useEffect(() => {
    if (!propAnimal && id) {
      const foundAnimal = animals.find((a) => a.id === parseInt(id));
      setAnimal(foundAnimal);
    }
  }, [id, propAnimal]);

  if (!animal) {
    return (
      <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
          <p>Animal not found.</p>
          <button onClick={() => navigate(-1)}>Back</button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.modalOverlay}>
      <section className={styles.modalContent}>
        <header className={styles.modalHeader}>
          <h2>{animal.name}</h2>
          {onClose ? (
            <button className={styles.closeButton} onClick={onClose}>Close</button>
          ) : (
            <button className={styles.closeButton} onClick={() => navigate(-1)}>Back</button>
          )}
        </header>
        <figure>
          <img src={`/images/${animal.image}`} alt={animal.name} className={styles.animalImage} />
        </figure>
        <p>{animal.description}</p>
        <ul>
          <li><strong>Group:</strong> {animal.group}</li>
          <li><strong>Lifespan:</strong> {animal.lifespan}</li>
          <li><strong>Food:</strong> {animal.food}</li>
          <li><strong>Habitat:</strong> {animal.habitat}</li>
          <li><strong>Found:</strong> {animal.found}</li>
          <li><strong>Length:</strong> {animal.length}</li>
          <li><strong>Weight:</strong> {animal.weight}</li>
        </ul>
      </section>
    </div>
  );
};

export default AnimalDetail;
