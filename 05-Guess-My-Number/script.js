'use strict';

/*
console.log(document.querySelector('.message').textContent);


document.querySelector('.message').textContent = 'correct Number';

document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 12;

console.log(document.querySelector('.guess').value);

document.querySelector('.guess').value = 23;

*/

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No Number!'
    }
});
