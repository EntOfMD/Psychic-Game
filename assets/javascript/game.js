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
    compGens: [],
    gIndex: 0
  },
  DOMs: {
    wins_ui: document.getElementById('wins-ui'),
    losses_ui: document.getElementById('losses-ui'),
    guesses_rem: document.getElementById('guess_rem'),
    user_tried: document.getElementById('user-guesses'),
    snow_btn: document.getElementById('snow-btn'),
    extra: document.getElementById('extra_id')
  },

  compGenGuess: () => {
    let randomGen = block.abc[
      Math.floor(Math.random() * block.abc.length)
    ].toLowerCase();
    if (block.score.compGens[block.score.gIndex - 1] === randomGen) {
      randomGen = block.abc[
        Math.floor(Math.random() * block.abc.length)
      ].toLowerCase();
    }
    block.score.compGens.push(randomGen);
    block.score.gIndex++;
    console.log(
      `time: ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()} Computer Generated: ${randomGen}
            So far generated: ${block.score.compGens}`
    );
  },

  reWriteStats: () => {
    block.DOMs.wins_ui.innerText = block.score.wins;
    block.DOMs.losses_ui.innerText = block.score.losses;
    block.DOMs.guesses_rem.innerText = block.score.guesses_left;
    block.DOMs.user_tried.innerText = `${block.score.userGuesses}`;
  },

  resetScore: () => {
    block.score.guesses_left = 10;
    block.score.userGuesses = [];
    block.score.gIndex = 0;
  },

  userGuessToDOM: () => {
    block.score.userGuesses.map(() => {
      block.DOMs.user_tried.innerText = block.score.userGuesses;
    });
  }
};

block.compGenGuess();
block.reWriteStats();

document.onkeyup = event => {
  var userInput = event.key.toLowerCase();
  var specialChar = block.abc.includes(userInput); //this returns true or false, this checks whether if the userInput is a special character or not

  if (!specialChar) {
    // block.DOMs.extra.innerHTML = `you pressed ${userInput}, please type only alphabet letters`;
    console.log(`you pressed ${userInput}, please type only alphabet letters`);
    //do this if condition is true
  } else if (
    userInput === block.score.compGens[block.score.gIndex - 1] &&
    block.score.guesses_left > 0
  ) {
    block.score.wins += 1;
    block.score.guesses_left = 10;
    block.score.userGuesses = [];
    block.reWriteStats();
    console.log(`won ${block.score.wins} times`);
    block.compGenGuess();
  } else if (userInput != block.score.compGens[block.score.gIndex - 1]) {
    block.score.userGuesses.push(userInput);
    block.userGuessToDOM();
    block.score.guesses_left -= 1;
    block.reWriteStats();
    console.log(`wrong! ${block.score.guesses_left} more tries left`);
  }

  //GAME OVER

  if (block.score.guesses_left <= 0) {
    switch (
      confirm(
        `YOU'VE LOST! Your score is ${
          block.score.wins
        }. Would you like to continue?`
      )
    ) {
      case true:
        block.score.losses++;
        block.resetScore();
        block.reWriteStats();
        break;

      default:
        location.href =
          'https://memegenerator.net/img/instances/65155782/qq.jpg';
        break;
    }
  }
};
