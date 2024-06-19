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

const arr = [2, 3, 4];

const a = arr[0];
const b = arr[1];
const c = arr[2];

// tarefa de desestruturação
const [x, y, z] = arr;
console.log(x, y, z); // retornou 2, 3, 4

let [main, , secondary] = restaurant.categories; // com o segundo elemento vazio ele seleciona o proximo
console.log(main, secondary); // retornou Italian, Vegetarian


// // alternando duas variaveis sem desestruturação
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary)


// alternando as duas variaveis com desestruturação
[main, secondary] = [secondary, main];
console.log(main, secondary);  // retornou Vegetarian, Italian


restaurant.order(2, 0);
console.log(restaurant.order(2, 0)); // retornou (2) ['Garlic Bread', 'Pizza']


// Recebemons dois valores de retorno de uma função
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); // retornou Garlic Bread, Pizza


// Desestruturação de Arrays aninhados

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j); // retornou (2) [5, 6]
// caso quisessemos todos os valores individuais, seria necessario uma desestruturação dentro da desestruturação


const [i, , [j, k]] = nested;
console.log(i, j, k);


//definir valor padrão para as variaveis ao extrai-las

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);