import React, { useState } from "react";
import tripsData from "../tripsData";
import SearchBar from "./SearchBar";
import TripItem from "./TripItem";
import { useLocation, useNavigate } from "react-router-dom";

function TripsList() {
  // const params = useParams();
  // //const { difficulty } = useParams();

  // console.log(params);
  // const [query, setQuery] = useState("");
  // const trips = tripsData
  //   .filter((trip) => trip.name.toLowerCase().includes(query.toLowerCase()))
  //   .map((trip, index) => <TripItem trip={trip} key={index} />);

  // const { difficulty } = useParams();

  // ...

  // const trips = tripsData
  //   .filter((trip) => !difficulty || trip.difficulty === difficulty)
  //   .filter((trip) => trip.name.toLowerCase().includes(query.toLowerCase()))
  //   .map((trip, index) => <TripItem trip={trip} key={index} />);

  // const handleClick = () => {};
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const difficulty = params.get("difficulty");

  const [query, setQuery] = useState("");

  const trips = tripsData
    .filter((trip) => !difficulty || trip.difficulty === difficulty)
    .filter((trip) => trip.name.toLowerCase().includes(query.toLowerCase()))
    .map((trip, index) => <TripItem trip={trip} key={index} />);
  const [filteredTrips, setFilteredTrips] = useState(trips);
  const navigate = useNavigate();

  const handleButtonClick = (e) => {
    navigate(`/trips?difficulty=${e}`);
    setFilteredTrips(tripsData.filter((trip) => trip.difficulty === e));
    console.log(tripsData.filter((trip) => trip.difficulty === e));
    console.log(filteredTrips);
  };
  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Explore Trips
        </h2>
        <br />
        <SearchBar setQuery={setQuery} />
        <center>
          <button
            onClick={() => handleButtonClick("Easy")}
            className="btn btn-primary btn-xl"
          >
            Easy
          </button>
          <button
            onClick={() => handleButtonClick("Moderate")}
            className="btn btn-primary btn-xl"
          >
            Moderate
          </button>
          <button
            onClick={() => handleButtonClick("Hard")}
            className="btn btn-primary btn-xl"
          >
            Hard
          </button>
        </center>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>

        <div className="row justify-content-center">{filteredTrips}</div>
      </div>
    </section>
  );
}

export default TripsList;
