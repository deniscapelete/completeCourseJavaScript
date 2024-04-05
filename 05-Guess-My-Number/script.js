'use strict';


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    const highscore = Number(document.querySelector('.highscore').textContent);
    //when there is no input
    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No Number!';

        //when player wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 correct number';

        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        document.querySelector('.highscore').textContent = (highscore < score) ? score : highscore;

        //when guess in too high
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📈 Too high!'
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥You lost the game!';
            document.querySelector('.score').textContent = 0;
        }

        //when guess in too low
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📉 Too low!'
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
});



