import { Link, useLocation } from "react-router-dom"
import styles from "./header.module.css"
import homeLogo from "../../assets/logo-zoo.png"
import birdsLogo from "../../assets/birds-logo.jpeg"
import mammalsLogo from "../../assets/mammals-logo.jpg"
import reptilesLogo from "../../assets/reptiles-logo.jpeg"

function Header() {
  const location = useLocation();

  const getLogo = () => {
    if (location.pathname.includes("birds")) return birdsLogo;
    if (location.pathname.includes("mammals")) return mammalsLogo;
    if (location.pathname.includes("reptiles")) return reptilesLogo;
    return homeLogo;
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
        <img src={getLogo()} alt="Logo" className={styles.logo} />
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

export default Header