import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import Title from './Title'
import Hangman from '../images/hangman.jpg'
import Logo from '../images/logo.jpg'


chai.use(chaiEnzyme())

describe('<Title />', () => {
  const title = shallow(<Title />)

  it('is wrapped in a dvi', () => {
    expect(title).to.have.tagName('div')
  })

})
