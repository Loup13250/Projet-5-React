import styles from "./Gallery.module.scss";
import Card from "../Card/Card";
import datas from "../../datas/dataP.json";

function Gallery() {
  // vérifie que les datas existent, si oui les affiches sur la page graces aux dataP.json
  return (
    datas &&
    datas.length > 0 && (
      <section aria-label="Galerie des appartements" className={styles.gallery}>
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
