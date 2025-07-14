import React from 'react';
import styles from './sidebar.module.css';

function Sidebar({ animalList = [], onAnimalClick, activeAnimalId }) {
  return (
    <aside className={styles.sidebar}>
      <ul className={styles.animalList}>
        {animalList.map((animal) => (
          <li
            key={animal.id}
            className={`${styles.animalItem} ${
              activeAnimalId === animal.id ? styles.active : ''
            }`}
          >
            <button
              onClick={() => onAnimalClick(animal)}
              className={styles.animalButton}
            >
              {animal.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
