import React from 'react';
import Game from './Game';
import gamesData from './data/games';

// GameList component
const GameList = () => {
  const rows = [];
  const cardsPerRow = 6;

  // split gamesData into rows with the specified number of cards per row
  for (let i = 0; i < gamesData.length; i += cardsPerRow) {
    const row = gamesData.slice(i, i + cardsPerRow);
    rows.push(row);
  }

  // loop to make sure cards are divided equally amgonst the rows
  if (gamesData.length % cardsPerRow !== 0) {
    const lastRow = rows[rows.length - 1];
    const remainingCards = cardsPerRow - lastRow.length;

    for (let i = 0; i < remainingCards; i++) {
      lastRow.push(null);
    }
  }

  // Render the GameList component
  return (
    <div className='card-container'>
      {/* map through the rows */}
      {rows.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {/* map through the games in each row */}
          {row.map((game, index) => (
            <div className="col-xxl-2 col-lg-4 col-md-6" key={index}>
              {/* render the Game component if the game is not null */}
              {game ? <Game game={game} /> : null}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameList;

