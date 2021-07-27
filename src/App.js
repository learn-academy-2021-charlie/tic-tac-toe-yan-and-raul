import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

//index for the board [0-8]
// horzinatal index =[0,1,2], [3,4,5], [6,7,8]
//vertical index = [0,3,6], [1,4,7], [2,5,8]
//diaginal index = [0,4,8], [2,4,6]
//winner array = above index

// xArray and yArray
// index 
// 

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      turn: "X",
      board = new Array(9).fill(null),
    }
  }

  findWinner() { 
    const winner = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    for(let i = 0; i < 3; i++){
      if 
    }
  }

  nextTurn() {
    this.turn = this.turn === "X"? "O" : "X"
  }

  isInProgress() {
    return !this.findWinner() && this.board.includes(null);
    
  }

  render(){
    return(
      <>
        <h1>Tic Tac Toe</h1>
        <Square />
      </>
    )
  }
}
export default App
