import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { WORDS } from '../../data';
import { sample } from '../../utils';

import GameOverBanner from '../GameOverBanner';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Keyboard from '../Keyboard';

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);

  // To make debugging easier, we'll log the solution in the console.
  React.useEffect(() => {
    console.info({ answer });
  }, [answer]);

  const isWon = guesses[guesses.length - 1] === answer;
  const isLost = !isWon && guesses.length >= NUM_OF_GUESSES_ALLOWED;
  const isGameOver = isWon || isLost;

  function handleSubmitGuess(guess) {
    if (isGameOver) {
      return;
    }

    console.info({ guess });
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);
  }

  function handleRestart() {
    let nextAnswer = sample(WORDS);
    while (WORDS.length > 1 && nextAnswer === answer) {
      nextAnswer = sample(WORDS);
    }
    setAnswer(nextAnswer);
    setGuesses([]);
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        disabled={isGameOver}
      />
      <Keyboard guesses={guesses} answer={answer} />
      {isGameOver && (
        <GameOverBanner
          isWon={isWon}
          numGuesses={guesses.length}
          answer={answer}
          handleRestart={handleRestart}
        />
      )}
    </>
  );
}

export default Game;
