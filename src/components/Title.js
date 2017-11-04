import React, { PureComponent } from 'react'
import Hangman from '../images/hangman.jpg'
import Logo from '../images/logo.jpg'
import './Title.css'

class Title extends PureComponent {
  render() {
    return (
      <div>
        <img className="logo" alt="hangmanlogo" src={ Logo } />
        <img className="hangman" alt="hangman" src={ Hangman } />
        <img className="logo2" alt="hangmanlogo" src={ Logo } />
      </div>
    )
  }
}

export default Title
