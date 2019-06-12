//Letters array
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Default variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var usedLetters = [];
var repeatLetters = null;

//Computer chooses random letter.
var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

//Displays the number of guesses remaining 
function guessCounter() {
	document.querySelector("#guessesLeft").innerHTML = "Remaining Guesses: " + guessesLeft;
};

//Displays letters that have been guessed
function guessHistory() {
	document.querySelector("#history").innerHTML = "History: " + usedLetters.join(', ');
};

//Restarts the game with a new computer generated letter guess after a win or loss
var restart = function() {
    guessesLeft = 9;
    usedLetters = [];
    randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)]; 
};

//When a key is pushed down
document.onkeydown = function(event) {

    //Determines which key is pressed
    var userGuess = event.key;

        //Pushes letter pressed to the usedLetters array
        usedLetters.push(userGuess);
            guessCounter();
            guessHistory();

                if (userGuess === randomLetter) {
                    wins++;
                    guessesLeft = 9;
                    document.querySelector("#wins").innerHTML = "Wins: " + wins;
                    restart();
                }else {
                    guessesLeft--;
                }
                if (guessesLeft === 0) {
                    losses++; 
                    guessesLeft = 9;
                    document.querySelector("#losses").innerHTML = "Losses: " + losses;
                    restart();
                };
    
};





