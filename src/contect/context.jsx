import { createContext, useEffect, useState } from "react";

const DogDataContext = createContext();

export const DogDataProvider = ({ children }) => {
  const [dogData, setDogData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDogs = async (url) => {
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
        setDogData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchDogs("https://api.thecatapi.com/v1/images/search?limit=10");
  }, []);

  return (
    <DogDataContext.Provider
      value={{ dogData, searchInput, setSearchInput, loading, error }}
    >
      {children}
    </DogDataContext.Provider>
  );
};

export default DogDataContext;
