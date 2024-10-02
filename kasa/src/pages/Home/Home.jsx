import Banner from "../../components/Banner/Banner";
import styles from "./Home.module.css";

function Home() {
  return (
    <main role="main">
      <Banner>
        <div className={styles.div}>Chez vous, partout et ailleurs</div>
      </Banner>
    </main>
  );
}

export default Home;
