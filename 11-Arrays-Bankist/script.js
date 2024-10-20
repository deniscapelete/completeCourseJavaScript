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


// // ------------------- 148. Creating DOM Elements -------------------
const displayMovements = function (movements, sort = false) {

  containerMovements.innerHTML = '';
  // removendo tudo do "containerMovements" incluindo as tags html

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  // usamos o '.slice' porque não queremos alterar a matriz original então criamos uma copia

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal'
    const html = `
           <div class="movements__row">
            <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>           
            <div class="movements__value">${mov}€</div>
          </div>
        `;
    containerMovements.insertAdjacentHTML('afterbegin', html)
    //adiciona o valor da variável 'html' dentro do "containerMovements" arquivo HTML
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
}

// // ------------------- 156. The Magic og Chaining Methods -------------------

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * acc.interestRate / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int)

  labelSumInterest.textContent = `${interest}€`
}

// // ------------------- 152. Computing Usernames -------------------

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      // transformou tudo em letra minúscula
      .split(' ')
      // separarou o nome onde havia espaço, adicionando cada um a um index do array. Ex: ['joao silva'], ['joao', 'silva']
      .map(name => name[0])
      //pegou a primeira letra de cada index do array. Ex: ['joao', 'silva], ['j', 's']
      .join('');
    // criou uma string juntando todas a letra do array . Ex: ['j', 's'], 'js'
  });
};
createUsernames(accounts);

// // ------------------- 159. Implementing login -------------------

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);
  // Display balance
  calcDisplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
}

// Event handler
let currentAccount

btnLogin.addEventListener('click', function (event) {
  // Prevent form from submitting
  event.preventDefault();

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)
  console.log(currentAccount)

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;


    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();


    // update UI
    updateUI(currentAccount)

  }
});


// // ------------------- 160. Implementing Transfers -------------------
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  console.log(amount, receiverAcc);

  // clear inputs
  inputTransferAmount.value = inputTransferTo.value = "";

  if (amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // update UI
    updateUI(currentAccount)
  };
})


// // ------------------- 162. Some and every -------------------
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = inputLoanAmount.value;

  if (amount > 0 && currentAccount.movements.some(mov => mov * 0.1 >= amount)) {
    // Add movement
    currentAccount.movements.push(amount);


    // Update UI
    updateUI(currentAccount);
  };

});



// // ------------------- 161. The findIndex Method -------------------
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {

    const index = accounts.findIndex(acc => acc.username === currentAccount.username)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
    labelWelcome.textContent = `Log in to get started`;
    inputCloseUsername.value = "";
    inputClosePin.value = "";

  }
})

// // ------------------- 164. Sorting arrays -------------------

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
})

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////


///////////////////////////////////////
// Coding Challenge #1

/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀

--------

Julia e Kate estão fazendo um estudo sobre cachorros.
Cada uma delas perguntou a 5 donos de cães sobre a idade de seus cães e armazenou os dados em um array (um array para cada uma).
Por enquanto, elas estão apenas interessadas em saber se um cachorro é adulto ou filhote.
Um cachorro é considerado adulto se tiver pelo menos 3 anos de idade, e é considerado filhote se tiver menos de 3 anos.

Crie uma função 'checkDogs', que aceita 2 arrays com as idades dos cachorros ('dogsJulia' e 'dogsKate'), e realiza as seguintes tarefas:

Julia descobriu que os donos do PRIMEIRO e dos ÚLTIMOS DOIS cachorros, na verdade, têm gatos, e não cães! Então, crie uma cópia superficial do array de Julia e remova as idades dos gatos desse array copiado (porque é uma má prática modificar os parâmetros de uma função).
Crie um array com os dados corrigidos de Julia e os dados de Kate.
Para cada cachorro restante, registre no console se ele é adulto ("Cachorro número 1 é adulto e tem 5 anos") ou um filhote ("Cachorro número 2 ainda é um filhote 🐶").
Execute a função para os dois conjuntos de dados de teste.
DICA: Use ferramentas de todas as aulas desta seção até agora 😉

