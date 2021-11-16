import React from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import {newBoard_str} from './jaredlib';

export const fireApp = firebase.initializeApp({
    apiKey: "AIzaSyCieVGIAwBwgZAjuKNCKc_QmUw3MNuBQPI",
    authDomain: "chessshare-fefd8.firebaseapp.com",
    projectId: "chessshare-fefd8",
    storageBucket: "chessshare-fefd8.appspot.com",
    messagingSenderId: "5718812255",
    appId: "1:5718812255:web:20ddf816fa4765fcbd5dea",
    measurementId: "G-ZGVH7DY4ZC"
  });
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export function SignIn() {
    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
    return ( 
        <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>  
    )
  }
  
  export function SignOut() {
    return auth.currentUser && (
      <button id="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
    )
  }

  export const getGames = async() => {
    const games = firestore.collection('Games');
    const gameData = await games.get();
    let output = [];
    gameData.docs.forEach(item=>{
        if (auth.currentUser.uid === item.data().uid){
            output.push(item.data());
        }
        
    });
    console.log(auth.currentUser.uid);
    console.log(output);
  }

  export const createNewGame = async() => {
    const games = firestore.collection('Games');
    await games.add(
        {
            'Board': newBoard_str, 
            'uid': auth.currentUser.uid,
        });
  }