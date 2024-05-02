'use strict';

// Selecionando elementos
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); // uma forma mais rapida de pesquisa, faz diferença em caso de muitos dados.
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const switchPlayer = function () {

    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = (activePlayer === 0) ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

let scores, currentScore, activePlayer, playing;


// Condições iniciais
const init = function init() {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
};

init();

// Funcionalidade de rolamento dos dados
btnRoll.addEventListener('click', function () {

    if (playing) {

        // 1. Gerando uma jogada de dados aleatória
        const dice = Math.trunc(Math.random() * 6) + 1;

        // 2. Exibição dos dados
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        // 3. Verificando se foi igual a um.
        if (dice !== 1) {
            //Adicionar os dados a pontuação atual
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            //Alterar para jogador 2
            switchPlayer();

        }
    }
});

btnHold.addEventListener('click', function () {
    if (playing) {
        /* 1. Adicionar a pontuação atual a pontuação do jogador ativo */
        scores[activePlayer] += currentScore;

        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        /* 2. Verifica se a pontuação do jogador é maior o ou igual a 100 */
        if (scores[activePlayer] >= 100) {
            /* Termina o jogo */
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

        } else {
            /* Alterana para o proximo jogador */
            switchPlayer();
        }
    }
});

btnNew.addEventListener('click', init);






const obj = {
    name: 'Joao',
    greet: function () {
        setTimeout(() => {
            console.log('Hello, ' + this.name);
        });
    }
};

obj.greet(); // Output: Hello, Bob


const obj2 = {
    name: 'Bob',
    greet: function () {
        console.log('Hello, ' + this.name);
        ;
    }
};

obj2.greet(); // Output: Hello, Bob

