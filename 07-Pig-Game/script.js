'use strict';
let playerNumber = 0;
let dice;
let current = function (current, currentPlayer) {
    document.querySelector('#current--' + currentPlayer).textContent = current;
}
let playerActive = function (playerNumber) {
    return document.querySelector('.player--' + playerNumber).classList;
}

var scoreElements = document.querySelectorAll('.score');
var currentScore = document.querySelectorAll('.current-score')



document.querySelector('.btn--roll').addEventListener('click', function () {

    dice = Math.trunc(Math.random() * 6) + 1;

    document.querySelector('.dice').setAttribute('src', 'dice-' + dice + '.png');


    current(Number(document.querySelector('#current--' + playerNumber).textContent) + dice, playerNumber);


    if (dice === 1) {
        current(0, playerNumber);
    }

});

document.querySelector('.btn--hold').addEventListener('click', function () {

    document.querySelector('#score--' + playerNumber).textContent = document.querySelector('#current--' + playerNumber).textContent;
    current(0, playerNumber);
    playerActive(playerNumber).remove('player--active');


    if (playerNumber == 1) {
        playerNumber--;
        playerActive(playerNumber).add('player--active');
    } else {
        playerNumber++;
        playerActive(playerNumber).add('player--active');

    }
});


document.querySelector('.btn--new').addEventListener('click', function () {
    player = 0;
    playerActive(0).add('player--active');
    playerActive(1).remove('player--active');


    for (let i = 0; i < scoreElements.length; i++) {
        scoreElements[i].textContent = '0';
    }

    for (let i = 0; i < currentScore.length; i++) {
        currentScore[i].textContent = '0';
    }


})

