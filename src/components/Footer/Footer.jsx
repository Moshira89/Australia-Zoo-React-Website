import styles from './footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Australia Zoo. All rights reserved.</p>
      <p>Created to raise awareness of Australian animals.</p>
    </footer>
  );
}

export default Footer;