DADOS DE TESTE 1: Dados de Julia [3, 5, 2, 12, 7], Dados de Kate [4, 1, 15, 8, 3]
DADOS DE TESTE 2: Dados de Julia [9, 16, 6, 8, 3], Dados de Kate [10, 5, 6, 1, 4]

BOA SORTE 😀

*/

///// ---------- MINHA SOLUÇÃO ---------- //////
// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

// const checkDogs = function (arr1, arr2) {

//   const dogsJuliaCorrect = arr1.slice(1, -2);

//   const dogsJuliaAndKate = [...dogsJuliaCorrect, ...arr2];
//   dogsJuliaAndKate.forEach(function (value, i) {
//     const category = (value > 2) ? `é adulto e tem ${value} anos` : `ainda é um filhote 🐶`;
//     console.log(`Cachorro número ${i + 1} ${category}`);
//   });
// };
// checkDogs(dogsJulia, dogsKate)

// // dados teste 2
// const dogsJuliaT2 = [9, 16, 6, 8, 3];
// const dogsKateT2 = [10, 5, 6, 1, 4];
// checkDogs(dogsJuliaT2, dogsKateT2);


///// ---------- SOLUÇÃO PROFESSOR ---------- //////

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);

//   const dogs = dogsJuliaCorrected.concat(dogsKate);

//   dogs.forEach(function (dogs, i) {
//     if (dogs >= 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${dogs} years old`)

//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy 🐶`)
//     }
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);


// // ------------------- 143. Simple Array Methods -------------------

// let arr = ['a', 'b', 'c', 'd', 'e'];

// // SLICE
// // NÃO altera a MATRIZ original
// console.log(arr.slice(2)); // retorna (3) ['c', 'd', 'e']
// console.log(arr.slice(2, 4)); // retorna (2) ['c', 'd']
// console.log(arr.slice(-2)); // retorna (2) ['d', 'e']
// console.log(arr.slice(-1)); // retorna ['e']
// console.log(arr.slice(1, -2)); // retorna (2) ['b', 'c']

// //Para criar uma copia superficial de um ARRAY podemos usar qualquer um dos métodos OPERADOR DE PROPAGAÇÃO ou SLICE
// // se faz necessário o uso do SLICE quando deseja encadear vários métodos, chamando um após o outro.
// console.log(arr.slice()); // retorna (5) ['a', 'b', 'c', 'd', 'e']
// console.log([...arr]);// retorna (5) ['a', 'b', 'c', 'd', 'e']


// // SPLICE
// // ALTERA a matriz original
// arr.splice(-1); // seleciona e remove o ultimo item do ARRAY

// // O array perde a parte que foi extraída
// console.log(arr); // (4) ['a', 'b', 'c', 'd']

// arr.splice(4, 0, 'e'); // (5) ['a', 'b', 'c', 'd', 'e']
// // O primeiro é o ÍNDICE da MATRIZ e o segundo é quantos queremos remover

// console.log(arr);


// // REVERSE
// // ALTERA a MATRIZ original
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f']; // (5) ['f', 'g', 'h', 'i', 'j']

// console.log(arr2.reverse()); // Inverte a ordem

// console.log(arr2); // (5) ['f', 'g', 'h', 'i', 'j']


// // CONCAT
// // NÃO altera a MATRIZ original
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // JOIN
// // NÃO altera a matriz original
// // Resulta em uma STRING o separador que especificamos entre todos itens do ARRAY
// console.log(letters.join(' - ')); // a - b - c - d - e - f - g - h - i - j



// // // ------------------- 144. The new "at" method -------------------

// const arr = [12, 20, 31];
// console.log(arr[0]);
// console.log(arr.at(0));

// // getting last array element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1))

// console.log('denis'.at(0));
// console.log('denis'.at(-1));



// // // ------------------- 145. Looping Arrays: forEach -------------------


// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log('---------FOR OF---------');

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited $ ${movement}`);
//   } else {
//     console.log(`You withdrew $ ${Math.abs(movement)}`)
//   }
// };
// // as instruções BREAK e CONTINUE funcinam no FOR OF, se precisar sair do loop a qualquer momento use FOR OF

// console.log('---------FOR OF---------');

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited $ ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew $ ${Math.abs(movement)}`)
//   }
// };

