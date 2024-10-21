import styles from "./Slide.module.scss";
import { useState } from "react"; // hooks

function Slide({ titleSlide, textSlide }) {
  // titleSlide et textSlide sont des props du composant Slide.
  const [isOpen, setIsOpen] = useState(false); // déclare ouvert fermé
  const [animation, setAnimation] = useState(0); // l'animation

  function open() {
    setIsOpen(true);
    setAnimation(1);
  }

  function close() {
    setAnimation(0);
    setTimeout(() => {
      setIsOpen(false);
    }, 500); // temps fermeture Slide
  }

  return isOpen ? (
    <div className={styles.slide} data-animation={animation}>
      <button className={styles.button} onClick={() => close()}>
        <h3 className={styles.title}>{titleSlide}</h3>
        <i
          className={styles.icone + " fa-solid fa-chevron-down fa-1x"}
          data-animation={animation}
        ></i>
      </button>
      <div className={styles.containerText}>{textSlide}</div>
    </div>
  ) : (
    <div className={styles.slide} data-animation={animation}>
      <button className={styles.button} onClick={() => open()}>
        <h3 className={styles.title}>{titleSlide}</h3>
        <i
          className={styles.icone + " fa-solid fa-chevron-down fa-1x"}
          data-animation={animation}
        ></i>
      </button>
    </div>
  );
}

export default Slide;

// pour l'animation voir .slide animation et les @keyframes dans le .scss
