import React, { useState } from 'react'
import styles from './sidebar.module.css'

function Sidebar() {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <div className={styles.sidebar}>
      <h2>Animal Groups</h2>
      <a
        href="#mammals"
        className={activeLink === 'mammals' ? styles.active : ''}
        onClick={() => handleLinkClick('mammals')}
      >
        Mammals
      </a>
      <a
        href="#birds"
        className={activeLink === 'birds' ? styles.active : ''}
        onClick={() => handleLinkClick('birds')}
      >
        Birds
      </a>
      <a
        href="#reptiles"
        className={activeLink === 'reptiles' ? styles.active : ''}
        onClick={() => handleLinkClick('reptiles')}
      >
        Reptiles
      </a>
    </div>
  );
}

export default Sidebar