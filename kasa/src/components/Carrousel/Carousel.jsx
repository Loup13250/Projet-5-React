import styles from "./Carousel.module.scss";
import { useState } from "react";

function Carousel({ pictures, title }) {
  // Carousel pictures et title sont des pops ( permet au composant de savoir quoi utiliser)
  const [count, setCount] = useState(0); // etat count pour suivre l'index de l'image actuel

  const previousSlide = () => {
    //Décremente count 0 => -1 pour passer a l'image précédente
    setCount(count === 0 ? pictures.length - 1 : count - 1);
  };

  const nextSlide = () => {
    // Incrémente si image est la derniere => 1ere
    setCount(count === pictures.length - 1 ? 0 : count + 1);
  };

  return pictures.length === 1 ? ( // si 1 image afficher 1 image sans les boutons de nav
    <div className={styles.carousel}>
      <img
        //${styles[`animation${count % 2}`]}
        className={`${styles.slide} `}
        src={pictures[count]}
        alt={title}
        title={title}
      />

      <span className={styles.counter}>
        {count + 1}/{pictures.length}
      </span>
    </div>
  ) : (
    <div className={styles.carousel}>
      <button
        aria-label="Image du logement précédente"
        className={`${styles.button} ${styles.arrowLeft}`}
        onClick={previousSlide}
      >
        <i className={`${styles.arrow} fa-solid fa-chevron-left`}></i>
      </button>
      <img
        className={`${styles.slide} ${styles[`animation${count % 2}`]}`}
        src={pictures[count]}
        alt={title}
        title={title}
      />
      <span className={styles.counter}>
        {count + 1}/{pictures.length}
      </span>
      <button
        aria-label="Image du logement suivante"
        className={`${styles.button} ${styles.arrowRight}`}
        onClick={nextSlide}
      >
        <i className={`${styles.arrow} fa-solid fa-chevron-right`}></i>
      </button>
    </div>
  );
}

export default Carousel;
