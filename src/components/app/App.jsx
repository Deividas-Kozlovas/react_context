import "./App.scss";
import Home from "../../pages/home/Home";
import Search from "../../pages/search/Search";
import { Routes, Route } from "react-router-dom";
import Navigaiton from "../navigation/Navigation";
import Footer from "../footer/Footer";

function App() {
  return (
    <>
      <section className="app">
        <header>
          <Navigaiton />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </section>
      <Footer />
    </>
  );
}

export default App;
