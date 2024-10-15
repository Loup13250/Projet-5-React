import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

function Card({ id, cover, title }) {
  // Déclare id cover et titre
  // Affiche les Card et permet de rediriger vers les pages Logements avec l'ID
  return (
    <article className={styles.article}>
      <Link to={`/Logements/${id}`}>
        <img className={styles.img} src={cover} alt={title} title={title} />
        <h3 className={styles.title}>{title}</h3>
      </Link>
    </article>
  );
}

export default Card;
