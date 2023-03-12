import React, { Component } from 'react'
import { useState } from 'react';

let turn = 0;

export default class App extends Component {
  render() {


    return (
      <React.StrictMode>
      <Board />
      </React.StrictMode>
    );
  }
}


function Board(){

  //value of the square, 0 is nothing, 1 is O, 2 is X
  let squareValues = ["_","_","_","_","_","_","_","_","_",];

  return(
    <>
      <div className="board-row">
        <Square startingState = {squareValues[0]}/>
        <Square startingState = {squareValues[1]}/>
        <Square startingState = {squareValues[2]}/>
      </div>
      <div className="board-row">
        <Square startingState = {squareValues[3]}/>
        <Square startingState = {squareValues[4]}/>
        <Square startingState = {squareValues[5]}/>
      </div>
      <div className="board-row">
        <Square startingState = {squareValues[6]}/>
        <Square startingState = {squareValues[7]}/>
        <Square startingState = {squareValues[8]}/>
      </div>
    </>
  );
}

function Square(startingState){

  const [state, setState] = useState(() => startingState);

  function turnHandler(){
    if(turn === 0){
      setState("O");
      turn = 1;
    } else {
      setState("X");
      turn = 0;
    }
  }

  return <button className = "square" onClick={turnHandler}>{state}</button>
}




