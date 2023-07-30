import React, { useState, useEffect } from 'react';
import Header from'./components/header'
import Figure from './components/figure'
import WrongLetters from './components/wrongLetters'
import Word from './components/word'
import FinalMessage from './components/finalMessage'
import Notification from './components/notification'
import {showNotification as show} from './helpers/helper'
// if you have to name things the same this is a way around it
import './App.css'
import axios from 'axios';

// const words = ['application', 'wizard', 'programming', 'interface'];
const words = () => {
  axios.get(`https://random-word-api.vercel.app/api?words=1`)
}
// let selectedWord = words[Math.floor(Math.random() * words.length)];
let selectedWord = words;
function App() {
  // constants used need to be declared in the app itself. 
  const [playable, setPlayable] = useState(true);
const [correctLetters, setCorrectLetters] = useState([]);
const [wrongLetters, setWrongLetters] = useState([]);
const [showNotification, setShowNotification] = useState();
// an empty array is written as ([])

// use effect is anything that is a side effect of the app.
useEffect(()=> {
 const handleKeydown = event => {
  const {key, keyCode} = event;
  if (playable && keyCode >= 65 && keyCode <= 90){
    // 
    const letter = key.toLowerCase();

    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        setCorrectLetters(currentLetters => [...currentLetters, letter]);
        // if the word includes the letter chosen then if the correct letters array does not include the letter then add
        // it to the correct letters array
      } else {
        show(setShowNotification);
        // if correct letters already includes the letter then its the same as it being chosen twice and therefore it 
        // the error message appears. 
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        setWrongLetters(wrongLetters => [...wrongLetters, letter]);
        // if wrong letters do not include letter then set wrong letters to include the wrong letters before and the current letter
        

      } else {
        show(setShowNotification);
      }
    }
  }
}
window.addEventListener('keydown', handleKeydown);
return () => window.removeEventListener('keydown', handleKeydown)
// this removes an event listener every time so we dont  have a new event listener every time it rerenders
}, [correctLetters, wrongLetters, playable]);
// including the empty array ensures that it is only called once. you can set dependencies here which causes it to rerender everytime one of the depend
 
function playAgain() {
  setPlayable(true);
    setCorrectLetters([]);
    setWrongLetters([]);
    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
}
  return (
    <div className="App">
     <Header />
       <div className="game-container">
       <Figure wrongLetters={wrongLetters} />
     <WrongLetters wrongLetters={wrongLetters} />
     <Word selectedWord={selectedWord} correctLetters={correctLetters} />
     </div>
     {/* this is how props are passed into components */}
     <FinalMessage correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain}/>
     <Notification showNotification={showNotification}/>
    </div>
  );
}

export default App;
