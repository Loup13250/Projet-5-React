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

// import { useParams, useNavigate } from "react-router-dom"
// import { useEffect } from "react"
// import styles from "./Logements.module.scss"
// import Carrousel from ../../components/Carrousel/Carrousel
// import Slide from "../../components/Slide/Slide"
// import datas from "../../datas/dataP.json"
// ---------
// ---------
// function recupere id Use params
// Vérifier les Datas
// ---------
// Si Datas =/ error
// ---------
// Déclarer const
//  tags / noms / note ( etoiles)
// ---------
// Return
// DataP
