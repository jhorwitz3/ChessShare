import React from "react";
import './app.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import {useAuthState} from 'react-firebase-hooks/auth';
//import {useCollectionData} from 'react-firebase-hooks/firestore';

import {Game} from './game.js'

firebase.initializeApp({
  apiKey: "AIzaSyCieVGIAwBwgZAjuKNCKc_QmUw3MNuBQPI",
  authDomain: "chessshare-fefd8.firebaseapp.com",
  projectId: "chessshare-fefd8",
  storageBucket: "chessshare-fefd8.appspot.com",
  messagingSenderId: "5718812255",
  appId: "1:5718812255:web:20ddf816fa4765fcbd5dea",
  measurementId: "G-ZGVH7DY4ZC"
});

const auth = firebase.auth();
//const firestore = firebase.firestore();

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
                {user ? <Game/> : <SignIn/>}
                
            </section>
        </div>
    )
}

function SignIn() {

    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
  
    return (
      
        <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      
    )
  
  }
  
  function SignOut() {
    return auth.currentUser && (
      <button id="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
    )
  }
  