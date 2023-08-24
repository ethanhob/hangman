# Hangman

This was a fun project and was my first real exploration into components and passing props between components. This is super useful and is present in all of react basically. 

I need more practice but this was a fun first project

# Gameplay
A word is selected from random in a hardcoded array and the user has 6 tries to get it right, otherwise a gameover box showing the correct word appears.

# Structure
A stick figure svg is split into 6 parts. When the user enters a letter it is checked against the letters in the word itself.

If the letter is correct it is displayed as part of the word at the bottom of the screen. 

If the letter is wrong then one of the 6 parts of the stick figure is displayed on screen and a div is created showing wrong letters. 

If there are six wrong letters the game over box appears

# Limitations
Relies on a hard coded array - need to look at integrating an API to randomly generate a word. 


