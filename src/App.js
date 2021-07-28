import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'
import logo from './logo.png'

// 1. JavaScript(Logic/constructor) 
// 2. HTML(Render()from parent to child,pass props)-->debug within browser/console 
// 3. CSS(App.css)

// Logic for this game:
// For winner, should be [3 same board value/either"X"or "O""] in [the combination array/3 index in one line]

// Highlight: In JavaScript, a truthy value is a value that is considered true. 
// All values are truthy unless they are defined as falsy.(i.e. except for false,0,-0,0n,"",null,undefined,and NaN).
// "X" or "O"-->Truthy
// null-->Falsy

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      turn: "X",// Start either "X" or "O", we choose default value: "X"
      board: [null, null, null, null, null, null, null, null, null],
      // 9-->3*3 board,default value: null(empty board)  new Array(9).fill(null)
      winnerCombinations: [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]],
      // - horzinatal index =[0,1,2], [3,4,5], [6,7,8]
      // - vertical index = [0,3,6], [1,4,7], [2,5,8]
      // - diaginal index = [0,4,8], [2,4,6] 
    }
  }

  // Set up method to switch-->nextTurn()
  nextTurn() {
    this.turn = this.turn === "X"? "O" : "X"//If the current turn is X-->then O; if the current turn is O, then X
  }

  // Set up method to loop throgh the winner array-->findWinnder()
  findWinner() { 
    for(const combination of this.state.winnerCombinations){
      const[a , b, c] = combination
      // The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, 
      // or properties from objects, into distinct variables. 
      
      if(this.state.board[a] && (this.state.board[a] === this.state.board[b] && this.state.board[a] === this.state.board[c]))
        //Only three value: null/"X"/"O"
        // board[a] = "X" , find a->b = "X", find a->c = "X"-->3 "X"--->Winner
        // The same thing with "O"---> 3 "O"-->Winner
        {
          return combination
        }
      return null;
    }
  }
  
  // Set up method to check NOT the situations: findWinner/if the board run out space
  isInProgress() {
    return !this.findWinner() && this.state.board.includes(null);
    
  }

  // Set up method to play-->makeMove()
  // e.g.makeMove[0]->null->"X", makeMove[6]-->null->"O", so, board = ["X",null,null,null,null, null,"O",null,null]
  makeMove = (index) =>{
    if(!this.isInProgress()){
      return
      // We need to make sure the game is not over. 
    }else if(this.state.board[index]){
      return
      // We need to make sure the current move to empty space
      // this.board[index]=true-->there is "X" or "O" already, so return/cancel this move
    }else{
      this.setState({board:this.turn})//logic here:this.state.board[index] = this.state.turn
      if(!this.findWinner()){
        this.nextTurn()
      }
    }
  }
  
  render(){
    return(
      <>
        <img src={logo} alt = "tictactoe" className = "logo"/>
        <h1>Tic Tac Toe</h1>
        <h2>Tic-tac-toe, noughts and crosses, or Xs and Os/“X’y O’sies”, </h2>
        <h2>is a paper-and-pencil game for two players, X and O, </h2>
        <h2>who take turns marking the spaces in a 3×3 grid. </h2>
        <h2>The player who succeeds in placing three of their marks</h2> 
        <h2>in a diagonal, horizontal, or vertical row is the winner.</h2>
        <button onClick = {this.restartGame}>Restart</button>
        <div id = "gameboard">
        {this.state.board.map((value,index) =>{
          return(
            <Square
            value = {value}
            key = {index}
            index = {index}        
            makeMove = {this.makeMove}
            />
          )
          })}
        </div>
        <footer>Coded by Yan and Raul</footer>
      </>
    )
  }
}
export default App
