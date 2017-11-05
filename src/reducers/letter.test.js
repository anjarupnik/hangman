import { expect } from 'chai'
import letter from './letter'
import { ADD_LETTER } from '../actions'

describe('letter reducer', () => {
  const reducer = letter
  const initialState = ""

  it('returns an empty array for the initial state', () => {
    expect(reducer()).to.eql(initialState)
  })

  it('takes letter and give back array', () => {
    const letter = "a"

    const seedAction = {
      type: ADD_LETTER,
      payload: letter
    }

    expect(reducer(initialState, seedAction)).to.not.eql(letter)
  })
})
