'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //na função é realizada a desestruturação do objeto (a ordem dos elementos não precisa ser a mesma do objeto, porém os nomes devem ser iguais)
  //Adicionei um valor padrão no mainIndex caso esse não possa ser desestruturado do objeto.
  orderDelivery: function ({ starterIndex, mainIndex = 0, time, address }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicous pasta with ${ing1}, ${ing2} and ${ing3}`)
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};


//////////////// Operador de propagação
// a propagação funciona em todos iteráveis em JavaScript (arrays, strings, maps(mapas) ou sets(conjunto), mas não em objetos)


const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); //retorna (5) [1, 2, 7, 8, 9]


//Só pode utilizar em locais onde serapariamos o valores pode virgula caso escrevessemos
//Operador de propagação (...arr), retira todos os elementos do array e os adiciona individualmente no novo array
const newArr = [5, 6, ...arr]
console.log(newArr) //retorna (5) [5, 6, 7, 8, 9]


console.log(...newArr); // retorna 5 6 7 8 9

//Aqui estamos criando um array novo e não manipulando a matriz do mainMenu do restaurant
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu); //retorna (4) ['Pizza', 'Pasta', 'Risotto', 'Gnocci']

// Copia do Array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy); //retorna (3) ['Pizza', 'Pasta', 'Risotto']


// Unir dois arrays
const menu = [...restaurant.mainMenu, ...newMenu];
console.log(menu) // retorna (7) ['Pizza', 'Pasta', 'Risotto', 'Pizza', 'Pasta', 'Risotto', 'Gnocci'


//propagação de string
const str = 'Denis';
const letters = [...str, ' ', 'C.'];
console.log(letters)


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



//Objects
const newRestaurant = {
  foundedIn: 1998,
  ...restaurant,
  founder: 'Guiseppe'
};

console.log(newRestaurant)

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Restaurante Brasil'

console.log(restaurant.name);
console.log(restaurantCopy.name);


















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
//   starterIndex: 2,
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