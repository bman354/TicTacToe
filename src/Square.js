import React, { useState } from "react";

let turn = 0;

export function Square(){
  const [state, setState] = useState("_");

  return <button onClick={() => useState(whosTurn())}>{state}</button>
}

  //figure out who's turn it is based on the value of turn, 0 is O's 1 is X's
  function whosTurn() {
    let turnValue;
    
    if (turn === 0){
        turn = 1;
        turnValue = "O";
    } else {
        turn = 0;
        turnValue = "X";
    }

    return turnValue;
  }

  export function checkForWin(){
    
  }

 