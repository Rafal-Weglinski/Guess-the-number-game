'use strict';
//Declare variables
const score = document.querySelector(`.score`);
const highscore = document.querySelector(`.highscore`);
const message = document.querySelector(`.message`);
const checkButton = document.querySelector(`.check`);
const againButton = document.querySelector(`.again`);
const numberSolution = document.querySelector(`.number`);
const guess = document.querySelector(`.guess`);
const body = document.querySelector(`body`);
let solution = Math.floor(Math.random() * 20 + 1);
let scorePoints = 20;
let highscorePoints = 0;

// Eventlistener for checking the input
checkButton.addEventListener(`click`, function () {
  //recieve the user's input and converting it into a number
  const input = Number(guess.value);
  //***check if the input complies with the rules of the game
  if (input <= 0 || input > 20) {
    message.textContent = `Wrong input`;
    //***check if the input is equal to the solution
  } else if (input === solution) {
    message.textContent = `Good Job!`;
    //Display the solution
    numberSolution.textContent = solution;
    //change background
    body.style.backgroundColor = `#2b961f`;
    //update highscore if applicable
    if (scorePoints > highscorePoints) {
      highscorePoints = scorePoints;
      highscore.textContent = scorePoints;
    }
    //***check if the answer is wrong
  } else if (input !== solution) {
    message.textContent = input > solution ? `Too high!` : `Too low!`;
    scorePoints--;
    score.textContent = scorePoints;
  }
});

//Again button
againButton.addEventListener(`click`, function () {
  //Reset score
  scorePoints = 20;
  score.textContent = scorePoints;
  //Reset message
  message.textContent = `Start guessing...`;
  //Reset guess input
  guess.value = ``;
  //Reset solution display
  numberSolution.textContent = `?`;
  //Change solution
  solution = Math.floor(Math.random() * 20 + 1);
  //Reset background
  body.style.backgroundColor = `#222`;
});
