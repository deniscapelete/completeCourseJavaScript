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
    '2024-10-01T10:17:24.185Z',
    '2024-10-21T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2024-10-26T23:36:17.929Z',
    '2024-10-27T10:51:36.790Z',
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
    '2024-08-26T12:01:20.894Z',
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

const formatCur = function (value, locale, currency) {

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);

}

const formatMovementDate = function (date, locale) {

  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);
  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  return new Intl.DateTimeFormat(locale).format(date);

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;

}

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1
      } ${type}</div>
      <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  const formattedMov = formatCur(acc.balance, acc.locale, acc.currency);

  labelBalance.textContent = `${formattedMov}`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = formatCur(out, acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
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
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;
containerApp.style.opacity = 100;

// FAKE ALWAYS LOGGED IN
currentAccount = account1;
updateUI(currentAccount);

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

    // Create current date and time

    // Experimenting API
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      // month: '2-digit', exemplo 8 fica 08;
      year: 'numeric',
      // weekday: 'long'
    }
    // é uma boa pratica não inserir o local manualmente mas sim pegar pelo navegador do usuário
    // const locale = navigator.language // pega a linguagem do navegador
    labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now);

    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

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


    // Add tranfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {// Add movement
      currentAccount.movements.push(amount);

      // Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
    }, 2500);
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


// // // 174. Numeric Separators

// const diameter = 345_462_500_000;
// console.log(diameter) // 345462500000

// const price = 345_99;
// console.log(price); //34599

// const tranferFree1 = 15_00;
// console.log(tranferFree1); // 1500
// const tranferFree2 = 1_500;
// console.log(tranferFree1); // 1500

// const PI = 3.1415;
// console.log(PI); //3.1415

// console.log(Number('230_000')); // NaN

// console.log(parseInt('230_000')); // 230


// // // 175. Working With BigInt

// console.log(2 ** 53 - 1); // 9007199254740991
// console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// console.log(900719925474099145545478546); // 9.007199254740992e+26
// /* Qualquer número maior que isso não pode ser representado com precisão */


// // BigInt (n)
// console.log(100000000000000000000000000000000000n) // 100000000000000000000000000000000000n
// console.log(100000000000000000000000000000000000n * 2n) // 200000000000000000000000000000000000n

// console.log(222222222222222222222222222222n) // 222222222222222222222222222222n

// console.log(BigInt(222222222222222222222222222222)) // 222222222222222211003529035776n (NÃO FUNCIONA)

// const huge = 456545654565456545654565456444n;
// const num = 23;
// console.log(huge * BigInt(num));
// /* O calculo so pode ser feito entre dois BigInt's por isso se faz necessario converter
// no caso o BigInt() converte um número de tamanho normal apenas maiores que (9007199254740991) pode dar problema */

// //console.log(Math.sqrt(16n)); // (NÃO FUNCIONA)


// // EXCEÇÕES
// console.log(20n > 15); // true
// console.log(20n < 15); // false
// console.log(20n == 20); // true (nesse caso o JS faz coerção de tipos ex: 20 = '20')
// console.log(20n === 20); /* false 
// (não são exatamente igual pois o JS não faz coerção de tipos, 
// possuem tipos primitivos diferentes um é um 'bigint' e o outro é um 'number' regular)
// */
// console.log(typeof (20n)); // bigint
// console.log(typeof (20)); // number

// console.log(huge + ' is REALLY big!!!');

// console.log(10n / 3n); // 3n (remove a parte decimal, não arredonda, apenas remove)
// console.log(10 / 3); // 3.3333333333333335


// // 176. Creating Dates

// // Criar data
// const now = new Date()
// console.log(now);

// console.log(new Date('Oct 24 2024 09:17:34')); // (Não recomendado, pode não ser confiável)
// console.log(new Date('December 24, 2024')); // (Não recomendado, pode não ser confiável)
// console.log(new Date(account1.movementsDates[0]));

// console.log(new Date(2037, 10, 19, 15, 23, 5)); /* Thu Nov 19 2037 15:23:05 GMT-0300 (Horário Padrão de Brasília)
// o 10 represanta o mês baseado que se inicia em 0
// o 19 é o dia, se alteramos para 33 por exemplo e novembro so vai ate 30 ele irá para o dia 03 de dezembro 
// (é feito um calculo para acertar a diferença) 31 = 01, 32 = 02, 33 = 03 e etc
// */

// console.log(new Date(0)); /* Wed Dec 31 1969 21:00:00 GMT-0300 (Horário Padrão de Brasília)
// tempo Unix inical
// */
// console.log(new Date(3 * 24 * 60 * 60 * 1000));

// trabalhando com datas

