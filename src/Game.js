import React, { useState } from 'react';
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import ReviewFormModal from './ReviewFormModal';

// Game component
const Game = ({ game }) => {
  const [reviews, setReviews] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // function to handle the "Review" button click
  const handleClick = () => {
    setShowModal(true);
  };

  // function to handle closing the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // render the Game component
  return (
    <div className="col-md-4 col-md-6 mb-4">
      <div className="card">
        {/* render the ReviewFormModal component only if showModal is true */}
        {showModal && <ReviewFormModal onClose={handleCloseModal} reviews={reviews} setReviews={setReviews} />}
        <img src={game.image} className="card-img-top" alt={game.title} />
        <div className="card-body">
          <h5 className="card-title">{game.title}</h5>
          <p className="card-text">{game.synopsis}</p>
          {/* render the "Review" button and attach the handleClick function to its onClick event */}
          <button className="btn btn-primary" onClick={handleClick}>
            Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default Game;

