'use strict';


// Selecionando elementos
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); // uma forma mais rapida de pesquisa, faz diferença em caso de muitos dados.
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let currentScore = 0;


// Funcionalidade de rolamento dos dados
btnRoll.addEventListener('click', function () {

    // 1. Gerando uma jogada de dados aleatória
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Exibição dos dados
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Verificando se foi igual a um.
    if (dice !== 1) {
        //Adicionar os dados a pontuação atual
        currentScore += dice;
        current0El.textContent = currentScore; // Pontuação do atual jogador
    } else {
        //Alterar para jogador 2
    }
});






