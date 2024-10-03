import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/images/logo-header.png";

function Header() {
  return (
    <header className={styles.header}>
      <img
        className={styles.img}
        src={logo}
        alt="Logo de Kasa"
        title="Logo de Kasa"
      />

      <nav>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link className={styles.a} to="/">
              Accueil
            </Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.a} to="/about">
              À Propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
