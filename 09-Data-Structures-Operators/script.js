'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};


// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 objetos aprimorados
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //na função é realizada a desestruturação do objeto (a ordem dos elementos não precisa ser a mesma do objeto, porém os nomes devem ser iguais)
  //Adicionei um valor padrão no mainIndex caso esse não possa ser desestruturado do objeto.
  orderDelivery({ starterIndex, mainIndex = 0, time, address }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicous pasta with ${ing1}, ${ing2} and ${ing3}`)
  },

  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },


};

/////////////
// // // // // -------------- 122 Working With Strings - Part 1 --------------

// // -------------- fundamentos dos metodos slices --------------
// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]); // retorna A
// console.log(plane[1]); // retorna 3
// console.log(plane[2]); // retorna 2

// console.log('B737'[0]); // retorna B

// console.log(airline.length); // retorna 16
// console.log('B737'.length); // retorna 4

// console.log(airline.indexOf('r')); // retorna 6 (retorna a posição do primeiro encontrado)
// console.log(airline.lastIndexOf('r')); // retorna 10 (retorna a posição do último encontrado)

// console.log(airline.indexOf('Portugal')); // retorna 8 (retorna a posição da primeira letra da palavra)
// console.log(airline.indexOf('portugal')); // retorna -1 (existe diferença de letra minuscula para maiuscula)

// console.log(airline.slice(4)); // retorna Air Portugal (incia na posição que quer que comece a extração)

// console.log(airline.slice(4, 7)); // retorna Air (parametro inicial e final(não inclui o 7))

// console.log(airline.slice(0, airline.indexOf(' '))); // retorna Air
// console.log(airline.slice(airline.lastIndexOf(' ') + 1)) // retorna Portugal

// console.log(airline.slice(-3));  // retorna gal (as 3 últimas letras)
// console.log(airline.slice(1, -1)) // retorna AP Air Portuga

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E')
//     console.log('You got the middle seat');
//   else console.log('You got lucky');
// }

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');


// // // // // -------------- 121 Codding Challenge #3 ---------------
///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL


1. Crie um array 'events' com os diferentes eventos do jogo que aconteceram (sem duplicados).
2. Após o término do jogo, foi constatado que o cartão amarelo do minuto 64 foi injusto. Remova este evento do registro dos eventos do jogo.
3. Imprima a seguinte string no console: "Um evento aconteceu, em média, a cada 9 minutos" (tenha em mente que um jogo tem 90 minutos).
4. Faça um loop sobre os eventos e registre-os no console, marcando se estão no primeiro tempo ou no segundo tempo (após 45 minutos) do jogo, assim:
 PRIMEIROTEMPO 17: ⚽️ GOL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

console.log(gameEvents.values())

// 1-
const events = [...new Set(gameEvents.values())];
console.log(events)

// 2-
gameEvents.delete(64);
console.log(gameEvents)

// 3-
console.log(`Um evento aconteceu, em média, a cada ${90 / gameEvents.size} minutos`);

const time = [...gameEvents.keys()].pop();
console.log(time);

console.log(`Um evento aconteceu, em média, a cada ${time / gameEvents.size} minutos`);

// 4-
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}



// // // // // -------------- 119 Maps: Iteration --------------

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Try again!']
// ]);
// 3
// console.log(question);


// // Converter objetos em mapa
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);


// // Quiz app
// console.log(question.get('question'));

// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`)
// }


// const answer = Number(prompt('Your answer'));
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// // Converter mapa em array

// console.log([...question]);
// //console.log(question.entries());
// console.log([...question.keys()]);
// console.log([question.values]);



// // // // -------------- 118 Maps: Fundamentals --------------

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest);

// console.log(rest.size);
// rest.clear();
// console.log(rest)
// rest.set('nome', 'casa');

// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest)

// rest.set([1, 2], 'test'); // assim não funciona
// console.log(rest.get([1, 2]))

// const arr = [1, 2];

// rest.set(arr, 'test')
// console.log(rest.get(arr))




// // // -------------- SETS (conjuntos)--------------

// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pasta',
//   'Pizza',
//   'Risotto',
//   'Pizza',
// ]);

// console.log(ordersSet);

// console.log(new Set('Jonas'));

// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto')
// console.log(ordersSet)
// // ordersSet.clear(); // limpa todos os elementos do conjunto

// console.log(ordersSet[0]) // Em conjuntos não há índice, então retorna 'undefined'


// for (const order of ordersSet) console.log(order);

// //Exemplo
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef']).size
// );

// console.log(new Set('testando').size);











// //  property names (nomes de propriedades)
// const properties = Object.keys(openingHours);
// console.log(properties);  // retorna (3) ['thu', 'fri', 'sat']

// let openStr = `We are open on ${properties.length} days: `

// for (const day of properties) {
//   openStr += `${day}, `
// }
// console.log(openStr); // retorna We are open on 3 days: thu, fri, sat, 


