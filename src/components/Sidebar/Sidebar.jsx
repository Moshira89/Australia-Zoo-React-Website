import React from 'react';
import styles from './sidebar.module.css';

export default function Sidebar({ animalList = [], onAnimalClick, activeAnimalId }) {
  return (
    <aside>
      <ul>
        {animalList.map((animal) => (
          <li key={animal.id}>
            <button
              onClick={() => onAnimalClick(animal)}
              style={{
                fontWeight: activeAnimalId === animal.id ? 'bold' : 'normal',
              }}
            >
              {animal.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}