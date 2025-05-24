import { Link, useLocation } from "react-router-dom";
import styles from "./header.module.css";
import { getImageUrl } from "../../utils/getImageUrl";

function Header() {
  const location = useLocation();

  const getLogo = () => {
    if (location.pathname.includes("birds")) return getImageUrl("birds-logo.jpeg");
    if (location.pathname.includes("mammals")) return getImageUrl("mammals-logo.jpg");
    if (location.pathname.includes("reptiles")) return getImageUrl("reptiles-logo.jpeg");
    return getImageUrl("logo-zoo.png");
  };

  const getTitle = () => {
    if (location.pathname.includes("birds")) return "Birds of Australia";
    if (location.pathname.includes("mammals")) return "Australian Mammals";
    if (location.pathname.includes("reptiles")) return "Reptiles in the Wild";
    return "Welcome to Australia Zoo";
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <img src={getLogo() || null} alt="Logo" className={styles.logo} />
        <h1 className={styles.title}>{getTitle()}</h1>
      </div>
      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/birds">Birds</Link>
        <Link to="/mammals">Mammals</Link>
        <Link to="/reptiles">Reptiles</Link>
      </nav>
    </header>
  );
}

export default Header;