import React, { PureComponent } from 'react'
import Title from './Title'
import StartButton from './StartButton'
import './Hangman.css'
import AddLetter from './AddLetter'

class Hangman extends PureComponent {
  render() {
    var word = "hangman"
    var letters = word.split("")
    var dashes = letters.map(letter =>  "_ " )

    return (
      <div>
        <header>
          <Title />
        </header>

        <main>
          <h1>{[...dashes]}</h1>
          <AddLetter />
        </main>
      </div>
    )
  }
}

export default Hangman
