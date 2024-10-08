import styles from "./Slide.module.scss";
import { useState } from "react"; // hooks React

function Slide({ titleSlide, textSlide }) {
  // titleSlide et textSlide sont des props.
  const [isOpen, setIsOpen] = useState(false);
  const [animation, setAnimation] = useState(0);

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
    <div className={styles.Slide} animation={animation}>
      <button
        aria-haspopup="true"
        aria-expanded="true"
        className={styles.button}
        onClick={() => close()}
      >
        <h3 className={styles.title}>{titleSlide}</h3>
        <i
          className={styles.icone + " fa-solid fa-chevron-down fa-1x"}
          animation={animation}
        ></i>
      </button>
      <div className={styles.containerText}>{textSlide}</div>
    </div>
  ) : (
    <div className={styles.Slide} animation={animation}>
      <button
        aria-haspopup="true"
        aria-expanded="false"
        className={styles.button}
        onClick={() => open()}
      >
        <h3 className={styles.title}>{titleSlide}</h3>
        <i
          className={styles.icone + " fa-solid fa-chevron-down fa-1x"}
          animation={animation}
        ></i>
      </button>
    </div>
  );
}

export default Slide;
