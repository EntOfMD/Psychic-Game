'use strict';

//the main object holding everything
var block = {
    abc: [
        'z',
        'y',
        'x',
        'w',
        'v',
        'u',
        't',
        's',
        'r',
        'q',
        'p',
        'o',
        'n',
        'm',
        'l',
        'k',
        'j',
        'i',
        'h',
        'g',
        'f',
        'e',
        'd',
        'c',
        'b',
        'a'
    ],

    score: {
        wins: 0,
        losses: 0,
        guesses_left: 10,
        userGuesses: [],
        compGens: []
    },
    DOMs: {
        wins_ui: document.getElementById('wins-ui'),
        losses_ui: document.getElementById('losses-ui'),
        guesses_rem: document.getElementById('guess_rem'),
        user_tried: document.getElementById('user-guesses'),
        snow_btn: document.getElementById('snow-btn')
    },

    compGenGuess: () => {
        var randomGen = block.abc[
            Math.floor(Math.random() * block.abc.length)
        ].toLowerCase();
        block.score.compGens.push(randomGen);
        console.log(
            `time: ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()} Computer Generated: ${randomGen}`
        );
    },

    reWriteStats: () => {
        block.DOMs.wins_ui.innerText = block.score.wins;
        block.DOMs.losses_ui.innerText = block.score.losses;
        block.DOMs.guesses_rem.innerText = block.score.guesses_left;
        block.DOMs.user_tried.innerText = `${block.score.userGuesses}`;
    },

    resetScore: () => {
        block.score.wins = 0;
        block.score.losses = 0;
        block.score.guesses_left = 0;
        block.score.userGuesses = [];
    },

    userGuessToDOM: () => {
        block.score.userGuesses.map(guesses => {
            block.DOMs.user_tried.innerText = block.score.userGuesses;
        });
    }
};

block.compGenGuess();
block.reWriteStats();

document.onkeyup = event => {
    var userInput = event.key.toLowerCase();
    block.userGuessToDOM();
    var specialChar = block.abc.includes(userInput); //this returns true or false.
    //this checks whether if the userInput is a special character or not
    if (!specialChar) {
        console.log(
            `you pressed ${userInput}, please type only alphabet letters`
        );
    } else {
        block.score.userGuesses.push(userInput);
    }
    console.log(block.score.userGuesses);

    //do this if condition is true
    while (block.score.userGuesses <= block.score.guesses_left) {
        if (userInput == block.score.compGens) {
            block.compGenGuess();
            console.log('true');
        }
    }
    //do this if the condition is false

    // return userInput;
};