// console.log('---------FOREACH---------');

// movements.forEach(function (movement, index, array) {
//   // 1º parâmetro sempre precisa ser o elemento.
//   // 2º parâmetro sempre precisa ser o índice atual.
//   // 3º parâmetro sempre precisa ser o array inteiro sobre o qual esta sendo feito o loop.
//   // Não é obrigatório passar os três parâmetros e os nome podem ser outros.
//   if (movement > 0) {
//     console.log(`Movement ${index + 1}: You deposited $ ${movement}`);
//   } else {
//     console.log(`Movement ${index + 1}: You withdrew $ ${Math.abs(movement)}`)
//   }
// });
// // 0: function(200);
// // 1: function(450);
// // 2: function(400);

// // as instruções BREAK e CONTINUE NÃO funcinam no FOREACH, ou seja, sempre fara o loop no array inteiro.



// // // ------------------- 146. forEach With Maps and Sets -------------------

// // Map
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {

//   console.log(`${key}: ${value}`);
//   // retorna USD: United States dollar
//   // retorna EUR: Euro
//   // retorna GBP: Pound sterling
// })


// // Set

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

// console.log(currenciesUnique); // retorna Set(3) {'USD', 'GBP', 'EUR'}

// currenciesUnique.forEach(function (value, _, set) {
//   // em JavaScript um "_" significa uma variável descartável.

//   console.log(`${value} : ${value}`);
//   // retorna USD: USD
//   // retorna GBP: GBP
//   // retorna EUR: EUR

//   console.log(set); // retorna Set(3) {'USD', 'GBP', 'EUR'}
//   // Conjuntos(SET) não tem chave e nem índices porntando não há valor que faça sentido para a chave.
// })


// // // // ------------------- 151. The MAP Method -------------------

// const eurToUsd = 1.1;

// //o map retorna um novo array.
// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// })

// const movementsUSDarrow = movements.map(mov => mov * eurToUsd)

// console.log(movements);
// console.log(movementsUSD);
// console.log(movementsUSDarrow);


// //// --------- FOR ---------
// // No FOR foi feito um loop para inserir os dados no array
// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor);


// //// --------- MAP ---------
// // No MAP a partir do retorno de chamada foram adicionados os dados a um novo ARRAY
// const movementsDescriptions = movements.map((mov, i) =>
//   `Movement ${i + 1}: You ${(mov > 0) ? 'deposited' : 'withdrew'} $ ${Math.abs(mov)}`
// )

// console.log(movementsDescriptions);


// // // ------------------- 153. The filter Method -------------------

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });

// const withdrawals = movements.filter(mov => mov < 0);

// console.log(movements); //retorna (8) [200, 450, -400, 3000, -650, -130, 70, 1300]
// console.log(deposits); // retorna (5) [200, 450, 3000, 70, 1300]
// console.log(withdrawals); // retorna (3) [-400, -650, -130]


// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(depositsFor); // retorna (5) [200, 450, 3000, 70, 1300]


// // // ------------------- 154. The Reduce Method -------------------
// //accumulator -> SNOWBALL
// console.log(movements);

// // const balance = movements.reduce(function (acc, cur, i, arr) {
// //   console.log(`Iteration ${i}: ${acc}`)
// //   return acc + cur; 
// // }, 0); // aqui entra com o valor inicial do 'acc'.

// const balance = movements.reduce((acc, cur) => acc + cur, 0);

// console.log(balance); //retorna 3840


// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

// // Maximum value

// const maxVal = movements.reduce((acc, val) => (acc < val) ? acc = val : acc, movements[0]);
// /*
// Quando buscamos o máximo e o mínimo não se utiliza zero no valor inicial, 
// pois se os valores forem negativos o maior sempre será o zero, 
// assim como em caso de positivos o menor sempre será o zero.
// */
// console.log(maxVal);


///////////////////////////////////////
// Coding Challenge #2

