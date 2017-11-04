import { ADD_LETTER } from '../actions'

  const words = ['duck', 'window', 'watermelon', 'around', 'scientist', 'table', 'candle',
    'bottle', 'beer', 'ignore', 'random', 'juicy', 'rhythm', 'vodka', 'zombie'];
  var result = ""
  const guesses = []
  var word = words[Math.floor(Math.random() * words.length)]

  function wrongGuessCount(word, guesses) {
    const wrongGuesses = guesses.filter(letter => word.indexOf(letter) === -1)
    return wrongGuesses.length
    }

  function showGuess(word, guesses) {
    const letters = word.split("");
    const dashes = letters.map(letter => "_ ")

    for (var i=0; i < letters.length; i++ ) {
     guesses.map(function(guess) {
       if (guess === letters[i]) {dashes[i] = letters[i]};
       });
     }
      return dashes.join(" ");
    }

    function isWinner(word, guesses) {
      var result = showGuess(word, guesses).replace(/ /g,'');
      return result === word;
    }

    function next(word, guesses) {
      if (wrongGuessCount(word, guesses) === 5)
        return result = word
      if (isWinner(word, guesses)) return result = "You Won!!!!";
        result = showGuess(word, guesses) ;
    }

export default (state = result, { type, payload } = {}) => {
  switch(type) {
      case ADD_LETTER :
      guesses.push(payload)
      next(word, guesses)
      return [result, wrongGuessCount(word, guesses)]

    default :
      return state
  }
}
