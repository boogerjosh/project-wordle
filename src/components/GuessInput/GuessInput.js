import React from 'react';

function GuessInput({ handleSubmitGuess, disabled }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (disabled) {
      return;
    }
    if (tentativeGuess.length !== 5) {
      return;
    }

    handleSubmitGuess(tentativeGuess);
    setTentativeGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={tentativeGuess}
        onChange={(event) => {
          setTentativeGuess(event.target.value.toUpperCase());
        }}
        disabled={disabled}
        required
        pattern="[a-zA-Z]{5}"
        maxLength={5}
        title="5 letter word"
      />
    </form>
  );
}

export default GuessInput;
