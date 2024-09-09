import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const StarshipContext = createContext();

export const StarshipProvider = ({ children }) => {
  const [starships, setStarships] = useState([]);
  const [filteredStarships, setFilteredStarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedStarship, setSelectedStarship] = useState(null);
  const [nextPage, setNextPage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://swapi.dev/api/starships/");
        setStarships(response.data.results);
        setFilteredStarships(response.data.results);
        setNextPage(response.data.next);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (searchTerm) => {
   if(searchTerm === ""){
    setFilteredStarships(starships);
   }else{
    const filtered = starships.filter((starship) =>
      starship.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredStarships(filtered);
   }
  };

  const loadMoreStarships = async () => {
    if(nextPage){
      try{
        const response = await axios.get(nextPage);
        setStarships((prevStarships) => [...prevStarships, ...response.data.results]);
        setFilteredStarships((prevStarships) => [...prevStarships, ...response.data.results]);
        setNextPage(response.data.next);
      } catch(error){
        setError(error); 
      }
    }
  };

  const handleShowDetails = (starship) => {
    setSelectedStarship(starship);
  };

  const handleCloseDetails = () => {
    setSelectedStarship(null);
  };

  return (
    <StarshipContext.Provider
      value={{
        starships: filteredStarships,
        loading,
        error,
        selectedStarship,
        handleShowDetails,
        handleCloseDetails,
        loadMoreStarships,
        nextPage,
        handleSearch
      }}
    >
      {children}
    </StarshipContext.Provider>
  );
};
