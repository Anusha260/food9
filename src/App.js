import React from "react";
import "./styles.css";
import { useState } from "react";

const food = {
  hyderabad: [
    { name: "Golconda pavilion", rating: "5/5" },
    { name: "Jewel of Nizam-The Minar", rating: "4.5/5" }
  ],

  Bangalore: [
    {
      name: "Karavalli",
      rating: "4.5/5"
    },
    {
      name: "Treat Restaurant,Indiranagar",
      rating: "5/5"
    }
  ],
  Mumbai: [
    {
      name: "Lake View Cafe",
      rating: "4.5/5"
    },
    {
      name: "London Taxi Gastropub-khar",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Mumbai");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> food restaurants </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Search Food Delivery App Hyderabad On Info.com. Find Food Delivery App
        Hyderabad Results Quickly On Info.com. Discover Info On Apps. Search
        Info Today. Find More Information. Explore Tech Information.{" "}
      </p>

      <div>
        {Object.keys(food).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "pink",
              borderRadius: "5rem",
              padding: "0.5rem  1rem",
              border: "2px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {food[selectedGenre].map((res) => (
            <li
              key={res.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "2px solid black",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
                background: "skyblue"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {res.name} </div>
              <div style={{ fontSize: "smaller" }}> {res.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
