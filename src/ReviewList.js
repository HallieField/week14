import React from 'react';
import Review from './Review';

// ReviewList component:  map through the reviews and render the Review component for each review
const ReviewList = ({ reviews }) => {
  return (
    <div>
      <h3>Reviews:</h3>
      {reviews.map((review, index) => (
        <Review key={index} review={review} />
      ))}
    </div>
  );
};

export default ReviewList;

