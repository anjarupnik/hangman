import React, { PureComponent } from 'react'

class Game extends PureComponent {
  render () {
    var word = "hangman"
    var letters = word.split("")
    var dashes = letters.map(letter =>  "_ " )

    return (
      <h1>{[...dashes]}</h1>
    )
  }
}

export default Game