// const future = new Date(2037, 10, 19, 15, 23, 5);
// console.log(future)
// console.log(future.getFullYear()); // 2037 - NÃO UTILIZAR getYear(retornaria 137)
// console.log(future.getMonth()); // 10
// console.log(future.getDay()); // 4
// console.log(future.getHours()); // 15
// console.log(future.getMinutes()); // 23
// console.log(future.getSeconds()); // 5

// console.log(future.toISOString()); // 2037-11-19T18:23:05.000Z

// console.log(future.getTime());//2142267785000

// console.log(new Date(2142267785000))

// console.log(Date.now())

// future.setFullYear(2040);
// future.setMonth(11);
// console.log(future); // Wed Dec 19 2040 15:23:05 GMT-0300 (Horário de Verão de Brasília)


// // 177. Adding Dates to "Bankist" app
// const now = new Date();
// const day = `${now.getDate()}`.padStart(2, 0);
// const month = `${now.getMonth() + 1}`.padStart(2, 0);
// const year = now.getFullYear();
// const hour = `${now.getHours()}`.padStart(2, 0);
// const min = `${now.getMinutes()}`.padStart(2, 0);
// labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;
// // day/month/year


// // 178. Operations With Dates

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(Number(future));
// console.log(+future);


// const date1 = new Date(2024, 9, 20, 15, 0);
// const date2 = new Date(2024, 9, 10, 15, 0);

// const calcDaysPassed = (date1, date2) =>
//   Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
// /* usamos o Math.abs, pois independente de qual data vier primeiro não retorne o valor como negativo,
// dessa forma a ordem das datas não interfere no resultado
// */
// // bliblioteca que pode ser utilizada para datas Moment.js
// console.log((calcDaysPassed(date1, date2)));


// 179. Internazionalizing Dates (Intl)

// // Experimenting API
// const now = new Date();
// const options = {
//   hour: 'numeric',
//   minute: 'numeric',
//   day: 'numeric',
//   month: 'long',
//   // month: '2-digit', exemplo 8 fica 08;
//   year: 'numeric',
//   weekday: 'long'
// }
// // é uma boa pratica não inserir o local manualmente mas sim pegar pelo navegador do usuário
// const locale = navigator.language
// labelDate.textContent = new Intl.DateTimeFormat('locale', options).format(now); // segunda-feira, 28 de outubro de 2024 às 20:50


// // 180. Internazionalizing Numbers (Intl)

// const num = 3884764.23;
// console.log('BR: ', new Intl.NumberFormat('pt-BR').format(num)); // BR:  3.884.764,23
// console.log('EUA: ', new Intl.NumberFormat('en-US').format(num)); // EUA:  3,884,764.23
// console.log('Browser: ', new Intl.NumberFormat(navigator.language).format(num)); // Browser:  3.884.764,23


// const options = {
//   style: 'unit',
//   unit: 'mile-per-hour',
// };
// console.log('BR: ', new Intl.NumberFormat('pt-BR', options).format(num)); // BR:  3.884.764,23


// const options2 = {
//   style: 'unit',
//   unit: 'celsius',
// };
// console.log('BR: ', new Intl.NumberFormat('pt-BR', options2).format(num)); // BR:  3.884.764,23 °C



// const options3 = {
//   style: 'percent',
//   unit: 'celsius', // essa opção é ignorada ppor causa da porcentagem
// };
// console.log('BR: ', new Intl.NumberFormat('pt-BR', options3).format(num)); // BR:  3.884.764,23%

// const options4 = {
//   style: 'currency',
//   unit: 'celsius', // essa opção é ignorada ppor causa da porcentagem
//   currency: 'EUR', // A moeda deve ser definida manualmente, pois ela não vem localmente, pois é possivel mostra euro no Brasil.
//   //useGrouping: false, // elimina os separadores  // BR:  € 3884764,23
// };
// console.log('BR: ', new Intl.NumberFormat('pt-BR', options4).format(num)); // BR:  € 3.884.764,23


// 181. Timers: setTimeout and setInterval

// setTimeout
setTimeout(() => console.log('Here is your pizza 🍕'), 3000); // Here is your pizza 🍕 (após 3 segundos)

// inserindo argumentos
setTimeout((ing1, ing2) =>
  console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
  4000,
  'olives',
  'spinach'); // Here is your pizza with olives and spinach 🍕 (após 4 segundos)


// cancelando a a contagem do temporizador.
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout((ing1, ing2) =>
  console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
  4000,
  ...ingredients); // Não retorna nada pois foi cancelado no apos o IF
if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

console.log('Waiting...');


// setInterval
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 10000); // Tue Oct 29 2024 21:17:44 GMT-0300 (Horário Padrão de Brasília) (repetidamente a cada 10 segundos)
