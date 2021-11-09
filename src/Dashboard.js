import React from "react";
import {Game} from './game.js';


export class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            my_games: null,
            current_game: null,
        }
    }

    createGame = () => {

        this.setState({current_game: <Game/>});
    }

    render()
    {
        return (
                <div className="current_game">
                    {this.state.current_game ? 
                    <div>
                        <button className="current_game_backbutton" onClick={() => this.setState({current_game: null})}>Back</button>
                        {this.state.current_game}
                    </div>: 
                    <button onClick={this.createGame}>New Game</button>}
                </div>
        );
    }
}

export default Dashboard;