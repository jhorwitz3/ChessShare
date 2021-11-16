import React from "react";
import './app.css';
import { auth, firestore, SignIn, SignOut } from "./fireConfig";

import {useAuthState} from 'react-firebase-hooks/auth';
//import {useCollectionData} from 'react-firebase-hooks/firestore';

import Dashboard from './Dashboard.js'



/*If user signed in, show game, otherwise show SignIn 
{user ? <Game/> : <SignIn/>}
<SignOut/>*/

export function App(){
    const [user] = useAuthState(auth);
    return (
        <div className="app">
            <header className="app-header">
                <h1>ChessShare</h1>
                <SignOut/>
                
            </header>
            <section className="main-section">
                {/**user is null if not signed in */}
                {user ? <Dashboard firestore={firestore}/> : <SignIn/>}
                
            </section>
        </div>
    )
}


  