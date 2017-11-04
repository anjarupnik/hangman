import React, { Component } from 'react';
import './App.css';
import Hangman from './components/Hangman'

class App extends Component {
  render() {
    return (
      <div>
         <Hangman />
      </div>
    );
  }
}

export default App;
