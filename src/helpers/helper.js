export function showNotification(setter){
    setter(true);
    setTimeout(()=>{
        setter(false);
    },2000)
}

export function checkWin(correct, wrong, word){
    let status= "win";

    // check for win
    word.split('').forEach(letter => {
        if(!correct.includes(letter)){
            status = '';
        // takes the word, splits it down into each letter and then for each letter it checks it against the correct letters already selected. 
        // If there is a correct letter (users right guesses) that does not include a letter from word, still playing 
        
        // is null as the game is neither won or lost
        }
    })

    // check for lose
    if(wrong.length === 6){
        status= "lose";
    }
    return status;
}