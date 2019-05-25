// Create an array for the entire alphabet
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Next couple of lines come from the RPS game solved code
document.onkeyup = function(event) {
    var userGuess = event.key;
    var computerGuess = computerChoices[alphabet.arr(alphabet.random() * alphabet.length)];
}

// These variables, which I found on stack make sense to me to store as reference moving forward
var wins = 0;
var losses = 0;
var left = 9;
var guesses = 9;
var guessesSoFar = [];
var psychicLetter; //?

// The psychic letter function runs everytime the correct userGuess is pressed by randomly generating from the array.


// Create a wins counter every time user clicks the correct key

// Create a losses counter every time user does not guess correctly within 9 key strokes

// Create a count down counter starting from 9, which goes down by 1 every time user strokes incorrect key

// Show on screen the different key strokes for a single "game" of 9 key strokes

