import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import red_dot from './imgs/red_dot.png';

// import black_pawn from './imgs/black_pawn.png';
// import black_rook from './imgs/black_rook.png';
// import black_knight from './imgs/black_knight.png';
// import black_bishop from './imgs/black_bishop.png';
// import black_queen from './imgs/black_queen.png';
// import black_king from './imgs/black_king.png';

// import white_pawn from './imgs/white_pawn.png';
// import white_rook from './imgs/white_rook.png';
// import white_knight from './imgs/white_knight.png';
// import white_bishop from './imgs/white_bishop.png';
// import white_queen from './imgs/white_queen.png';
// import white_king from './imgs/white_king.png';



const dark_color = "brown";
const light_color = "white";


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

function Square (props) {
  //Check for color of square
  let color;

  if ((props.row%2===0 && props.col%2===0)
    || (props.row%2===1 && props.col%2===1)){
    color = light_color;
  } else {
    color = dark_color;
  }
  
  if (props.is_piece_landing){
    return(
      <button className={`col-${props.col}`} id={`row-${props.row}`} 
       style={{backgroundColor: color}}>
        <img src={props.src} alt={props.alt}/>
      </button>
      );
  } else if (props.has_piece){
    return(
      <button className={`col-${props.col}`} id={`row-${props.row}`} 
      style={{backgroundColor: color}}>
        {props.piece}
      </button>
      );
  } else {
    return (
      <button className={`col-${props.col}`} id={`row-${props.row}`} 
      style={{backgroundColor: color}}>
        {props.row + " " + props.col}
      </button>
      );
    }
  }


class Game extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      move: 0,
      squares: Array(64).fill(null)
    }
  }

  resetBoard = () => {
    const squares = this.state.squares.slice();

    for (let i=1;i<63;i+=8){
      squares[i] = 'p';
    }
    this.setState({squares: squares})
    
  }


  renderSquare = (index) => {
    if (this.state.squares[index] === 'p') {
      return (
        <Square row={index %8} col={Math.floor(index/8)} has_piece={false}
        is_piece_landing={true} empty= {true} src={red_dot}/>
      );
    } else {
      return (
        <Square row={index %8} col={Math.floor(index/8)} has_piece={false}
        is_piece_landing={false} empty= {true}/>
      );
    }
    
    
  }
  render() {
    return (
      <div className="Game">
        <h1>ChessShare</h1>
        <button onClick={this.resetBoard}>Reset Board</button>
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