/*
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀

Vamos voltar ao estudo de Julia e Kate sobre cães.
Desta vez, elas querem converter as idades dos cães para idades humanas e calcular a idade média dos cães no estudo.

Crie uma função 'calcAverageHumanAge', que aceita um array de idades de cães ('ages'), e faz o seguinte em ordem:

1. Calcule a idade do cão em anos humanos usando a seguinte fórmula:
se o cão tiver <= 2 anos, idadeHumana = 2 * idadeCão.
Se o cão tiver > 2 anos, idadeHumana = 16 + idadeCão * 4.

2. Exclua todos os cães que tenham menos de 18 anos humanos
(o que significa manter apenas os cães com pelo menos 18 anos)

3. Calcule a idade média humana de todos os cães adultos
(você já deve saber de outros desafios como calcular médias 😉)

4. Execute a função para ambos os conjuntos de dados de teste.

DADOS DE TESTE 1: [5, 2, 4, 1, 15, 8, 3]
DADOS DE TESTE 2: [16, 6, 10, 5, 6, 1, 4]


*/
//Solução um
// const calcAverageHumanAge = function (ages) {
//   const HumanAge = ages.map(function (age) {
//     if (age <= 2) {
//       return 2 * age;
//     } else {
//       return 16 + age * 4;
//     }
//   })
//   return HumanAge;
// };
// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

// const removeDogs = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]).filter(age => age > 18);
// console.log(removeDogs) 
// const calcMed = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]).reduce((acc, cur, i, arr) => (arr.length > (i + 1)) ? acc + cur : (acc + cur) / arr.length, 0)
// // const calcMed = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]).reduce((acc, cur, i, arr) => acc + cur, 0) / calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]).length
// console.log(calcMed);

//Solução dois
// const calcAvaregeHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2) ? 2 * age : 16 + age * 4);
//   const adults = humanAges.filter(age => age >= 18);
//   console.log(humanAges); // retorna (7) [36, 4, 32, 2, 76, 48, 28] (dados teste 1)
//   console.log(adults); // retorna (5) [36, 32, 76, 48, 28] (dados teste 1)

//   const average = adults.reduce((acc, cur) => acc + cur, 0) / adults.length;
//   console.log(average); // retorna 44 (dados teste 1)
//   return average;

// }

// const avg1 = calcAvaregeHumanAge([5, 2, 4, 1, 15, 8, 3]);

// const avg2 = calcAvaregeHumanAge([16, 6, 10, 5, 6, 1, 4]);

// console.log(avg1, avg2);

// const eurToUSd = 1.1;


// // // ------------------- 156. The Magic og Chaining Methods -------------------

// // PIPELINE 

// const eurToUSd = 1.1;

// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUSd)
//   .reduce((acc, mov) => acc + mov);

// console.log(totalDepositsUSD);


///////////////////////////////////////
// 157.  Coding Challenge #3

/*
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]


Reescreva a função 'calcAverageHumanAge' do desafio anterior,
mas desta vez como uma função de seta (arrow function), e utilizando encadeamento!


Vamos voltar ao estudo de Julia e Kate sobre cães.
Desta vez, elas querem converter as idades dos cães para idades humanas e calcular a idade média dos cães no estudo.

Crie uma função 'calcAverageHumanAge', que aceita um array de idades de cães ('ages'), e faz o seguinte em ordem:

1. Calcule a idade do cão em anos humanos usando a seguinte fórmula:
se o cão tiver <= 2 anos, idadeHumana = 2 * idadeCão.
Se o cão tiver > 2 anos, idadeHumana = 16 + idadeCão * 4.

2. Exclua todos os cães que tenham menos de 18 anos humanos
(o que significa manter apenas os cães com pelo menos 18 anos)

3. Calcule a idade média humana de todos os cães adultos
(você já deve saber de outros desafios como calcular médias 😉)

4. Execute a função para ambos os conjuntos de dados de teste.


GOOD LUCK 😀
*/

// const calcAverageHumanAge = function (ages) {
//   const med = ages
//     .map(age => (age <= 2) ? 2 * age : 16 + age * 4)
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0)
//   return med;
// }
// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));



