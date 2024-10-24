import styles from "./Error.module.scss";
import { Link } from "react-router-dom";

function Error() {
  // page erreur (en cas de mauvaise redirection)
  return (
    <main role="main" className={styles.main}>
      <h2 className={styles.error}>404</h2>
      <div className={styles.text}>
        Oups ! La page que vous demandez n'existe pas.
      </div>
      <Link className={styles.link} to="/">
        Retourner sur la page d'accueil
      </Link>
    </main>
  );
}

export default Error;
