import React, { useContext } from "react";
import DogDataContext from "../../contect/context";

const Home = () => {
  const { loading } = useContext(DogDataContext);
  return <div>Home {loading ? <p>loading...</p> : <p>not loading...</p>}</div>;
};

export default Home;
