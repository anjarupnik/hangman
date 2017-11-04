import { ADD_LETTER } from '../actions'

export default (state = [], { type, payload } = {}) => {


  switch(type) {
      case ADD_LETTER :

      var word = "anja"
      function wrongGuessCount(word, guesses) {
        var wrongGuesses = guesses.filter(letter => word.indexOf(letter) == -1)
        return wrongGuesses.length
      }

      function showGuess(word, guesses) {
        var letters = word.split("");
        var dashes = letters.map(function(letter) {
         return "_";
       });

       for (var i=0; i < letters.length; i++ ) {
         guesses.map(function(guess) {
           if (guess == letters[i]) {dashes[i] = letters[i]};
         });
       }

        return dashes.join(" ");

      }

      function isWinner(word, guesses) {
        var result = showGuess(word, guesses).replace(/ /g,'');
        return result == word;
      }

      function next(word, guesses) {
        if (wrongGuessCount(word, guesses) > 5) return state = (word + "  Game over!!");
        if (isWinner(word, guesses)) return state = "You won!!!!";
          payload = showGuess(word, guesses);
      }

      next(word, [payload]);

      return [...payload, ...state]

    default :
      return state
  }
}
