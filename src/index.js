import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import red_dot from './red_dot.png';

/*
Props:
  rank: The column of the square
  file: the row of the square
  img: display an image on square
  src: the image to display
  alt: the alt of the image
  onClick: the onClick function
  key: built-in React Component property
*/
class Square extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      col: props.col,
      row: props.row,
      img: props.img,
      src: props.src,
      alt: props.alt,
      color: props.color,
    }
  }

  render(){
    if (this.state.img){
      return(
        <button className={`col-${this.state.col}`} id={`row-${this.state.row}`} 
        onClick={this.onClick} style={{backgroundColor: this.state.color}}>
          <img src={this.state.src} alt={this.state.alt}/>
        </button>
        );
    } else{
      return(
        <button className={`col-${this.state.col}`} id={`row-${this.state.row}`} 
        onClick={this.onClick} style={{backgroundColor: this.state.color}}>
        </button>
        );
    }
  }

  onClick = () => {
    this.setState(
      {img: !this.state.img,
      src: red_dot,
      alt: "Red Dot"}
    )
  }
  
}

class Game extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      move: 0,
      history: [{
        squares: Array(64).fill(null),
    }],
    }
  }

  makeBoardRow = (col) => {
      let cols = [];
      
      for (let row=0;row<8;row++){
        if ((row%2 !==0 && col%2 !==0) || (row%2===0 && col%2===0)){
          cols.push(
            <Square row={row} col={col} img={false} color={"white"} key={row*10 + col}/>
          )
        } else {
          cols.push(
            <Square row={row} col={col} img={false} color={"brown"} key={row*10 + col}/>
          )
        }
        
      }
      return cols;
  } 
  

  render(){
    return(
      <div className="Game">
        <ul id="moves"> Moves
          <li key={1}>1. e4 e5</li>
          <li key={2}>2. Nc3 c5</li>
        </ul>
        <div className="board">
          <div className="col-0">
            {this.makeBoardRow(0)}
          </div>
          <div className="col-1">
            {this.makeBoardRow(1)}
          </div>
          <div className="col-2">
            {this.makeBoardRow(2)}
          </div>
          <div className="col-3">
            {this.makeBoardRow(3)}
          </div>
          <div className="col-4">
            {this.makeBoardRow(4)}
          </div>
          <div className="col-5">
            {this.makeBoardRow(5)}
          </div>
          <div className="col-6">
            {this.makeBoardRow(6)}
          </div>
          <div className="col-7">
            {this.makeBoardRow(7)}
          </div>
        </div>
        <h1>ChessShare</h1>
      </div>
    
    );
  }
}
       
// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);