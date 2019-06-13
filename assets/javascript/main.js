//Letters array
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Default variables
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var usedLetters = [];

//Computer chooses random letter.
var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

//Displays the number of guesses remaining 
function guessCounter() {
	document.querySelector("#guessesLeft").innerHTML = "Remaining Guesses: " + (guessesLeft - 1);
};

//Refresh guess counter for continuous play
function guessCc() {
	document.querySelector("#guessesLeft").innerHTML = "Remaining Guesses: " + (guessesLeft);
};

//Displays letters that have been guessed
function guessHistory() {
	document.querySelector("#history").innerHTML = "History: " + usedLetters.join(' , ');
};

//Restarts the game with a new computer generated letter guess after a win or loss
var restart = function() {
    guessesLeft = 10;
    usedLetters = [];
    randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)]; 
};

//When a key is pushed down initiate event function
document.onkeydown = function(event) {

    //Determines which key is pressed
    var userGuess = event.key;

        //Prevents repeating of letter
        if (usedLetters.includes(userGuess)) {
            alert("You've already guessed this letter!");
            if (true) {
                return;
            };
        };

        //Pushes letter pressed to the usedLetters array
        usedLetters.push(userGuess);

        //Displays guess counter
        guessCounter();

        //Logs letter into history of guessed letters
        guessHistory();

        if (userGuess === randomLetter) {
            wins++;
            document.querySelector("#wins").innerHTML = "Wins: " + wins;
            restart();
            guessCc();
            guessHistory();
        }else {
            guessesLeft--;
        };

        if (guessesLeft === 0) {
            losses++;
            document.querySelector("#losses").innerHTML = "Losses: " + losses;
            restart();
            guessCc();
            guessHistory();
        };

                
    
};





