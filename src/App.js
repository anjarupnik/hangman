import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'

class App extends Component {
  render() {
    return (
      <div>
      <header>
         <Title />
      </header>
      </div>
    );
  }
}

export default App;
