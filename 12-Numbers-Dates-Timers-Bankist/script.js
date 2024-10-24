'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1
      } ${type}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out.toFixed(2))}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]
      }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES


// // // 171. Converting and Checking Numbers

// console.log(23 === 23.0); // true

// //Base 10 -0 to 9. 1/10 = 0.1. 3/10 = 3.333333
// console.log(0.1 + 0.2); // 0.30000000000000004
// console.log(0.1 + 0.2 === 0.3) // false (erro do javascript).


// console.log(Number('23')); // 23 (type:number)
// console.log(+'23'); // 23 (type:number)

// //-------------------------------------------------------------------

// /*
// parseInt e parseFloat
//   Tenta descobrir automaticamente o número que está na string
//   A string precisa começar com o número '25asd'. 'asd25' o segundo caso nao funcionaria retornaria NaN.
// */
// console.log(Number.parseInt('30px', 10)); // 30
// console.log(Number.parseInt('30px', 2)); // NaN
// console.log(Number.parseInt('asd23', 10)); // NaN
// /* É importante passar a base 10 para evitar alguns bugs em algmas situações */

// console.log(Number.parseInt('2.5rem')); // 2
// console.log(Number.parseFloat('2.5rem')); // 2.5

// console.log(parseFloat('2.5rem')); // 2.5 (Funciona porém o ideal é usar juntamente com o Number)

// //-------------------------------------------------------------------

// /* 
// isNaN
// usuado apenas para verificar se um NaN
// */

// console.log(Number.isNaN(20)); // false
// console.log(Number.isNaN('20')); // false
// console.log(Number.isNaN(+'23x')); // true
// console.log(Number.isNaN(23 / 0)); // false

// //-------------------------------------------------------------------

// /* 
// isFinite
// Melhor maneira para verificar se um valor é um número
// */
// console.log(Number.isFinite(20)); // true
// console.log(Number.isFinite('20')); // false
// console.log(Number.isFinite('20x')); // true
// console.log(Number.isFinite(23 / 0)); // false (pois divisão por 0 retorna 'infinty')

// //-------------------------------------------------------------------

// /* 
// isInteger
// Verifica se é um número inteiro
// */
// console.log(Number.isInteger(23)); // true
// console.log(Number.isInteger(23.0)); // true
// console.log(Number.isInteger(23.5)); // false
// console.log(Number.isInteger(23 / 0)); // false


// // // 172. Math and Rounding

// // Raiz quadrada
// console.log(Math.sqrt(25)); // 5
// console.log(25 ** (1 / 2)); // 5

// // Raiz cubica
// console.log(8 ** (1 / 3)); // 2

// // Maior número
// console.log(Math.max(5, 18, 23, 11, 2)); // 23
// console.log(Math.max(5, 18, '23', 11, 2)); // 23
// console.log(Math.max(5, 18, '23px', 11, 2)); // NaN

// // Menor número
// console.log(Math.min(5, 18, 23, 11, 2)); // 2
// console.log(Math.min(5, 18, '23', 11, 2)); // 2
// console.log(Math.min(5, 18, '23px', 11, 2)); // NaN

// // Calcular o raio
// console.log(Math.PI * Number.parseFloat('10px') ** 2); // 314.1592653589793

// // Numeros randômicos
// console.log(Math.random())
// /* Retorna um numéro entre 0 e 1 */

// console.log(Math.trunc(Math.random() * 6) + 1)
// /* Obtém valor entre 1 e 6 */

// /* calculo para pegarmos um valor inteiro randomico entre o mínimo e o máximo*/
// const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;
// // 0...1 -> 0...(max-min) -> min...max

// console.log(randomInt(13, 20));


// // Arredondamento de inteiros
// /* Remove a parte decimal */
// console.log(Math.trunc(23.3)); // 23 (Number)
// console.log(Math.trunc(-23.4));

// /* Faz o arredondamento 
// >=.5 -> arrendonda para cima
// <=.4 -> arrendonda para baixo
// */
// console.log(Math.round(23.3)) // 23 (Number)
// console.log(Math.round(23.5)) // 24 (Number)

// /* Faz o arredondamento para cima */
// console.log(Math.ceil(23.3)) // 24 (Number)
// console.log(Math.ceil(23.5)) // 24 (Number)
// console.log(Math.ceil(-23.5)) // -23 (Number)

// /* Faz o arredondamento para cima */
// console.log(Math.floor(23.3)) // 23 (Number)
// console.log(Math.floor('23.5')) // 23 (Number)
// console.log(Math.floor(-23.3)) // 24 (Number)

// /* Todos esses metodos faze coerção de tipo ou seja aceita 23 ou '23' */


// // Arredondamento de decimais (são primitivos, portando não tem método ex: Math)
// console.log((2.7).toFixed(0)); // 3 (string)
// console.log((2.7).toFixed(2)); // 2.70 (string)
// console.log((2.7567).toFixed(3)); // 2.757 (string)

// /* arredonda para cima e para baixo, e é possivel definir o número de casas decimais, porém converte em string */

// // convertendo em número com o '+', poderiamos tambem utilizar o 'Number()'.
// console.log(+(2.7).toFixed(0)); // 3 (Number)
// console.log(+(2.7).toFixed(2)); // 2.70 (Number)
// console.log(+(2.7567).toFixed(3)); // 2.757 (Number)


// // // 173. The remainder operator

// /* 
// % -> retorna o que sobra da divisão (inteiros)
// 6 % 2 -> 0 (2 * 3 = 6)
// 9 % 2 -> 1 (2 * 4 + 1 = 9)
// 9 % 3 -> 0 (3 * 3 = 9)
// 8 % 3 -> 2 (2 * 3 + 2 = 8)
//  */

// console.log(5 % 2);// 1
// console.log(5 / 2); // 2.5
// // 5 = 2 *2 + 1

// console.log(8 % 3);// 2
// console.log(8 / 3); // 2.6666666666666665
// // 5 = 2 * 3 + 2

// console.log(6 % 2);// 0
// console.log(6 / 2); // 3
// // 5 = 2 *2 + 1

// console.log(7 % 2);// 1
// console.log(7 / 2); // 3.5
// // 5 = 2 *2 + 1

// const isEven = n => n % 2 === 0;
// console.log(isEven(8)); // true
// console.log(isEven(13)); // false
// console.log(isEven(43)); // false


// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')].
//     forEach(function (row, i) {
//       // 0,2,4,6
//       if (i % 2 === 0) row.style.backgroundColor = 'orangered';
//       // 0,3,6,9
//       if (i % 3 === 0) row.style.backgroundColor = 'blue'
//     });
// });


// // labelBalance.addEventListener('click', function () {
// //   [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
// //     // 0, 2, 4, 6
// //     if (i % 2 === 0) row.style.backgroundColor = 'orangered';
// //     // 0, 3, 6, 9
// //     if (i % 3 === 0) row.style.backgroundColor = 'blue';
// //   });
// // });


// // 173. Numeric Separators

const diameter = 345_462_500_000;
console.log(diameter) // 345462500000

const price = 345_99;
console.log(price); //34599

const tranferFree1 = 15_00;
console.log(tranferFree1); // 1500
const tranferFree2 = 1_500;
console.log(tranferFree1); // 1500

const PI = 3.1415;
console.log(PI); //3.1415

console.log(Number('230_000')); // NaN

console.log(parseInt('230_000')); // 230

