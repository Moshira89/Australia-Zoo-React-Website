import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Australia Zoo Exhibition - All rights reserved.</p>
    </footer>
  );
};

export default Footer