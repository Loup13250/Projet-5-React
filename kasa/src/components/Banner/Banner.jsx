import styles from "./Banner.module.css";
import bannerHome from "../../assets/images/banner-home.webp";

function Banner({ children }) {
  return (
    <section className={styles.banner}>
      <img
        className={styles.img}
        src={bannerHome}
        alt="Bannière - Paysage"
        title="Bannière - Paysage"
      />
      {children}
    </section>
  );
}

export default Banner;
