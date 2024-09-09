import { useContext } from "react";
import { StarshipContext } from "../context/StarshipsContext";
import '../css/details.css'
function Details() {
  const { selectedStarship, handleCloseDetails } =
    useContext(StarshipContext);

  if (!selectedStarship) return null;
  return (
    <>
      <div className="details-modal">
        <div className="details-content">
          <h2>{selectedStarship.name}</h2>
          <div className="details">
            <strong>Name:</strong> {selectedStarship.name}
          </div>
          <div className="details">
            <strong>Model:</strong> {selectedStarship.model}
          </div>
          <div className="details">
            <strong>Number of Passengers:</strong> {selectedStarship.passengers}
          </div>
          <div className="details">
            <strong>Max Atmospheric Speed:</strong>{" "}
            {selectedStarship.max_atmosphering_speed}
          </div>
          <div className="details">
            <strong>Manufacturer:</strong> {selectedStarship.manufacturer}
          </div>
          <div className="details">
            <strong>Crew:</strong> {selectedStarship.crew}
          </div>
          <div className="details">
            <strong>Cargo Capacity:</strong> {selectedStarship.cargo_capacity}
          </div>
          <button onClick={handleCloseDetails}>Close</button>
        </div>
      </div>
    </>
  );
}

export default Details;
