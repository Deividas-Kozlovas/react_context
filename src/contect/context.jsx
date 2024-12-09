import { createContext, useEffect, useState } from "react";

const DogDataContext = createContext();

export const DogDataProvider = ({ children }) => {
  const [dogData, setDogData] = useState([]);
  const [dogBreeds, setDogBreeds] = useState([]);
  const [selectedBreedId, setSelectedBreedId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDogs(
      "https://api.thedogapi.com/v1/images/search?limit=10",
      setDogData
    );
    fetchDogs("https://api.thedogapi.com/v1/breeds", setDogBreeds);
  }, []);

  useEffect(() => {
    fetchDogs(
      `https://api.thedogapi.com/v1/images/search?breed_ids=${selectedBreedId}`,
      setDogData
    );
  }, [selectedBreedId]);

  const fetchDogs = async (url, setState) => {
    const apiKey = import.meta.env.VITE_DOG_API_KEY;
    if (!apiKey) {
      throw new Error("API key is missing");
    }
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "x-api-key": apiKey,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setState(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  console.log(dogData);

  return (
    <DogDataContext.Provider
      value={{
        dogData,
        setSelectedBreedId,
        dogBreeds,
        loading,
        error,
      }}
    >
      {children}
    </DogDataContext.Provider>
  );
};

export default DogDataContext;
