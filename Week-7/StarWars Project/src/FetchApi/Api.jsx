// src/components/StarWarsStarships.js
import { useEffect, useState } from "react";
import "../css/api.css";

const StarWarsStarships = () => {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    const starshipImages = {
        "CR90 corvette": "https://starwars.fandom.com/wiki/File:TantiveIV-TSWB.png",
    }


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/starships/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setStarships(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <h1 className="title">Star Wars Starships</h1>
      <div className="card-container">
        <ul className="ships-card">
          {starships.map((starship) => (
            <div key={starship.name} className="card">
                <img src={starshipImages[starship.name]} alt="" />
              <li>{starship.name}</li>
              <p>{starship.model}</p>
              <a>{starship.url}</a>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default StarWarsStarships;
