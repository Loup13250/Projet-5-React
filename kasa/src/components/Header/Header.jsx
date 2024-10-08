import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "../../assets/images/logo-header.png";

function Header() {
  const location = useLocation();
  // useLocation pour pouvoir souligner Accueil ou A Propos Selon la page ou je me trouve
  return (
    <header className={styles.header}>
      <Link to="/">
        <img
          className={styles.img}
          src={logo}
          alt="Logo de Kasa"
          title="Logo de Kasa"
        />
      </Link>

      <nav>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link
              // Si page = home ( / ) alors souligner Accueil
              className={`${styles.a} ${
                location.pathname === "/" ? styles.active : ""
              }`}
              to="/"
            >
              Accueil
            </Link>
          </li>
          <li className={styles.li}>
            <Link
              className={`${styles.a} ${
                location.pathname === "/about" ? styles.active : ""
              }`}
              to="/about"
            >
              À Propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