// // // ------------------- 157. The Find Method -------------------

// /*
// Diferenças do FIND method para FILTER method
//   - Retorna apenas o primeiro elemento que satisfaça a condição
//   - Retorna apenas o elemento e não uma matriz
// */
// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);


// console.log(accounts);

// /*
// Quando um ARRAY possui vários OBJECTS, podemos fazer a busca por uma proriedade conehcida
// assim retornando apenas aquele objeto.
// Geralmente o objetivo do FIND method é encontrar examtamente um elemento
// */
// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);



// // // ------------------- 162. Some and every -------------------

// console.log(movements); // (8) [200, 450, -400, 3000, -650, -130, 70, 1300]

// // EQUALLITY
// console.log(movements.includes(-130)); // true

// // CONDITION
// // Verifica se pelo menos um atende a condição
// console.log(movements.some(mov => mov >= 3500)); // false

// const anyDeposits = movements.some(mov => mov > 0);
// console.log(anyDeposits); // false

// // EVERY
// // Verifica se todos atendem a condição
// console.log(movements.every(mov => mov > 0)); // false
// console.log(account4.movements.every(mov => mov > 0)); // false


// // Separate callback
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));



// // // ------------------- 162. Some and every -------------------

// const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8, 9]; // (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]

// console.log(arrDeep.flat()); // (7) [Array(2), 3, 4, Array(2), 7, 8, 9]
// console.log(arrDeep.flat(1)); // (7) [Array(2), 3, 4, Array(2), 7, 8, 9]
// console.log(arrDeep.flat(2));  // (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
// // o dois representa o nivel de aninhamento que ele atinge;


// const accountMovements = accounts.map(acc => acc.movements);

// console.log(accountMovements)
// console.log(accountMovements.flat());

// console.log(accountMovements.flat().filter(mov => mov >= 0)); //(17) [200, 450, 3000, 70, 1300, 5000, 3400, 8500, 200, 340, 50, 400, 430, 1000, 700, 50, 90]
// console.log(accountMovements.flat().filter(mov => mov < 0)) // (12) [-400, -650, -130, -150, -790, -3210, -1000, -30, -200, -300, -20, -460]


// // flat
// const overalBralance = accounts
//   .map(acc => acc.movements)
//   // (4) [Array(8), Array(8), Array(8), Array(5)]
//   .flat()
//   //(29) [200, 450, -400, 3000, -650, -130, 70, 1300, 5000, 3400, -150, -790, -3210, -1000, 8500, -30, 200, -200, 340, -300, -20, 50, 400, -460, 430, 1000, 700, 50, 90]
//   .reduce((acc, mov) => acc + mov)
// // 17840
// console.log(overalBralance);

// // flatMap
// const overalBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   //(29) [200, 450, -400, 3000, -650, -130, 70, 1300, 5000, 3400, -150, -790, -3210, -1000, 8500, -30, 200, -200, 340, -300, -20, 50, 400, -460, 430, 1000, 700, 50, 90]
//   // o flatMap atinge apenas um nivel de aninhamento, não podemos altera-ló.
//   .reduce((acc, mov) => acc + mov);
// //17840

// console.log(overalBalance2);


// // // ------------------- 164. Sorting arrays -------------------

// // Strings
// const owners = ['Matias', 'Jonas', 'Joao', 'Denis'];
// console.log(owners.sort()); // (4) ['Denis', 'Joao', 'Jonas', 'Matias'];
// console.log(owners); // (4) ['Denis', 'Joao', 'Jonas', 'Matias'];
// /* Ordena as string, 
// alterando também a matriz original*/

// // Number
// console.log(movements); // (8) [200, 450, -400, 3000, -650, -130, 70, 1300]
// console.log(movements.sort()); // (8) [-130, -400, -650, 1300, 200, 3000, 450, 70]
// /* Ordena como se fosse strings 
// (no caso considerando o '-' primeira e depois a ordem do primeiro numero), 
// alterando também a matriz original*/

// // return < 0, A, B (mantem a ordem)
// // return > 0, B, A (troca de order)