// // Property VALUES 
// const values = Object.values(openingHours);
// console.log(values) // retorna:
// // (3) [{…}, {…}, {…}]
// //    0: {"open": 12,"close": 22} 
// //    1: {"open": 11,"close": 23} 
// //    2: {"open": 0,"close": 24}

// //Entire object (para percorrer todo o objeto)
// const entries = Object.entries(openingHours);
// console.log(entries); // retorna 
// // (3)[Array(2), Array(2), Array(2)]
// //    ["thu", { "open": 12, "close": 22 }]
// //    ["thu", { "open": 11, "close": 23 }]
// //    ["thu", { "open": 0, "close": 24 }]

// // [key, value]
// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
// }



// // -------------- encadeamento opcional--------------

// if (restaurant.openingHours && restaurant.openingHours.mon) console.log
//   (restaurant.openingHours.mon.open)


// console.log(restaurant.openingHours.mon?.open);

// console.log(restaurant.openingHours?.mon?.open)


// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`)
// }

// // -------------- Methods--------------
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist')

// // -------------- Arrays--------------
// const users = [
//   { name: 'Jonas', email: 'hello@jonas.io' }
// ];
// console.log(users[0]?.name ?? 'User array empty');


// // retorna o mesmo que o código acima
// if (users.length > 0) console.log(users[0].name);
// else console.log('user array empty');


// // -------------- FOR-OF LOOP--------------

// //foi criado para fornecer o elemento atual 
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item); // retorna item por item - Focaccia

