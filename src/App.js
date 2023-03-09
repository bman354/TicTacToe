import React, { Component } from 'react'
import Board from './Board';
import { checkForWin } from './Square';

export default class App extends Component {
  render() {

    checkForWin();

    return (
      <React.StrictMode>
      <Board />
      </React.StrictMode>
    );
  }
}