// // Ordem crescente
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
// console.log(movements); // (8) [-650, -400, -130, 70, 200, 450, 1300, 3000]

// // Ordem decrescente
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
// console.log(movements); // (8) [3000, 1300, 450, 200, 70, -130, -400, -650]

// //Funciona da mesma maneira que o crescente, apenas simplificamos o retorno
// movements.sort((a, b) => a - b);
// console.log(displayMovements);



// // // ------------------- 164. More ways of creating and filling arrays -------------------

// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(new Array(1, 2, 3, 4, 5, 6, 7)); // (7) [1, 2, 3, 4, 5, 6, 7]

// // Empty arrays + fill method
// const x = new Array(7);
// console.log(x); //(7) [vazio x 7]

// //console.log(x.map(() => 5)); // (7) [vazio x 7] (NÃO FAZ NADA)

// //x.fill(1);
// //console.log(x); // (7) [1, 1, 1, 1, 1, 1, 1]

// x.fill(1, 3, 5);
// /* 
// 1º parâmetro é o valor que sera utilizado para preencher
// 2º parâmetro é de qual posição vai iniciar, não inclui a posição informada.
// 3º parâmetro é até qual posição ele vai, nesse caso ele inclui a posição informada.
// No exemplo ele preenche 1, iniciando depois da posição 3(inicia na posição 4) até a posição 5(incluindo a posição 5)
// */
// console.log(x); //(7) [vazio x 3, 1, 1, vazio x 2]


// arr.fill(23, 2, 6);
// console.log(arr); // (7) [1, 2, 23, 23, 23, 23, 7]

// //Array.from
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y); // (7) [1, 1, 1, 1, 1, 1, 1]

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z); // (7) [1, 2, 3, 4, 5, 6, 7]


// labelBalance.addEventListener('click', function () {
//   const movementsUI =
//     Array.from(document.querySelectorAll('.movements__value'), /*foi criado um 'NodeList' que não é realmente um 'Array'*/
//       el => Number(el.textContent.replace('€', '')) /* convente o elemento bruto em seu conteúdo de texto */
//     );

//   console.log(movementsUI);

//   const movementsUI2 = [...document.querySelectorAll('.movements__value')];
//   console.log(movementsUI2.map(el => Number(el.textContent.replace('€', ''))));
// })


// // // ------------------- 167. Array Methods Practice -------------------

// //1.
// //soma dos valores que foram depositados no banco
// const banckDeposirSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((sum, mov) => sum + mov, 0);

// console.log(banckDeposirSum);


// //2.
// //quantos depositos acima de 1000
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;
// /* 
// OU
// .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
// Em vez de 'count + 1' não podemos utilizar count++, pois ele apenas adiciona valor e não o retorna,
// porém podemos utiliza '++count'.
// */

// console.log(numDeposits1000);

// // Operador prefixo ++
// let a = 10;
// console.log(++a);
// console.log(a);

// //3.

// const sum = accounts.flatMap(acc => acc.movements).reduce((sums, cur) => {
//   cur > 0
//     ? sums.deposits += cur
//     : sums.withdrawals += cur;
//   return sums;
// }, { deposits: 0, withdrawals: 0 });

// console.log(sum)

// //OU

// const { deposits, withdrawals } = accounts.flatMap(acc => acc.movements).reduce((sums, cur) => {
//   /* 
//     cur > 0
//     ? sums.deposits += cur
//     : sums.withdrawals += cur;
//   */
//   sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
//   return sums;
// }, { deposits: 0, withdrawals: 0 });

// console.log(deposits, withdrawals)


// // 4.
// // this is a nice title -> This Is a Nice Title
// const convertTitleCase = function (title) {

//   const capitzalize = str => str[0].toUpperCase() + str.slice(1);

//   const expections = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];

//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word => (expections
//       .includes(word) ? word : capitzalize(word)))
//     .join(' ');
//   return titleCase;
// }
// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a LONG title'));



///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀


