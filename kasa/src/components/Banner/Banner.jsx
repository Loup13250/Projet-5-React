import styles from "./Banner.module.css";
import bannerHome from "../../assets/images/banner-home.webp";

function Banner({ children }) {
  return (
    <section className={styles.banner}>
      <img
        className={styles.img}
        src={bannerHome} // Remplacez par le chemin de votre image
        alt="Bannière - Paysage"
        title="Bannière - Paysage"
      />
      {children}
    </section>
  );
}

export default Banner;
