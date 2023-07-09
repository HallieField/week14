import React from 'react';
import ReviewForm from './ReviewForm';
import Review from './Review';

// ReviewFormModal component
const ReviewFormModal = ({ onClose, reviews, setReviews }) => {

  // function to submit a review
  const submitReview = (reviewText, numberOfHearts) => {
    // create a copy of the reviews array
    let newReviews = [...reviews];
    // add the new review to the copied array
    newReviews.push({ text: reviewText, hearts: numberOfHearts });
    // update the reviews state with the new array
    setReviews(newReviews);
  }

  // function to render the reviews
  const renderReviews = () => {
    let output = [];

    // loop through the reviews array
    for (let i = 0; i < reviews.length; i += 1) {
      // create a Review component with the current review and add it to the output array
      output.push(<Review review={reviews[i]} />)
    }

    // return the array of Review components
    return output;
  }

  // function to handle the close button click
  const handleClose = () => {
    // call the onClose function passed as a prop
    onClose();
  };

  // render the ReviewFormModal component
  return (
    <div className='review-modal'>
      <dialog className="p-4" style={{ width: '400px' }} open>
        {/* render the ReviewForm component and pass the submitReview function as a prop */}
        <ReviewForm onSubmit={submitReview} />
        {/* render the Close button and attach the handleClose function to its onClick event */}
        <button className="close-btn mt-2 mb-4" onClick={handleClose}>Close</button>
        <br/>
        {/* render the reviews using the renderReviews function */}
        {renderReviews()}
      </dialog>
    </div>
  );
};

export default ReviewFormModal;

