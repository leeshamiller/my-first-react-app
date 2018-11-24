import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Header.js';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      list: ['a', 'b', 'c', 'd', 'e', 'f', 'g']
    }
  }
  render() {
    var redBoxes = this.state.list.map(obj => {
      return <Header letter={obj}/>
    })
    return (
      <div className="App">
      {redBoxes}
      </div>
    );
  }
}

export default App;
