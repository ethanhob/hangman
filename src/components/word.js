import React from 'react'

const word = ({ selectedWord, correctLetters}) => {
  return (
    <div className="word" >
      {selectedWord.split('').map( (letter, i) => {
        return (
            <span className="letter" key={i}>
                {correctLetters.includes(letter) ? letter : ''}
            </span>
            // chooses the selected word and splits it up after every letter (shown by empty string)
            // we then map through taking the letters at every index and checking to see if correct letters includes the letter
            // if it does return letter if not return blank. 
            // needs to review the map function. 
            
        )
      })}
    </div>
  )
}

export default word
