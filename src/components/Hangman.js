import React, { PureComponent } from 'react'
import Title from './Title'
import StartButton from './StartButton'
import './Hangman.css'
import Game from './Game'

class Hangman extends PureComponent {
  render() {
    return (
      <div>
        <header>
          <Title />
        </header>

        <main>
          <Game />
        </main>
      </div>
    )
  }
}

export default Hangman
