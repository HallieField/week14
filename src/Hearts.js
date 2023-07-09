import React from 'react';
import { Heart } from './Heart';

// Hearts component: renders a Heart component for each rating value
const Hearts = ({ rating, onChange, color="black" }) => {
  return (
    <div>
      <Heart filled={rating >= 1} color={color} onClick={() => onChange(1)} />
      <Heart filled={rating >= 2} color={color} onClick={() => onChange(2)} />
      <Heart filled={rating >= 3} color={color} onClick={() => onChange(3)} />
      <Heart filled={rating >= 4} color={color} onClick={() => onChange(4)} />
      <Heart filled={rating >= 5} color={color} onClick={() => onChange(5)} />
    </div>
  )
};

export default Hearts;

