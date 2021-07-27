import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

// 1. JavaScript(Logic/constructor) 2. HTML(Render()) 3. CSS(App.css)

// 1. Logic for this game:
// - index for the board [0-8]
// - horzinatal index =[0,1,2], [3,4,5], [6,7,8]
// - vertical index = [0,3,6], [1,4,7], [2,5,8]
// - diaginal index = [0,4,8], [2,4,6]
// - winner array = above index
// - board--->an array used for record the value when a new game start. board[index]--->the user input


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      turn: "X",// Start either X or O, we choose default value: "X"
      board: [null, null, null, null, null, null, null, null, null],// 9-->3*3 board,default value: null(empty board)  new Array(9).fill(null)
    }
  }

  // Set up method to switch-->nextTurn()
  nextTurn() {
    this.turn = this.turn === "X"? "O" : "X"//If the current turn is X-->then O; if the current turn is O, then X
  }

  findWinner() { 
    const winner = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    for(let i = 0; i < 3; i++){
      
    }
  }

  // Set up method to play-->makeMove(), e.g.makeMove[0]->null->"X", makeMove[6]-->null->"O", so, board = ["X",null,null,null,null, null,"O",null,null]
  makeMove(index){
    //We need to protect the user click on the same location.
    //if this.board[index] has value->stop
    // In JavaScript, a truthy value is a value that is considered true. 
    // All values are truthy unless they are defined as falsy.(i.e. except for false,0,-0,0n,"",null,undefined,and NaN).
    if(this.board[index]){
      return;
    }//We need to make sure the game is not over.-->Winner array,we need loop through the winner array.




    this.board[index] = this.turn;
    this.nextTurn();

  }

  



 

  isInProgress() {
    return !this.findWinner() && this.board.includes(null);
    
  }

  render(){
    return(
      <>
        <h1>Tic Tac Toe</h1>
        <Square />
        {console.log(this.state.turn)}
        {console.log(this.state.board)}

      </>
    )
  }
}
export default App
