import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((index) => {
        const item = result ? result[index] : undefined;
        return (
          <span
            key={index}
            className={item ? `cell ${item.status}` : 'cell'}
          >
            {item ? item.letter : undefined}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
