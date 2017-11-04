import React, { PureComponent } from 'react'
import Title from './Title'
import StartButton from './StartButton'
import './Hangman.css'
import AddLetter from './AddLetter'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Man from '../images/man.jpg'
import Man1 from '../images/man1.jpg'
import Man2 from '../images/man2.jpg'
import Man3 from '../images/man3.jpg'
import Man4 from '../images/man4.jpg'

class Hangman extends PureComponent {
  render() {
    function refreshPage(){
    window.location.reload();
  }

    return (
      <div>
        <header>
          <Title />
        </header>

        <main>
          { this.props.letter[1] > 1 && this.props.letter[1] > 6 ? <img className="man1" alt="hangman" src={Man1} /> : null }
          { this.props.letter[1] > 2 && this.props.letter[1] > 6 ? <img className="man2" alt="hangman" src={Man2} /> : null }
          { this.props.letter[1] > 3 && this.props.letter[1] > 6 ? <img className="man3" alt="hangman" src={Man3} /> : null }
          { this.props.letter[1] > 4 && this.props.letter[1] > 6 ? <img className="man4 "alt="hangman" src={Man4} /> : null }
          { this.props.letter[1] === 5 && this.props.letter[1] > 6 ? <img className="man" alt="hangman" src={Man} /> : null }
          <h1 className="word">{ this.props.letter[0] }</h1>
          <StartButton />
          {this.props.letter[1] > 0 &&
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
