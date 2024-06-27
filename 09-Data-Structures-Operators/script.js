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

//  property names (nomes de propriedades)
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `

for (const day of properties) {
  openStr += `${day}, `
}
console.log(openStr)



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