import React, { PureComponent } from 'react'
import Title from './Title'
import StartButton from './StartButton'
import './Hangman.css'
import AddLetter from './AddLetter'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Hangman extends PureComponent {

  render() {

    return (
      <div>
        <header>
          <Title />
        </header>

        <main>
         { this.props.letter }
          <AddLetter />
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ letter }) => ({ letter })
export default connect(mapStateToProps)(Hangman)
