'use strict';
console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 78;
console.log(document.querySelector('.guess').value);
// as we want the secrete number to be defined only once
// math.random * number (this number will give the number to which you want to allow the random numbers)
let secreteNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// for DRY
const displaymessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  //   console.log(document.querySelector('.guess').value);
  const guess = Number(document.querySelector('.guess').value);
  //   to convert a string into number simply just get the value as number
  console.log(typeof guess);
  //   when there is no input
  if (!guess) {
    displaymessage('No number');
    score--;
    document.querySelector('.score').textContent = score;
  }
  //   when player win
  else if (guess === secreteNumber) {
    document.querySelector('.number').textContent = secreteNumber;
    displaymessage('Correct guess');
    document.querySelector('body').style.backgroundColor = '#60B347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //   in both cases we are checking if the guess is different from each other
  else if (guess !== secreteNumber) {
    if (score > 1) {
      displaymessage(guess > secreteNumber ? 'Too high' : 'Too Low'); // this condition will check if the score is high or low
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displaymessage('you lost the gane');
      document.querySelector('.score').textContent = 0;
    }
  }
  //   when number is too high
  //   else if (guess > secreteNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too high';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'you lost the gane';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
  //   //   when number is too low
  //   else if (guess < secreteNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too Low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'you lost the gane';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secreteNumber = Math.trunc(Math.random() * 20) + 1;
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displaymessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').removeAttribute('style');
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
});
