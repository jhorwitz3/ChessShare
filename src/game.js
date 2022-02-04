import React from 'react';

import './game.css';
import {getPiece, setupBoard, boardToString, dark_color, alt_dark_color,
        light_color, alt_light_color, piece_notations} from './jaredlib.js';
import { updateGame } from './fireConfig';
/*
Props:
  col: The column of the square
  row: the row of the square
  has_piece: display the piece
  piece: the piece img
  is_piece_landing: true if a currently clicked piece can land on this square
  empty: square is empty
  src: the src image red dot to indicate piecelanding
  alt: the alt of the image
  color: square-color, brown or white
  onClick: the onClick function
*/

function Square (props) {
  //Check for color of square
  let color;

  if ((props.row%2===0 && props.col%2===0)
    || (props.row%2===1 && props.col%2===1)){
    color = props.highlight ? alt_light_color: light_color;
  } else {
    color = props.highlight ? alt_dark_color: dark_color;
  }
  

  //NOTE: pass params from Game to Square (https://stackoverflow.com/questions/29810914/react-js-onclick-cant-pass-value-to-method)
  if (props.has_piece){
    return(
      <button className={`col-${props.col}`} id={"ignore-bs"} 
      style={{backgroundColor: color}} onClick={() => props.handleClick(props.index)}>
        <img src={props.piece} alt={props.alt} id='piece'/>
      </button>
      );
  } else {
    return (
      <button className={`col-${props.col}`} id={"ignore-bs"} 
      style={{backgroundColor: color}} onClick={() => props.handleClick(props.index)}>
      </button>
      );
    }
  }


class Board extends React.Component{
  renderSquare = (index) => {  
    //check if square should be highlighted because it was clicked
    let highlight;
    if (index === this.props.pendingDropIdx && this.props.pendingDrop){
      highlight = true;} else {highlight = false;}

    //check if current square holds a piece
    if (piece_notations.includes(this.props.squares[index])) {
      //getPiece imported from jaredlib!
      let {piece, alt} = getPiece(this.props.squares[index]);
      //return the square with the piece on it
      return (<Square row={index %8} col={Math.floor(index/8)} has_piece={true}
      is_piece_landing={false} index={index} piece={piece} alt={alt} highlight={highlight}
      handleClick={this.props.handleClick}/>);
    } 
    
    //otherwise return empty square
    else {
      return (<Square row={index %8} col={Math.floor(index/8)} has_piece={false}
                    is_piece_landing={false} index={index} highlight={highlight} 
                    handleClick={this.props.handleClick}/>);
    }          
  }

  render(){
    return (
    <div className="board">
      <div className="col-0" >
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
        </div>
        <div className="col-1">
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(14)}
          {this.renderSquare(15)}
        </div>
        <div className="col-2">
          {this.renderSquare(16)}
          {this.renderSquare(17)}
          {this.renderSquare(18)}
          {this.renderSquare(19)}
          {this.renderSquare(20)}
          {this.renderSquare(21)}
          {this.renderSquare(22)}
          {this.renderSquare(23)}
        </div>
        <div className="col-3" >
          {this.renderSquare(24)}
          {this.renderSquare(25)}
          {this.renderSquare(26)}
          {this.renderSquare(27)}
          {this.renderSquare(28)}
          {this.renderSquare(29)}
          {this.renderSquare(30)}
          {this.renderSquare(31)}
        </div>
        <div className="col-4" >
          {this.renderSquare(32)}
          {this.renderSquare(33)}
          {this.renderSquare(34)}
          {this.renderSquare(35)}
          {this.renderSquare(36)}
          {this.renderSquare(37)}
          {this.renderSquare(38)}
          {this.renderSquare(39)}
        </div>
        <div className="col-5">
          {this.renderSquare(40)}
          {this.renderSquare(41)}
          {this.renderSquare(42)}
          {this.renderSquare(43)}
          {this.renderSquare(44)}
          {this.renderSquare(45)}
          {this.renderSquare(46)}
          {this.renderSquare(47)}
        </div>
        <div className="col-6">
          {this.renderSquare(48)}
          {this.renderSquare(49)}
          {this.renderSquare(50)}
          {this.renderSquare(51)}
          {this.renderSquare(52)}
          {this.renderSquare(53)}
          {this.renderSquare(54)}
          {this.renderSquare(55)}
        </div>
        <div className="col-7">
          {this.renderSquare(56)}
          {this.renderSquare(57)}
          {this.renderSquare(58)}
          {this.renderSquare(59)}
          {this.renderSquare(60)}
          {this.renderSquare(61)}
          {this.renderSquare(62)}
          {this.renderSquare(63)}
        </div>
      </div> );
  }
}


export class Game extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      pendingDrop: false,
      pendingDropIdx: null,
      move: 0,
      history: (props.game == null) ? [setupBoard()] : [setupBoard(props.game)],
    }
  }

  //On click, flip boolean pendingDrop, update squares array
  handleClick = (index) => {
    const pendingDrop = this.state.pendingDrop;
    const squares = this.state.history[this.state.move].slice();
    const history = this.state.history.slice();
    let pendingDropIdx = this.state.pendingDropIdx;

    //if piece isn't pending drop (first click), preserve index to update later, highlight bg color
    if (!pendingDrop) {
      pendingDropIdx = index;
      this.setState({pendingDropIdx: pendingDropIdx});
    } 
    //otherwise, move the original piece to the new location
    else {
      //Set null first, then place piece so double-click doesn't delete piece
      let val = squares[pendingDropIdx];
      squares[pendingDropIdx] = null;
      squares[index] = val;
      history.push(squares);
      this.setState({move: this.state.move+1})
    }
    
    //update squares array to hold new values, pendingDrop flips
    // this.props.gameRef.update({"Board": boardToString(squares)});   //update db
    updateGame(this.props.id, boardToString(squares));
    this.setState({history: history});
    this.setState({pendingDrop: !pendingDrop}); 
  }

  //TODO: This works, but only for the game played through once. Need to rewrite history
  jumpTo(move){
    const history = this.state.history.slice(0, move+1);
    this.setState({history: history});
    this.setState({move: move});
    this.setState({pendingDrop: false});

    
  }
  

  render() {
    const history = this.state.history;
    const moves = history.map((step, move) => {
    const desc = move ? 'Move #' + move : 'Game start';
    
      return (
      <li key={move}>
        <button onClick={() => this.jumpTo(move)}>{desc}</button>
      </li>
    );  
    });

    return (
      <div className="Game">
        <ul className="moves">{moves}</ul>
          {<Board squares={this.state.history[this.state.move]} pendingDrop={this.state.pendingDrop}
          pendingDropIdx={this.state.pendingDropIdx} handleClick={this.handleClick}/>}
      </div>
    );
  } 
}



