import { NavLink } from 'react-router-dom';
import styles from './navigation.module.css';

function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/birds"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Birds
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/mammals"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Mammals
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reptiles"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Reptiles
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
