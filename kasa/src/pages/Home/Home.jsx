import Banner from "../../components/Banner/Banner";
import styles from "./Home.module.css";
import Gallery from "../../components/Gallery/Gallery";

function Home() {
  return (
    <main role="main">
      <Banner>
        <div className={styles.div}>Chez vous, partout et ailleurs</div>
      </Banner>
      <Gallery />
    </main>
  );
}

export default Home;
