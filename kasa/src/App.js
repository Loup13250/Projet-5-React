import { HashRouter, Routes, Route } from "react-router-dom";
import "./style/global.scss";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";
import Logements from "./pages/logements/Logements";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <HashRouter /* Hash pour gitpage */>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Logements" element={<Logements />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<Error />} /* route erreur 404 */ />
      </Routes>

      <Footer />
    </HashRouter>
  );
}

export default App;
