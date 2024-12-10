'use strict'

// /* --------------------------- 209. Constructor Functions and the new Operator --------------------------- */

// // Função contrutor
// // Inicia sempre com letra maiuscula(conveção)
// // não pode ser função de seta pois, ele não tem a própira palavra chave.

// const Person = function(firstName, birthYear) {
// this.firstName = firstName;
// this.birthYear = birthYear;


// // Nunca criar um método em uma função contrutora, pois se tivessemos mil chamadas  por exemplo teriamos problemas no desempenho
//   // this.calcAge = function (){
//   //   console.log(2037 - this.birthYear);
//   // };
  
// };

// const denis = new Person('Denis', 1999);

// console.log(denis);

// // 1. New {} um objeto vazio é criado.

// // 2. A função é chamada e nessa chamada de função a palavra chave this será definida para o objeto recém criado.
// // this = {}

// // 3. O objeto recem criado está criado a um protótipo {} ligado ao protótipo.

// // 4. A função retorna automaticamente aquele obkjeto {}


// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);
// console.log(matilda, jack);

// console.log(denis instanceof Person);

// /* --------------------------- 210. Prototypes --------------------------- */
// // Prototypes
// console.log(Person.prototpe);


// // adicionando um método
// Person.prototype.calcAge = function (){
//   console.log(2037 - this.birthYear);
// };

// denis.calcAge();
// matilda.calcAge();

// console.log(denis.__proto__);
// console.log(denis.__proto__);

// console.log(Person.prototype.isPrototypeOf(denis)); // true
// console.log(Person.prototype.isPrototypeOf(matilda)); // true
// console.log(Person.prototype.isPrototypeOf(Person)); // false

// // prototype = .prototypeOfLinkedObjects (podemos entender dessa forma pois não está ligado ao Person)


// // adicionando uma propriedade, ela não fica diretamente ligada ao objeto

// Person.prototype.species = 'Homo Sapiens';
// console.log(denis.species, matilda);

// console.log(denis.hasOwnProperty('firstName')); // true
// console.log(denis.hasOwnProperty('species')); // false
// console.log(denis.__proto__);

// /* --------------------------- 212. Prototypal Inheritance on Built-In Objects --------------------------- */
// // Object.prototype (top of prototype chain)

// console.log(denis.__proto__.__proto__);
// console.log(denis.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 6, 6, 5, 6, 9, 3, 3]; // quando criamos um array como esse é a mesma coisa que usar o costrutor new Array === []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);


// /* 
//   Não é uma boa pratica ficarmos adicinando métodos, pois, pode haver outros programadores e cada um nomear de uma forma,
//     ou pode haver alguma inclusão ou alteração no javascript que utilize o nome do metodo que voce criou de alguma outra forma 
//     e isso irá quebrar o código.
// */
// Array.prototype.unique = function (){
//   return [...new Set(this)];
// };
// console.log(arr.unique());

// const h1 = document.querySelector('h1');

// console.dir(h1);

// console.dir(x => x-1);


///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀

1. Use uma função construtora para implementar um Carro. Um carro possui as propriedades marca e velocidade. 
    A propriedade velocidade é a velocidade atual do carro em km/h.

2. Implemente um método acelerar que aumente a velocidade do carro em 10 e exiba a nova velocidade no console.

3. Implemente um método frear que diminua a velocidade do carro em 5 e exiba a nova velocidade no console.

4. Crie dois objetos de carro e experimente chamar os métodos acelerar e frear várias vezes em cada um deles.

DADOS DO CARRO 1: 'BMW' indo a 120 km/h
DADOS DO CARRO 2: 'Mercedes' indo a 95 km/h


*/


const Car = function(make, speed){
this.make = make;
this.speed = speed;
}

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

console.log(car1);

Car.prototype.accelerate = function(){
  this.speed += 10 ;
console.log(this.make + ' - ' + this.speed + ' km/h');
};


Car.prototype.brake = function(){
  (this.speed >= 5) ? (this.speed -= 5) : (this.speed = 0);
  console.log(this.make + ' - ' + this.speed + ' km/h');
}

car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.brake();

car2.accelerate();
car2.brake();
car2.brake();
car2.brake();

/* --------------------------- 214. ES6 Classes --------------------------- */

// class expression
  // const PersonCL = class {}

// class declaration
  class PersonCl {
    constructor(firstName, birthYear){
      this.firstName = firstName;
      this.birthYear = birthYear;
    }

    //Methods will be added to .prototype property
    //todos os metodos escritos fora do construtor estará no protótipo(prototype), e não no próprio objeto
    calcAge(){
      console.log(2024 - this.birthYear);
    }

   greet(){
      console.log(`Olá ${this.firstName}`);
    }
  }

  const jessica = new PersonCl('Jessica', 2000);

  console.log(jessica);
  jessica.calcAge();

  console.log(jessica.__proto__ == PersonCl.prototype);

  // PersonCl.prototype.greet = function (){
  //   console.log(`Olá ${this.firstName}`);
  // }

  jessica.greet();

  /*
  1. As classe não são suspensas, não podem ser usadas antes de ser declaradas no código.
  2. As classes são de primeira classe (podemos transferi-los para as funções e os devolver)
  3. o Corpo de uma classe é sempre executado estritamente (strict mode).
  */