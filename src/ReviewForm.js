import React, { useState } from 'react';
import Hearts from './Hearts';

// ReviewForm component
const ReviewForm = ({ onSubmit }) => {

  const [reviewText, setReviewText] = useState('');
  const [numberOfHearts, setNumberOfHearts] = useState(2);

  // function to handle input change in the textarea
  const handleInputChange = (event) => {
    setReviewText(event.target.value);
  };

  // form submission function
  const handleSubmit = (event) => {
    event.preventDefault();

    // call the onSubmit function passed as a prop and pass the review text and number of hearts
    onSubmit(reviewText, numberOfHearts);
  };

  // Render the ReviewForm component: renders the textarea and attaches the handleInputChange to the onChange event. Also renders the hearts component for the rating
  // and passes the current number of hearts with the setNumberOfHearts function
  return (
    <form className='review-form'>
      <h3>Leave a Review:</h3>
      <textarea value={reviewText} onChange={handleInputChange} />
      <Hearts rating={numberOfHearts} onChange={setNumberOfHearts} />

      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default ReviewForm;