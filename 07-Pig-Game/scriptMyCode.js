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
var currentScore = document.querySelectorAll('.current-score');

let skippedTurn = function () {
    playerActive(playerNumber).remove('player--active');


    if (playerNumber == 1) {
        playerNumber--;
        playerActive(playerNumber).add('player--active');
    } else {
        playerNumber++;
        playerActive(playerNumber).add('player--active');

    }
}

document.querySelector('.btn--roll').addEventListener('click', function () {

    dice = Math.trunc(Math.random() * 6) + 1;

    document.querySelector('.dice').setAttribute('src', 'dice-' + dice + '.png');


    current(Number(document.querySelector('#current--' + playerNumber).textContent) + dice, playerNumber);


    if (dice === 1) {
        current(0, playerNumber);
        skippedTurn();

    }

});

document.querySelector('.btn--hold').addEventListener('click', function () {

    document.querySelector('#score--' + playerNumber).textContent = Number(document.querySelector('#current--' + playerNumber).textContent) + Number(document.querySelector('#score--' + playerNumber).textContent);

    if (Number(document.querySelector('#score--' + playerNumber).textContent) >= 100) {
        document.querySelector('.player--' + playerNumber).classList.add('player--winner');
    }

    current(0, playerNumber);

    skippedTurn();



});

document.querySelector('.btn--new').addEventListener('click', function () {
    playerNumber = 0;
    playerActive(0).add('player--active');
    playerActive(1).remove('player--active');
    document.querySelector('.player--' + playerNumber).classList.remove('player--winner');

    for (let i = 0; i < scoreElements.length; i++) {
        scoreElements[i].textContent = 0;
    }

    for (let i = 0; i < currentScore.length; i++) {
        currentScore[i].textContent = 0;
    }



















    /*

    for (let i = 0; i < scoreElements.length; i++) {
        scoreElements[i].textContent = '0';

    }

    for (let i = 0; i < currentScore.length; i++) {
        currentScore[i].textContent = '0';
    }

    */


});

