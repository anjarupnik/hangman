import React, { PureComponent } from 'react'
import './StartButton.css'
import  addLetter  from '../actions'
import { connect } from 'react-redux'
import AddLetter from './AddLetter'

class StartButton extends PureComponent {
  render() {
      if (this.props.hide) { return <AddLetter /> }

    return (
      <button className="start" onClick= { this.props.addLetter }>
        Start
      </button>
    )
  }
}

const mapStateToProps = ({ letter }) => ({
  hide: letter.length > 0,
})

export default connect((mapStateToProps), { addLetter })(StartButton)
