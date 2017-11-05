import { expect } from 'chai'
import letter from './letter'
import { ADD_LETTER } from '../actions'

describe('letter reducer', () => {
  const reducer = letter
  const initialState = ""

  it('returns an empty array for the initial state', () => {
    expect(reducer()).to.eql(initialState)
  })

})
