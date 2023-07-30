import React, { useEffect } from 'react';
import {checkWin} from '../helpers/helper'

const FinalMessage = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain}) => {
    // if you are going to use useEffect the function needs to start with a capital
 let gameMessage = '';
 let gameMessageRevealWord = '';
 let playable= true

 if( checkWin(correctLetters, wrongLetters, selectedWord) === "win"){
   gameMessage = 'Well done, you won good job';
   playable = false;
 }else if(checkWin(correctLetters, wrongLetters, selectedWord) === "lose"){
    gameMessage = `You lose`;
    gameMessageRevealWord = `The word was: ${selectedWord}`;
    playable = false;
  } 
//   dont need to add an else because we are letting playable = true to begin with. 

useEffect(() => setPlayable(playable));

// const playAgain=() =>{
//     // setPlayable(true);
//     // setCorrectLetters([]);
//     // setWrongLetters([]);
//     // const random = Math.floor(Math.random() * words.length);
//     // selectedWord = words[random];
//     // window.location.reload();

// }
  return (
    <div>
       <div className="popup-container" style={gameMessage !== '' ? {display:'flex'}: {}}>
        {/* the shortcut if statement must always have the then and else */}
      <div className="popup">
        <h2>{gameMessage}</h2>
        <h3>{gameMessageRevealWord}</h3>
        <button onClick={playAgain} >Play Again</button>
      </div>
    </div>
    </div>
  )
}

export default FinalMessage
