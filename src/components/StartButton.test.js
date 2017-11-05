import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { StartButton } from './StartButton'
import AddLetter from './AddLetter'
import  addLetter  from '../actions'

chai.use(chaiEnzyme())

describe('<StartButton />', () => {
  const button = shallow(<StartButton />)

  it('has text start"', () => {
    expect(button).to.have.text('Start')
  })

  it('it has class name start', () => {
    expect(button).to.have.className('start')
  })
})
