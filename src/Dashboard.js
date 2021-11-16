import React, { useEffect } from "react";
import {Game} from './game.js';
import Button from "react-bootstrap/Button";
import { getGames, createNewGame } from "./fireConfig.js";

function MyGames(props){
    
    useEffect(()=>{
        getGames();
    }, []);
    

    return (<div>
      
    </div>)
    
}

export class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            my_games: null,
            current_game: null,
        }
    }

    createGame = () => {
        createNewGame();
        this.setState({current_game: <Game/>});
    }

    render()
    {
        return (
                <div className="dashboard">
                    {this.state.current_game ? 
                    <div className="current_game">
                        <button className="current_game_backbutton" onClick={() => this.setState({current_game: null})}>Back</button>
                        {this.state.current_game}
                        <MyGames firestore={this.props.firestore}/>
                    </div>: 
                    <Button id="newgame_button" onClick={this.createGame}>New Game</Button>}
                </div>
        );
    }
}

export default Dashboard;