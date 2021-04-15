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
*/
class Square extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      rank: props.rank,
      file: props.file,
      img: props.img,
      src: props.src,
      alt: props.alt,
      color: props.color,
    }
  }

  render(){
    if (this.state.img){
      return(
        <button className={`rank-${this.state.rank}`} id={`file-${this.state.file}`} 
        onClick={this.onClick} style={{backgroundColor: this.state.color}}>
          <img src={this.state.src} alt={this.state.alt}/>
        </button>
        );
    } else{
      return(
        <button className={`rank-${this.state.rank}`} id={`file-${this.state.file}`} 
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

  makeBoardRow = (rank) => {
      let row = [];
      let even_ranks = ["a", "c", "e", "g"];
      let odd_ranks = ["b", "d", "f", "h"];

      for (let j=0;j<8;j++){
        if ((j%2 !==0 && odd_ranks.includes(rank)) || (j%2===0 && even_ranks.includes(rank))){
          row.push(
            <Square file={j} rank={rank} img={false} color={"white"}/>
          )
        } else {
          row.push(
            <Square file={j} rank={rank} img={false} color={"brown"}/>
          )
        }
        
      }
      return row;
  } 
  

  render(){
    return(
      <div className="Game">
        <ul id="moves"> Moves
          <li key={1}>1.</li>
          <li key={2}>1.</li>
          <li key={3}>1.</li>
          <li key={4}>1.</li>
          <li key={5}>1.</li>
        </ul>
        <div className="board">
          <div className="rank-a">
            {this.makeBoardRow("a")}
          </div>
          <div className="rank-b">
            {this.makeBoardRow("b")}
          </div>
          <div className="rank-c">
            {this.makeBoardRow("c")}
          </div>
          <div className="rank-d">
            {this.makeBoardRow("d")}
          </div>
          <div className="rank-e">
            {this.makeBoardRow("e")}
          </div>
          <div className="rank-f">
            {this.makeBoardRow("f")}
          </div>
          <div className="rank-g">
            {this.makeBoardRow("g")}
          </div>
          <div className="rank-h">
            {this.makeBoardRow("h")}
          </div>
        </div>
        <h1>{this.state.move}</h1>
      </div>
    
    );
  }
}
       
// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);