'use strict'

/* --------------------------- 209. Constructor Functions and the new Operator --------------------------- */

// Função contrutor
// Inicia sempre com letra maiuscula(conveção)
// não pode ser função de seta pois, ele não tem a própira palavra chave.

const Person = function(firstName, birthYear) {
this.firstName = firstName;
this.birthYear = birthYear;


// Nunca criar um método em uma função contrutora, pois se tivessemos mil chamadas  por exemplo teriamos problemas no desempenho
  // this.calcAge = function (){
  //   console.log(2037 - this.birthYear);
  // };
  
};

const denis = new Person('Denis', 1999);

console.log(denis);

// 1. New {} um objeto vazio é criado.

// 2. A função é chamada e nessa chamada de função a palavra chave this será definida para o objeto recém criado.
// this = {}

// 3. O objeto recem criado está criado a um protótipo {} ligado ao protótipo.

// 4. A função retorna automaticamente aquele obkjeto {}


const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(denis instanceof Person);

/* --------------------------- 210. Prototypes --------------------------- */
// Prototypes
console.log(Person.prototpe);


// adicionando um método
Person.prototype.calcAge = function (){
  console.log(2037 - this.birthYear);
};

denis.calcAge();
matilda.calcAge();

console.log(denis.__proto__);
console.log(denis.__proto__);

console.log(Person.prototype.isPrototypeOf(denis)); // true
console.log(Person.prototype.isPrototypeOf(matilda)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

// prototype = .prototypeOfLinkedObjects (podemos entender dessa forma pois não está ligado ao Person)


// adicionando uma propriedade, ela não fica diretamente ligada ao objeto

Person.prototype.species = 'Homo Sapiens';
console.log(denis.species, matilda);

console.log(denis.hasOwnProperty('firstName')); // true
console.log(denis.hasOwnProperty('species')); // false
console.log(denis.__proto__);

/* --------------------------- 212. Prototypal Inheritance on Built-In Objects --------------------------- */
// Object.prototype (top of prototype chain)

console.log(denis.__proto__.__proto__);
console.log(denis.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 3, 3]; // quando criamos um array como esse é a mesma coisa que usar o costrutor new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);


/* 
  Não é uma boa pratica ficarmos adicinando métodos, pois, pode haver outros programadores e cada um nomear de uma forma,
    ou pode haver alguma inclusão ou alteração no javascript que utilize o nome do metodo que voce criou de alguma outra forma 
    e isso irá quebrar o código.
*/
Array.prototype.unique = function (){
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1');

console.dir(h1);

console.dir(x => x-1);
