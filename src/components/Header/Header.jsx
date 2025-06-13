import Navigation from '../Navigation/Navigation';
import logo from '../../assets/images/logo.png';
import styles from './header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Australia Zoo Logo" className={styles.logo} />
        <h1 className={styles.title}>Australia Zoo</h1>
      </div>
      <Navigation />
    </header>
  );
}

export default Header;
