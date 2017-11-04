import React, { PureComponent } from 'react'
import Title from './Title'
import StartButton from './StartButton'
import './Hangman.css'
import AddLetter from './AddLetter'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Man from '../images/man.jpg'
const miss = []

class Hangman extends PureComponent {
  render() {
    function refreshPage(){
    window.location.reload();
  }
  const over = this.props.letter.includes('-')

    return (
      <div>
        <header>
          <Title />
        </header>

        <main>
          { over ? <img className="man" alt="hangman" src={Man} /> : null }
          <h1 className="word">{ this.props.letter }</h1>
          <StartButton />
          {this.props.letter.length > 10 &&
              <button className="newgame" onClick={refreshPage}>
                New Game
              </button>
            }
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ letter }) => ({ letter })
export default connect(mapStateToProps)(Hangman)
