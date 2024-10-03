import styles from "./Gallery.module.css";
import Card from "../Card/Card";
import datas from "../../datas/dataP.json";

function Gallery() {
  // vérifie que les data existe, si oui les affiches sur la page graces aux dataP.json
  return (
    datas &&
    datas.length > 0 && (
      <section aria-label="Galerie appartements" className={styles.gallery}>
        {datas.map((data) => {
          return (
            <Card
              key={data.id}
              id={data.id}
              title={data.title}
              cover={data.cover}
            />
          );
        })}
      </section>
    )
  );
}

export default Gallery;
