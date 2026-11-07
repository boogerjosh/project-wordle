import React from 'react';
import { checkGuess } from '../../game-helpers';

const KEYBOARD_ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

function getLetterStatuses(guesses, answer) {
  const statusMap = {};

  guesses.forEach((guess) => {
    const validated = checkGuess(guess, answer);
    if (!validated) {
      return;
    }

    validated.forEach(({ letter, status }) => {
      const currentStatus = statusMap[letter];

      if (status === 'correct') {
        statusMap[letter] = 'correct';
      } else if (status === 'misplaced') {
        if (currentStatus !== 'correct') {
          statusMap[letter] = 'misplaced';
        }
      } else if (status === 'incorrect') {
        if (currentStatus !== 'correct' && currentStatus !== 'misplaced') {
          statusMap[letter] = 'incorrect';
        }
      }
    });
  });

  return statusMap;
}

function Keyboard({ guesses, answer }) {
  const letterStatuses = getLetterStatuses(guesses, answer);

  return (
    <div className="keyboard">
      {KEYBOARD_ROWS.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.map((letter) => {
            const status = letterStatuses[letter];
            const className = status
              ? `keyboard-key ${status}`
              : 'keyboard-key';

            return (
              <div key={letter} className={className}>
                {letter}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
