// create word bank
var wordBank = ['star wars', 'pulp fiction', 'mad max', 'king kong', 
                'alien', 'predator', 'halloween', 'jaws', 
                'lord of the rings', 'back to the future']

// choose word randomly

var mystoMovie = wordBank[Math.floor(Math.random() * wordBank.length)]; console.log(mystoMovie)



var wins = 0;
var guessesLeft = 6;
var pastGuess = [];
 
// create blanks based on word length

var underScore = [];

function createWordBlanks() {
    for(var i = 0; i < mystoMovie.length; i++) {
        underScore.push('_');
    } return underScore;
}
console.log(createWordBlanks());

// check user guess 

document.onkeyup = function(event) {
    
    var userLetterGuess = event.key.toLowerCase();

// check if guess is right
    
    if(mystoMovie.indexOf(userLetterGuess) > -1) {
        
        pastGuess.push(userLetterGuess);
    // for (var i = 0; i < x; i++) {}
        
        for (var i = 0; i < mystoMovie.length; i++){
            var correctLetter = mystoMovie[i];

            if (correctLetter === userLetterGuess) {
            // replace blank with correct letter

                underScore[i] = userLetterGuess;
                console.log(underScore);
            }

        }
        if( underScore.join('') === mystoMovie) {
            
            wins++;
            guessesLeft = 6;
            pastGuess = [];
            mystoMovie = wordBank[Math.floor(Math.random() * wordBank.length)]; console.log(mystoMovie)
            underScore = [];
            createWordBlanks();

        }
    }
    
    else {
        pastGuess.push(userLetterGuess)
        guessesLeft--;
    }

    if (guessesLeft === 0) {
        guessesLeft = 6;
        pastGuess = [];
        mystoMovie = wordBank[Math.floor(Math.random() * wordBank.length)]; console.log(mystoMovie)
        underScore = [];
        createWordBlanks();
    }
    
    var html = 
    '<h1>Hangman Movies Edition</h1>' +
    
    "<h3>Press any key to get started</h3>" +
    "<h3>Wins " + wins + "</h3>" +
    "<h3>Current Word " + underScore + "</h3>" +
    "<h3>Guesses Remaining " + guessesLeft + "</h3>" +
    "<h3>Letters Already Guesses " + pastGuess.join() + '</h3>';
    
    document.getElementById("hGame").innerHTML = html;
    
    
    
   
    
}
