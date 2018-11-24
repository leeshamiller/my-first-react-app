import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  render() {
    return (
      <div className="redBox">
      {this.props.letter}
      </div>
    );
  }
}

export default Header;