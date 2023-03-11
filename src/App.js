import React, { Component } from 'react'
import { useState } from 'react';


export default class App extends Component {
  render() {


    return (
      <React.StrictMode>
      <Board />
      </React.StrictMode>
    );
  }
}
//value of the square, 0 is nothing, 1 is O, 2 is X
let squareValues = [0,0,0,0,0,0,0,0,0];


function Board(){
  return(
    <>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
    </>
  );
}

function Square(){

  const [state, setState] = useState(null);

  function turnHandler(){
    console.log("test successful")
  }

  return <button className = "square" onClick={turnHandler}>{}</button>
}




