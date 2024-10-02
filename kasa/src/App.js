import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>test</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            test
          </a>
        </header>
      </div>
      <Footer />
    </HashRouter>
  );
}

export default App;
