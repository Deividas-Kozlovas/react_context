import { createContext, useState } from "react";

const DogDataContext = createContext();

export const DogDataProvider = ({ children }) => {
  const [dogData, setDogData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <DogDataContext.Provider value={{ dogData, loading, error }}>
      {children}
    </DogDataContext.Provider>
  );
};

export default DogDataContext;