Julia e Kate ainda estão estudando os cachorros, e desta vez elas estão estudando se os cães estão comendo demais ou de menos.
Comer demais significa que a porção de comida atual do cachorro é maior do que a porção recomendada, e comer de menos é o oposto.
Comer uma quantidade adequada significa que a porção atual de comida do cachorro está dentro de um intervalo de 10% acima e 10% abaixo da porção recomendada (veja a dica).

1. Faça um loop sobre o array que contém os objetos de cachorro, 
e para cada cachorro, calcule a porção recomendada de comida e adicione ao objeto como uma nova propriedade. 
NÃO crie um novo array, apenas faça o loop sobre o array. Fórmula: porçãoRecomendada = peso ** 0.75 * 28. 
(O resultado está em gramas de comida, e o peso deve estar em kg)

2. Encontre o cachorro de Sarah e exiba no console se ele está comendo demais ou de menos. 
DICA: Alguns cães têm múltiplos donos, 
então primeiro você precisa encontrar Sarah no array de donos, 
o que pode ser um pouco complicado (de propósito) 🤓

3. Crie um array contendo todos os donos de cães que comem demais ('donosComemDemais')
 e um array com todos os donos de cães que comem de menos ('donosComemDeMenos').

4. Exiba no console uma string para cada array criado no item 3, como esta: 
"Matilda e Alice e Bob têm cães que comem demais!" e "Sarah e John e Michael têm cães que comem de menos!"

5. Exiba no console se há algum cachorro comendo EXATAMENTE a quantidade recomendada de comida (apenas true ou false)
6. Exiba no console se há algum cachorro comendo uma quantidade ADEQUADA de comida (apenas true ou false)
7. Crie um array contendo os cachorros que estão comendo uma quantidade ADEQUADA de comida (tente reutilizar a condição usada no item 6)
8. Crie uma cópia superficial do array de cachorros e classifique-o pela porção recomendada de comida em ordem crescente (lembre-se de que as porções estão dentro dos objetos do array)
DICA 1: Use várias ferramentas diferentes para resolver esses desafios, você pode usar a aula de resumo para escolher entre elas 😉
DICA 2: Estar dentro de um intervalo de 10% acima e abaixo da porção recomendada significa: porçãoAtual > (recomendada * 0.90) && porçãoAtual < (recomendada * 1.10). Basicamente, a porção atual deve estar entre 90% e 110% da porção recomendada.

DADOS DE TESTE:

javascript
Copiar código
const cachorros = [
  { peso: 22, porcaoAtual: 250, donos: ['Alice', 'Bob'] },
  { peso: 8, porcaoAtual: 200, donos: ['Matilda'] },
  { peso: 13, porcaoAtual: 275, donos: ['Sarah', 'John'] },
  { peso: 32, porcaoAtual: 340, donos: ['Michael'] }
];
*/

const cachorros = [
  { peso: 22, porcaoAtual: 250, donos: ['Alice', 'Bob'] },
  { peso: 8, porcaoAtual: 200, donos: ['Matilda'] },
  { peso: 13, porcaoAtual: 275, donos: ['Sarah', 'John'] },
  { peso: 32, porcaoAtual: 340, donos: ['Michael'] }
];


// 1.
cachorros.forEach(cachorros => {
  cachorros.porcaoRecomendada = Math.trunc(cachorros.peso ** 0.75 * 28);
});

console.log(cachorros);

// 2.
const cachorroDeSarah = cachorros.find(cao => cao.donos.includes('Sarah'));
console.log(cachorroDeSarah);
console.log(`O cachorro de sara esta comendo ${cachorroDeSarah.porcaoAtual > cachorroDeSarah.porcaoRecomendada
  ? 'demais' : 'pouco'}`);


// 3.
const donosDosQueComemMuito = cachorros
  .filter(cachorro => cachorro.porcaoAtual > cachorro.porcaoRecomendada)
  .map(cachorro => cachorro.donos)
  .flat();

console.log(donosDosQueComemMuito);

const donosDosQueComemPouco = cachorros
  .filter(cachorro => cachorro.porcaoAtual < cachorro.porcaoRecomendada)
  .map(cachorro => cachorro.donos)
  .flat();

console.log(donosDosQueComemPouco);






