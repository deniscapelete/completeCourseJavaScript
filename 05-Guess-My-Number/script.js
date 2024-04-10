'use strict';


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}
let displayNumber = function (number) {
    document.querySelector('.number').textContent = number;
}
let displayScore = function (score) {
    document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    const highscore = Number(document.querySelector('.highscore').textContent);
    //when there is no input
    if (!guess) {
        displayMessage('⛔ No Number!')
        /* document.querySelector('.message').textContent = '⛔ No Number!';*/

        //when player wins
    } else if (guess === secretNumber) {
        displayMessage('🎉 correct number');
        /*  document.querySelector('.message').textContent = '🎉 correct number';*/

        displayNumber(secretNumber);
        /* document.querySelector('.number').textContent = secretNumber;*/

        document.querySelector('.number').style.width = '30rem';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.highscore').textContent = (highscore < score) ? score : highscore;

        // When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage((guess > secretNumber) ? '📈 Too high!' : '📉 Too low!');
            /* document.querySelector('.message').textContent = (guess > secretNumber) ? '📈 Too high!' : '📉 Too low!';*/
            score--;
            displayScore(score);
            /* document.querySelector('.score').textContent = score;*/
        } else {
            displayScore(0);
            /* document.querySelector('.score').textContent = 0;*/

            displayMessage('💥You lost the game!');
            /*document.querySelector('.message').textContent = '💥You lost the game!';*/
        }
    }

    /*
    
        //when guess in too high
        else if (guess > secretNumber) {
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
        }*/

});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.guess').value = '';
    displayScore(score);
    /*document.querySelector('.score').textContent = score;*/
    displayMessage('Start guessing...')
    /*document.querySelector('.message').textContent = 'Start guessing...';*/
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    displayNumber('?');
    /*document.querySelector('.number').textContent = '?';*/
});



