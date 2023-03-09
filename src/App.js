import React, { Component } from 'react'

export default class App extends Component {
  render() {


    return (
      <React.StrictMode>
      <Board />
      </React.StrictMode>
    );
  }
}

let squareValues = [0,0,0,0,0,0,0,0,0];


function Board(){
  return(
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

function Square(){
  return <button className = "square">_</button>
}




