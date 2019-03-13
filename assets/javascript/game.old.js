"use strict";

const alpha = [
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
];
// const bravo = [
//   "z",
//   "y",
//   "x",
//   "w",
//   "v",
//   "u",
//   "t",
//   "s",
//   "r",
//   "q",
//   "p",
//   "o",
//   "n",
//   "m",
//   "l",
//   "k",
//   "j",
//   "i",
//   "h",
//   "g",
//   "f",
//   "e",
//   "d",
//   "c",
//   "b",
//   "a"
// ];

//object to keep score. access it by score.wins, score.losses, score.guesses_left
var score = {
  wins: 0,
  losses: 0,
  guesses_left: 10,
  userGuesses: []
};
//setting element IDs
var wins_ui = document.getElementById("wins-ui"),
  losses_ui = document.getElementById("losses-ui"),
  guesses_rem = document.getElementById("guess_rem"),
  user_tried = document.getElementById("user-guesses"),
  snow_btn = document.getElementById("snow-btn");

//main function to do everything... or should I go funception on it..? lol
const mainFunc = (input) => {
  var compGuess = alpha[Math.floor(Math.random() * alpha.length)].toLowerCase();
  snow_btn.innerHTML = compGuess;
  // score.guesses_left - score.userGuesses.length;

  if (
    score.userGuesses === "" ||
    (score.userGuesses[score.userGuesses.length - 1] != compGuess &&
      !score.guesses_left == 0)
  ) {
    score.guesses_left--;
    wins_ui.innerText = score.wins;
    losses_ui.innerText = score.losses;
    guesses_rem.innerText = score.guesses_left;
    user_tried.innerText = score.userGuesses;
  }

  console.log(
    `Computer Generated: ${compGuess} ${
      score.userGuesses[score.userGuesses.length - 1]
    } `
  );
};

//get's the keyboard event
document.onkeyup = (event) => {
  mainFunc();
  score.userGuesses.push(event.key);
  console.log(`User Guessed: ${score.userGuesses}`);
};

console.log(`wins: ${score.wins}
losses: ${score.losses}
guesses left: ${score.guesses_left}
User Guessed: ${score.userGuesses}
`);
