import React, { useContext } from "react";
import DogDataContext from "../../contect/context";

const Home = () => {
  const { dogData, loading } = useContext(DogDataContext);
  return (
    <div>
      Home {loading ? <p>loading...</p> : <p>not loading...</p>}
      {dogData.map((dog) => (
        <p key={dog.id}>{dog.id}</p>
      ))}
    </div>
  );
};

export default Home;
