import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navigation.module.css'

function Navigation() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navLinks}>
        <li><Link to="/" className={styles.navItem}>Home</Link></li>
        <li><Link to="/mammals" className={styles.navItem}>Mammals</Link></li>
        <li><Link to="/birds" className={styles.navItem}>Birds</Link></li>
        <li><Link to="/reptiles" className={styles.navItem}>Reptiles</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation