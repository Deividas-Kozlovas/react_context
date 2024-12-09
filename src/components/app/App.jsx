import "./App.scss";
import Home from "../../pages/home/Home";
import Search from "../../pages/search/Search";
import { Routes, Route, Link } from "react-router-dom";
import Navigaiton from "../navigation/Navigation";

function App() {
  return (
    <>
      <header>
        <Navigaiton />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
