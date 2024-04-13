'use strict';
let dice;
let current = function (current, currentPlayer) {
    document.querySelector('#current--' + currentPlayer).textContent = current;
}
let playerActive = function (playerNumber) {
    return document.querySelector('.player--' + playerNumber).classList;
}

let playerNumber = 0;

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


