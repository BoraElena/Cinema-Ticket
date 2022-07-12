import React, { useState, useEffect } from "react";
import "./Movies.css";
import MovieBox from "./MovieBox";

const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=0a697b8dc2b3834e0cbb2c18302640d7";

export default function Movie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return (
    <div className="movie">
      <div className="container">
        {movies.map((movieReq) => (
          <MovieBox key={movieReq.id} {...movieReq} />
        ))}
      </div>
    </div>
  );
}