// // for (const item of menu.entries()) {
// //   console.log(item); // retorna uma matriz com o índice no próprio elemento da matriz - (2) [0, 'Focaccia'])
// // }

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`)
// }






// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0,
// }

// const rest2 = {
//   name: 'La Piazzai',
//   owner: 'Giovanni',
// }

// OR operador de atribuição
// Atribui valor se ela estiver com problema
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;


// // nulllist assingnment operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // AND operador de atribuição
// // rest1.owner = rest1.owner && '<ANONYMOUS>;'
// // rest2.owner = rest2.owner && '<ANONYMOUS>;'

// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';


// console.log(rest1);
// console.log(rest2);



// //O Operador Coalescente Nulo (??)
// //Trabalha com o conceito de valores nulos em vez de valores falsos

// restaurant.numGuests = 0;

// const guests = restaurant.numGuests || 10;
// console.log(guests);

// //Os valores nulos são nulos e indefinidos (isso nao inclui 0 e nem o string vazio '').
// //Basicamente é como se considerasse o 0 e '' como verdadeiros.
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

////////////////////////////////////////////////////////////////


// console.log('------------ OR ------------');
// // Operado OR (||)
// // Pode usar qualquer tipo de dado, e pode retornar qualquer tipo de dado, fazem curto-circuito
// // O operador OR para no primeiro que for verdadeiro (por isso do nome curto-circuito)
// // O operador OR caso todos forem falsos ele para no ultimo
// // Podemos utilizar o OR para definir os valores padrão
// console.log(3 || 'Denis'); // retorna - 3
// console.log('' || 'Denis'); // retorna - Denis
// console.log(true || 0); // retorna - true
// console.log(false || 0 || 1); // retorna - 1
// console.log(undefined || null); // retorna - null
// console.log(undefined || '' || 0 || 'Olá' || 23 || null); // retorna - Olá


// restaurant.numGuests = 23; // se o valor for 0, não iremos obter o resultado desejado, nesta caso utilizamos o operador coalescing (Coalescente)

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);


// console.log('------------ AND ------------');
// // entra em curto-circuito quando enconta o primeiro valor falso
// // O operador AND para no primeiro valor que for falso ( por isso do nome curto-circuito)
// // O operador AND caso todos forem verdadeiros ele para no último
// // Podemos utilizar o AND para executar o código no segundo operando se o primeiro for verdadeiro
// console.log(0 && 'Denis'); //retorna - 0
// console.log(7 && 'Denis'); //retorna - Denis

// console.log('Hello' && 23 && null && 'Denis');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushroom', 'spinach');
// }


// restaurant.order && restaurant.orderPizza('mushroom', 'spinach')


////////////////////////////////////////////////////////////////


// // 1) Desestruturing

// /////////// Padrão de repouso e parâmetros de repouso

// // SPREAD(PROPAGAÇÃO), porque no lado direito do operador de atribuição =
// const arr = [1, 2, ...[3, 4]];

// //REST(Repouso), porque no lado esquerdo do sinal
// // pega o restante dos elementos que não foram selecionados e os armazena em uma nova matriz
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others); //retorna 1 2 (3) [3, 4, 5]

// //o REST coleta todo array após a última variavel, não inclui nenhum elemento ignorado 
// //( no exemplo abaixo ignoramos o segundo)
// // o Rest deve ser o último elemento
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood)


// //Objetos
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);


// // a sintaxe rest, é pegar varios números ou valores e, em seguida, empacotar todos em um único array.
// // 2) Function
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
//   console.log(numbers)
// };

// add(2, 3); // retona 5   -   retorna  (2) [2, 3]
// add(4, 5, 6, 7); //retona 22   -   retorna  (4) [4, 5, 6, 7]
// add(8, 9, 10, 11, 12, 13); // retona 63   -   retorna  (6) [8, 9, 10, 11, 12, 13]

// const x = [23, 5, 7];
// add(...x); // retona 35   -   retorna  (3) [23, 5, 7]




// restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');


////////////////////////////////////////////////////////////////


// //////////////// Operador de propagação
// // a propagação funciona em todos iteráveis em JavaScript (arrays, strings, maps(mapas) ou sets(conjunto), mas não em objetos)


// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr); //retorna (5) [1, 2, 7, 8, 9]


// //Só pode utilizar em locais onde serapariamos o valores pode virgula caso escrevessemos
// //Operador de propagação (...arr), retira todos os elementos do array e os adiciona individualmente no novo array
// const newArr = [5, 6, ...arr]
// console.log(newArr) //retorna (5) [5, 6, 7, 8, 9]


// console.log(...newArr); // retorna 5 6 7 8 9

// //Aqui estamos criando um array novo e não manipulando a matriz do mainMenu do restaurant
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu); //retorna (4) ['Pizza', 'Pasta', 'Risotto', 'Gnocci']

// // Copia do Array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy); //retorna (3) ['Pizza', 'Pasta', 'Risotto']


// // Unir dois arrays
// const menu = [...restaurant.mainMenu, ...newMenu];
// console.log(menu) // retorna (7) ['Pizza', 'Pasta', 'Risotto', 'Pizza', 'Pasta', 'Risotto', 'Gnocci'


// //propagação de string
// const str = 'Denis';
// const letters = [...str, ' ', 'C.'];
// console.log(letters)




//console.log(`${...str} Schmedtmann`) // retorna erro: Uncaught SyntaxError: Unexpected token
// Vários valores separados por uma vírgula geralmente são esperados apenas quando passamos argumentos para uma função ou quando construimos um novo array



////////// Exemplo prático
// const ingredients = [
//   prompt('Lets\'s make pasta! Ingredient 1?'),
//   prompt('Let\'s make pasta! Ingredient 2?'),
//   prompt('Let\'s make pasta! Ingrediente 3?'),
// ];

// //Ambos abaixo produzem o mesmo resultado porém o segundo método é melhor pois em outros casos podem existir muito mais elementos
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);



// //Objects
// const newRestaurant = {
//   foundedIn: 1998,
//   ...restaurant,
//   founder: 'Guiseppe'
// };

// console.log(newRestaurant)

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Restaurante Brasil'

// console.log(restaurant.name);
// console.log(restaurantCopy.name);



/////////////////// Desestruturação
//Exemplo prático

// // passamos apenas um objeto (não são quatro argumentos)
// restaurant.orderDelivery({
//   time: '22:50',
//   address: 'Via del Sole, 22',
//   mainIndex: 2,
//   starterIndex: 3,
// });

// restaurant.orderDelivery({
//   time: '23:20',
//   address: 'Rua Nova, 10',
//   // não adicionei o mainIndex, então ele vai pegar o padrão adicionado na function
//   starterIndex: 2,The Spread Operator (...)
// });

// /////////////////////////
// // Desestruturando Objetos

// //cria três variaveis novas com base no objeto restaurant
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// // renomeando o nome das variaveis
// const { name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// //Valor padrão - Definindo um valor padrão para caso a propriedade procurada não exista 
// const { menu = [], starterMenu: starters = [] } = restaurant;

// console.log(menu, starters)

// //Mutanting variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };


// ({ a, b } = obj);
// console.log(a, b);

// const { fri: { open, close }, } = openingHours;

// console.log(open, close);


///////////////////////////////////////////
// Desestruturando Arrays

// const arr = [2, 3, 4];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// // tarefa de desestruturação
// const [x, y, z] = arr;
// console.log(x, y, z); // retornou 2, 3, 4

// let [main, , secondary] = restaurant.categories; // com o segundo elemento vazio ele seleciona o proximo
// console.log(main, secondary); // retornou Italian, Vegetarian


// // // alternando duas variaveis sem desestruturação
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary)


// // alternando as duas variaveis com desestruturação
// [main, secondary] = [secondary, main];
// console.log(main, secondary);  // retornou Vegetarian, Italian


// restaurant.order(2, 0);
// console.log(restaurant.order(2, 0)); // retornou (2) ['Garlic Bread', 'Pizza']


// // Recebemons dois valores de retorno de uma função
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse); // retornou Garlic Bread, Pizza


// // Desestruturação de Arrays aninhados

// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j); // retornou (2) [5, 6]
// // caso quisessemos todos os valores individuais, seria necessario uma desestruturação dentro da desestruturação


// const [i, , [j, k]] = nested;
// console.log(i, j, k);


// //definir valor padrão para as variaveis ao extrai-las

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r); // retornou 8 9 1