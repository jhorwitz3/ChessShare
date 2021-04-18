import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import red_dot from './imgs/red_dot.png';
/*
import black_pawn from './imgs/black_pawn.png';
import black_rook from './imgs/black_rook.png';
import black_knight from './imgs/black_knight.png';
import black_bishop from './imgs/black_bishop.png';
import black_queen from './imgs/black_queen.png';
import black_king from './imgs/black_king.png';

import white_pawn from './imgs/white_pawn.png';
import white_rook from './imgs/white_rook.png';
import white_knight from './imgs/white_knight.png';
import white_bishop from './imgs/white_bishop.png';
import white_queen from './imgs/white_queen.png';
import white_king from './imgs/white_king.png';
*/


const dark_color = "brown";
const light_color = "white";

/*
Props:
  col: current column
  row: current row
  src: image src 
  alt: description of image
  color: white or black
  on_start: pawn on starting square -> enables two square jump

class Pawn extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      col: props.col,
      row: props.row,
      src: props.src,
      alt: props.alt,
      color: props.color,
      on_start: true,

    }
  }
}
*/

/*
Props:
  rank: The column of the square
  file: the row of the square
  has_piece: display the piece
  piece: the piece
  is_piece_landing: true if a currently clicked piece can land on this square
  empty: square is empty
  src: the src image red dot to indicate piecelanding
  alt: the alt of the image
  color: square-color, brown or white
  onClick: the onClick function
  key: built-in React Component property
*/
class Square extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      col: props.col,
      row: props.row,
      piece: props.piece,
      has_piece: props.has_piece,
      is_piece_landing: props.is_piece_landing,
      empty: props.empty,
      src: red_dot,
      alt: "a piece can land on this square",
      color: null,
    }
  }

  is_light_color = () =>{
    if ((this.state.row%2===0 && this.state.col%2===0)
    || (this.state.row%2===1 && this.state.col%2===1)){
      return true;
    } else {
      return false;
    }
  }

  render(){
    let color;

    if (this.is_light_color()){
      color = light_color;
    } else {
      color = dark_color;
    }
    if (this.state.is_piece_landing){
      return(
        <button className={`col-${this.state.col}`} id={`row-${this.state.row}`} 
         style={{backgroundColor: color}}>
          <img src={this.state.src} alt={this.state.alt}/>
        </button>
        );
    } else if (this.state.has_piece){
      return(
        <button className={`col-${this.state.col}`} id={`row-${this.state.row}`} 
        style={{backgroundColor: color}}>
          {this.state.piece}
        </button>
        );
    } else {
      return (
        <button className={`col-${this.state.col}`} id={`row-${this.state.row}`} 
        style={{backgroundColor: color}}>
          {this.state.row + " " + this.state.col}
        </button>
        );
      }
    }
  }



class Game extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      move: 0,
      squares: Array(64).fill(null).map((square, index) =>{
        square = <Square row={index %8} col={Math.floor(index/8)} empty={true}
        has_piece={false} is_piece_landing={false}/>
        return square;
      }),
    }
  }

  renderSquare = (index) => {
    return (
      this.state.squares[index]
    );
    
  }
  render() {
    return (
      <div className="Game">
        <h1>ChessShare</h1>
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
      </div>
      </div>
    );
  } 
}

       
// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);