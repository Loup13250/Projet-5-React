// import Banner from "../../components/Banner/Banner";
// import styles from "./About.module.css";

// function About() {
//   return (
//     <main role="main">
//       <Banner />
//       <section className={styles.section}>
//         <h2>À propos</h2>
//       </section>
//     </main>
//   );
// }

// export default About;

import Banner from "../../components/Banner/Banner";
import styles from "../Home/Home";

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
