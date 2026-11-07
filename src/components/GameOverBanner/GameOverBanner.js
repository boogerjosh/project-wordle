import React from 'react';

function GameOverBanner({ isWon, numGuesses, answer, handleRestart }) {
  if (isWon) {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>
            {numGuesses === 1 ? '1 guess' : `${numGuesses} guesses`}
          </strong>.
        </p>
        {handleRestart && (
          <button className="restart-btn" onClick={handleRestart}>
            Restart game
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      {handleRestart && (
        <button className="restart-btn" onClick={handleRestart}>
          Restart game
        </button>
      )}
    </div>
  );
}

export default GameOverBanner;
