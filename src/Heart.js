import React from 'react';

// define constants for filled and empty heart symbols
export const filledHeart = '★';
export const emptyHeart = '☆';

// heart component: render the filled or empty heart symbol based on the filled prop
export const Heart = ({ filled, onClick, color = 'black' }) => {
  return (
    <span onClick={onClick} style={{ cursor: 'pointer', color }}>
      {filled ? filledHeart : emptyHeart}
    </span>
  )
}
