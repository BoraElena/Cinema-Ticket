import "./Ticket.css";
import React, { useState } from "react";
import clsx from "clsx";

const movies = [
  {
    name: "Batman",
    price: 10,
    occupied: [20, 21, 30, 1, 2, 8],
  },
  {
    name: "Dr Strange",
    price: 12,
    occupied: [9, 35, 11, 65, 26],
  },
  {
    name: "Morbius",
    price: 8,
    occupied: [37, 44, 13, 2, 3],
  },
  {
    name: "Fantastic Beast",
    price: 9,
    occupied: [10, 12, 33, 28, 47],
  },
  {
    name: "Thor",
    price: 10,
    occupied: [11, 50, 23, 72, 72],
  },
  {
    name: "Viking",
    price: 10,
    occupied: [3, 13, 70],
  },
];

const seats = Array.from({ length: 8 * 10 }, (_, i) => i);

export default function Ticket() {
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  return (
    <div className="Ticket">
      <Movies
        movie={selectedMovie}
        onChange={(movie) => {
          setSelectedSeats([]);
          setSelectedMovie(movie);
        }}
      />

      <Cinema
        movie={selectedMovie}
        selectedSeats={selectedSeats}
        onSelectedSeatsChange={(selectedSeats) =>
          setSelectedSeats(selectedSeats)
        }
      />

      <p className="info">
        You have selected <span className="count">{selectedSeats.length}</span>{" "}
        seats for the price of{" "}
        
        <span className="total">
          {selectedSeats.length * selectedMovie.price}$
          <br></br>
           <button type="submit" className="btn-ticket" >
              Get the tickets!
            </button>
        </span>
         
      </p>
      
    </div>
  );
}

function Movies({ movie, onChange }) {
  return (
    <div className="Movies">
      <label htmlFor="movie">Pick a movie</label>
      <select
        id="movie"
        value={movie.name}
        onChange={(e) => {
          onChange(movies.find((movie) => movie.name === e.target.value));
        }}
      >
        {movies.map((movie) => (
          <option key={movie.name} value={movie.name}>
            {movie.name} (${movie.price})
          </option>
        ))}
      </select>
    </div>
  );
}

function Cinema({ movie, selectedSeats, onSelectedSeatsChange }) {
  function handleSelectedState(seat) {
    const isSelected = selectedSeats.includes(seat);
    if (isSelected) {
      onSelectedSeatsChange(
        selectedSeats.filter((selectedSeat) => selectedSeat !== seat)
      );
    } else {
      onSelectedSeatsChange([...selectedSeats, seat]);
    }
  }

  return (
    <div className="Cinema">
      <div className="screen" />

      <div className="seats">
        {seats.map((seat) => {
          const isSelected = selectedSeats.includes(seat);
          const isOccupied = movie.occupied.includes(seat);
          return (
            <span
              tabIndex="0"
              key={seat}
              className={clsx(
                "seat",
                isSelected && "selected",
                isOccupied && "occupied"
              )}
              onClick={isOccupied ? null : () => handleSelectedState(seat)}
              onKeyPress={
                isOccupied
                  ? null
                  : (e) => {
                      if (e.key === "Enter") {
                        handleSelectedState(seat);
                      }
                    }
              }
            />
          );
        })}
      </div>
    </div>
  );
}