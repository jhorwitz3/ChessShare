import React from "react";
import {Game} from './game.js';

import { getGames, createNewGame } from "./fireConfig.js";
function BoardList(props) {
    return (
      <ul id="boardsList">
        {props.boards.map((board) => (
          <li key={board.id}>{<Game game={board.board_string} id={board.id}/>}</li>
        ))}
      </ul>
    );
  }
  
  

export class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            my_games: null,
            current_game: null,
            boards: [],
        }

    }

    createGame = () => {
        createNewGame().then((ref) => {
            this.setState({current_game: <Game gameRef={ref}/>})
        }
        );
        
    }

    getUserGames = () => {
        
        getGames().then((boards) => {
            this.setState({boards: boards})
        });
        
        // boards.forEach(el=>console.log(el));
        // this.setState({ boards: boards});

        // this.setState({update: !this.state.update});
    }

    render()
    {
        return (
                <div className="dashboard">
                    {this.state.current_game ? 
                    <div className="current_game">
                        <button className="current_game_backbutton" onClick={() => this.setState({current_game: null})}>Back</button>
                        {this.state.current_game}
                        
                    </div>: 
                    <div className="dash">
                        <div className="dash_header">
                            <button id="get_games_button" onClick={this.getUserGames}>Get Games</button>
                            <button id="newgame_button" onClick={this.createGame}>New Game</button>
                        </div>
                        <div className="boards">
                            <p>Boards</p>
                            <BoardList boards={this.state.boards}/>
                        </div>
                    </div>}
                </div>
        );
    }
}

export default Dashboard;