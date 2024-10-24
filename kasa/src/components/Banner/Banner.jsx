import styles from "./Banner.module.scss";
import bannerHome from "../../assets/images/banner-home.webp";
import bannerAbout from "../../assets/images/banner-about.webp";

function Banner({ children }) {
  // propriété enfant + Vérifie avec le # si acceuil ou about pour l'image
  const bannerImage =
    window.location.hash.substring(1).toString() === "/about"
      ? bannerAbout
      : bannerHome;
  const classNameBanner =
    bannerImage === bannerHome
      ? styles.banner + " " + styles.bannerHome
      : styles.banner;

  return (
    // retourne l'image en conséquence
    <section aria-label="Bannière" className={classNameBanner}>
      <img
        className={styles.img}
        src={bannerImage}
        alt="Bannière"
        title="Bannière"
      />
      {children}
    </section>
  );
}

export default Banner;
