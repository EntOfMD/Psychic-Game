//hardcore
"use strict";

//the main object holding everything
var block = {
  abc: [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ],

  score: {
    wins: 0,
    losses: 0,
    guesses_left: 10,
    userGuesses: []
  },
  DOMs: {
    wins_ui: document.getElementById("wins-ui"),
    losses_ui: document.getElementById("losses-ui"),
    guesses_rem: document.getElementById("guess_rem"),
    user_tried: document.getElementById("user-guesses"),
    snow_btn: document.getElementById("snow-btn")
  },

  reWriteStats: () => {
    wins_ui.innerText = score.wins;
    losses_ui.innerText = score.losses;
    guesses_rem.innerText = score.guesses_left;
    user_tried.innerText = score.userGuesses;
  }
};
