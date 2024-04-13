'use strict';
let dice;
let current = function (current, currentPlayer) {
    document.querySelector('#current--' + currentPlayer).textContent = current;
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


