'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////


// ------------------- 143. Simple Array Methods -------------------

let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
// NÃO altera a MATRIZ original
console.log(arr.slice(2)); // retorna (3) ['c', 'd', 'e']
console.log(arr.slice(2, 4)); // retorna (2) ['c', 'd']
console.log(arr.slice(-2)); // retorna (2) ['d', 'e']
console.log(arr.slice(-1)); // retorna ['e']
console.log(arr.slice(1, -2)); // retorna (2) ['b', 'c']

//Para criar uma copia superficial de um ARRAY podemos usar qualquer um dos métodos OPERADOR DE PROPAGAÇÃO ou SLICE
// se faz necessário o uso do SLICE quando deseja encadear vários métodos, chamando um após o outro.
console.log(arr.slice()); // retorna (5) ['a', 'b', 'c', 'd', 'e']
console.log([...arr]);// retorna (5) ['a', 'b', 'c', 'd', 'e']


// SPLICE
// ALTERA a matriz original
arr.splice(-1); // seleciona e remove o ultimo item do ARRAY

// O array perde a parte que foi extraída
console.log(arr); // (4) ['a', 'b', 'c', 'd']

arr.splice(4, 0, 'e'); // (5) ['a', 'b', 'c', 'd', 'e']
// O primeiro é o ÍNDICE da MATRIZ e o segundo é quantos queremos remover

console.log(arr);


// REVERSE
// ALTERA a MATRIZ original
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f']; // (5) ['f', 'g', 'h', 'i', 'j']

console.log(arr2.reverse()); // Inverte a ordem

console.log(arr2); // (5) ['f', 'g', 'h', 'i', 'j']


// CONCAT
// NÃO altera a MATRIZ original
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
// NÃO altera a matriz original
// Resulta em uma STRING o separador que especificamos entre todos itens do ARRAY
console.log(letters.join(' - ')); // a - b - c - d - e - f - g - h - i - j


