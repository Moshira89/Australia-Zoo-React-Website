import React from 'react';
import styles from './sidebar.module.css';

function Sidebar({ animalList = [], onAnimalClick, activeAnimalId }) {
  return (
    <aside className={styles.sidebar}>
      <nav aria-label="Animal list">
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
      </nav>
    </aside>
  );
}

export default Sidebar;
