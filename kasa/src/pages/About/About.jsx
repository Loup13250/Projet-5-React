import Banner from "../../components/Banner/Banner";
import styles from "./About.module.scss";
import Slide from "../../components/Slide/Slide";

function About() {
  // fonction qui récupere la banniere et les Slide et affiche du text dans les Slide
  return (
    <main role="main">
      <Banner />
      <section className={styles.section}>
        <Slide
          titleSlide="Fiabilité"
          textSlide="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
        />
        <Slide
          titleSlide="Respect"
          textSlide="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Slide
          titleSlide="Service"
          textSlide="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        />
        <Slide
          titleSlide="Sécurité"
          textSlide="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </section>
    </main>
  );
}

export default About;
