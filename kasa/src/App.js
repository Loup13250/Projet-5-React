import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./style/global.css";
import "./App.css";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <HashRouter /* Hash pour gitpage */>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="*" element={<Error />} /* route erreur 404 */ />
      </Routes>

      <Footer />
    </HashRouter>
  );
}

export default App;
