import React, { useState } from "react";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieBox = ({ title, poster_path, vote_average, overview }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="movie-card">
      <img className="img-card" src={API_IMG + poster_path} alt="" />
      <button className="button" onClick={openModal}>
        View More
      </button>

      {isOpen && (
        <>
          <div className="overplay">
            <h1> {title}</h1>
          </div>
          <div className="modal">
            <header className="modal_header">
              <p>{overview}</p>
              <h3> IMDb: {vote_average}</h3>
            </header>
            <main className="modal_main">
              <button onClick={closeModal} className="close-button">
                &times;
              </button>
            </main>
          </div>
        </>
      )}
    </div>
  );
};
export default MovieBox;
