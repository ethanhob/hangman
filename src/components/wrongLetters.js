import React from 'react'

const wrongLetters = ({wrongLetters}) => {
  return (
    <div className="wrong-letters-container">
        {wrongLetters.length > 0 && <p>Wrong Letters</p> }
        {/* if length of wrongLetters is greater than 0 then show wrong letters */}
        <div className="wrong-letter-input">{wrongLetters.map((letter, i) => <span key={i}>{letter}</span>)
        // map creates a new array that perfoms a function on every element inside the array
        .reduce((prev, curr) => prev === null ? [curr] : [prev, ',', curr], null)}</div>
        {/* adds a comma between every span.  */}
        {/* all the examples i see of reduce involves manipulating numbers, online says performs a reducer function.
        from my understanding reduce only returns one value. here we are saying that of the two values, if there is no previous then show current else show the second thing.
        This seems like a weird way to do it */}
    </div>
  )
}

export default wrongLetters
