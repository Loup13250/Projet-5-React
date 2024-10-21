import styles from "./Footer.module.scss";
import logo from "../../assets/images/logo-footer.png";

function Footer() {
  // footer (no props )qui renvoi  logo et div du text copyright
  return (
    <footer className={styles.footer}>
      <img
        className={styles.img}
        src={logo}
        alt="Logo de Kasa"
        title="Logo de Kasa"
      />
      <div className={styles.div}>
        <i className="fa-regular fa-copyright fa-xs"></i> 2024 Kasa. All rights
        reserved
      </div>
    </footer>
  );
}

export default Footer;
