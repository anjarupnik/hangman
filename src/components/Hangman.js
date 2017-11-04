import React, { PureComponent } from 'react'
import Title from './Title'
import StartButton from './StartButton'
import './Hangman.css'

class Hangman extends PureComponent {
  render() {
    return (
      <div>
        <header>
          <Title />
        </header>

        <main>
          <StartButton />
        </main>
      </div>
    )
  }
}

export default Hangman
