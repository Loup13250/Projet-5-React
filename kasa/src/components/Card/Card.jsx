import styles from "./Card.module.css";
import { Link } from "react-router-dom";

function Card({ id, cover, title }) {
  // Affiche les Card et permet de rediriger vers les pages Logements avec l'ID
  return (
    <article className={styles.article}>
      <Link to={`/Logements/`}>
        <img className={styles.img} src={cover} alt={title} title={title} />
        <h3 className={styles.title}>{title}</h3>
      </Link>
    </article>
  );
}

export default Card;

// { <Link to={`/Logements/${id}`}> }
