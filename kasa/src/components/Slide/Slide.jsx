import styles from "./Slide.module.scss";
import { useState } from "react"; // hooks

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
      <button className={styles.button} onClick={() => close()}>
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
      <button className={styles.button} onClick={() => open()}>
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

// Importations : Il importe des styles et des outils de React.

// Création d'un Composant : Il crée un composant appelé Slide qui prend deux paramètres (titleSlide et textSlide).

// État du Composant :

// isOpen : Gère si le slide est ouvert ou fermé.

// animation : Gère l'état d'animation.

// Fonctions d'Ouverture et Fermeture :

// open : Ouvre le slide et déclenche l'animation d'ouverture.

// close : Lance l'animation de fermeture et ferme le slide après 500ms.

// Affichage du Composant :

// Si le slide est ouvert, il montre un bouton et le texte (textSlide).

// Si le slide est fermé, il montre juste un bouton.

// En gros, ce fichier gère une section "slider" qui peut s'ouvrir et se fermer avec des animations
