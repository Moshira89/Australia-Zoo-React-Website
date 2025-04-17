import React from 'react'
import { useParams } from 'react-router-dom'
import animals from '../../data/animals'
import styles from './animalDetail.module.css'

function AnimalDetail() {
  const { id } = useParams();
  const animal = animals.find(a => a.id === parseInt(id)); 

  if (!animal) {
    return <div>Animal not found!</div>;
  }

  return (
    <div className={styles.detailPage}>
      <h1>{animal.name}</h1>
      <img src={`images/${animal.image}`} alt={animal.name} />
      <p>{animal.description}</p>
      <p>Diet: {animal.diet}</p>
      <p>Group: {animal.group}</p>
      <p>Habitat: {animal.habitat}</p>
      <button onClick={() => window.history.back()}>Close</button> 
    </div>
  );
}

export default AnimalDetail