import { useContext } from "react";
import { StarshipContext } from "../context/StarshipsContext";
import Ship from "../assets/sentinel2-scaled.jpg";
import "../css/starships.css";
import Details from "../components/Details";

function Starships() {
  const {
    starships,
    loading,
    error,
    selectedStarship,
    handleShowDetails,
    handleCloseDetails,
    loadMoreStarships,
    nextPage,
  } = useContext(StarshipContext);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="container">
        {starships.map((starship) => (
          <div key={starship.name} className="card">
            <h2>{starship.name}</h2>
            <img src={Ship} alt={starship.name} className="ship-img" />
            <div className="card-content">
              <p>
                <strong className="strong">Model: </strong>
                {starship.model}
              </p>
              <p>
                <strong className="strong">Hyperdrive Rating: </strong>
                {starship.hyperdrive_rating}
              </p>
            </div>
            <button
              onClick={() => handleShowDetails(starship)}
              className="details-btn"
            >
              Show more...
            </button>
          </div>
        ))}
        {selectedStarship && (
          <Details starship={selectedStarship} onClose={handleCloseDetails} />
        )}
      </div>
      <div className="load-more">
        {nextPage && (
          <button onClick={loadMoreStarships} className="load-more-btn">
            Load More Starships
          </button>
        )}
      </div>
    </>
  );
}

export default Starships;
