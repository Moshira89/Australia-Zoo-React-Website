import Navigation from '../Navigation/Navigation';
import styles from './header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img
          src="/images/logo.png"
          alt="Australia Zoo Logo"
          className={styles.logo}
        />
        <h1 className={styles.title}>Australia Zoo</h1>
      </div>
      <Navigation />
    </header>
  );
}

export default Header;
