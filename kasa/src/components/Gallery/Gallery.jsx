import styles from "./Gallery.module.css";

function Gallery() {
  return (
    <section aria-label="Galerie appartements" className={styles.gallery}>
      <div>Gallerie des appartements</div>
      <p> Ici seront affiché les Cartes des appartements</p>
    </section>
  );
}

export default Gallery;
