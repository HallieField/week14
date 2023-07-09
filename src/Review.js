import React from 'react';
import Hearts from './Hearts';

// Review component: render the Hearts component for displaying and passing the rating, empty onClick function, and color
const Review = ({ review }) => {
  console.log(review) 

  return (
    <div className="container bg-dark rounded mb-1 p-2 px-3">
      <span className="text-light review-text">{review.text}</span>
      <br/>
      <Hearts rating={review.hearts} onClick={() => {}} color="white" />
    </div>
  )
};

export default Review;
