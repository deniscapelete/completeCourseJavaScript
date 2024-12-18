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


// ///////////////////////////////////////
// // Coding Challenge #1

// /* 
// 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h

// GOOD LUCK 😀

// 1. Use uma função construtora para implementar um Carro. Um carro possui as propriedades marca e velocidade. 
//     A propriedade velocidade é a velocidade atual do carro em km/h.

// 2. Implemente um método acelerar que aumente a velocidade do carro em 10 e exiba a nova velocidade no console.

// 3. Implemente um método frear que diminua a velocidade do carro em 5 e exiba a nova velocidade no console.

// 4. Crie dois objetos de carro e experimente chamar os métodos acelerar e frear várias vezes em cada um deles.

// DADOS DO CARRO 1: 'BMW' indo a 120 km/h
// DADOS DO CARRO 2: 'Mercedes' indo a 95 km/h


// */


// const Car = function(make, speed){
// this.make = make;
// this.speed = speed;
// }

// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedes', 95);

// console.log(car1);

// Car.prototype.accelerate = function(){
//   this.speed += 10 ;
// console.log(this.make + ' - ' + this.speed + ' km/h');
// };


// Car.prototype.brake = function(){
//   (this.speed >= 5) ? (this.speed -= 5) : (this.speed = 0);
//   console.log(this.make + ' - ' + this.speed + ' km/h');
// }

// car1.accelerate();
// car1.accelerate();
// car1.accelerate();
// car1.brake();

// car2.accelerate();
// car2.brake();
// car2.brake();
// car2.brake();

// /* --------------------------- 214. ES6 Classes --------------------------- */

// // class expression
//   // const PersonCL = class {}

// // class declaration
//   class PersonCl {
//     constructor(fullName, birthYear){
//       this.fullName = fullName;
//       this.birthYear = birthYear;
//     }

//     //Methods will be added to .prototype property
//     //todos os metodos escritos fora do construtor estará no protótipo(prototype), e não no próprio objeto
//     calcAge(){
//       console.log(2024 - this.birthYear);
//     }

//    greet(){
//       console.log(`Olá ${this.fullName}`);
//     }

//       get age(){
//         return 2024 - this.birthYear;    
//       }

//   // Set a property that allready exists
//       set fullName(name){
//         console.log(name);
//         if(name.includes(' ')) this._fullName = name;
//         else alert(`${name} is not a full name!`);
//       }

//       get fullName(){
//         return this._fullName;
//       }
//   }

//   const jessica = new PersonCl('Jessica Davis', 2000);
  
//   console.log(jessica);
//   jessica.calcAge();
//   console.log(jessica.age);

//   console.log(jessica.__proto__ == PersonCl.prototype);

//   // PersonCl.prototype.greet = function (){
//   //   console.log(`Olá ${this.firstName}`);
//   // }

//   jessica.greet();

//   /*
//   1. As classe não são suspensas, não podem ser usadas antes de ser declaradas no código.
//   2. As classes são de primeira classe (podemos transferi-los para as funções e os devolver)
//   3. o Corpo de uma classe é sempre executado estritamente (strict mode).
//   */

  
// /* --------------------------- 225. Setters and Getters --------------------------- */

//  const walter = new PersonCl('walter jose', 1965);

//   const account = {
//     owner: 'Denis',
//     movements: [50, 120, 160, 200, 250],


//     get latest() {
//       return this.movements
//     }
//   };


//   console.log(account.latest);

  
//   /* --------------------------- 227. Object.create() --------------------------- */

//   const PersonProto = {
//     init(name, birthYear){
//       this.name = name;
//       this.birthYear = birthYear;
//     },
//     calcAge(){
//       console.log(2024 - this.birthYear);
//       return (2024 - this.birthYear);
//     },
//     message(){
//       console.log(`Olá meu nome é ${this.name} e tenho ${this.calcAge()} anos.`);
//     }   
//   }

//   const steven = Object.create(PersonProto);
//   console.log(steven);
//   steven.name ='Steven';
//   steven.birthYear = 2001;
//   steven.calcAge();
//   steven.message();

//   console.log(steven.__proto__ == PersonProto);

//   const jose = Object.create(PersonProto);

//   jose.init('Jose', 1999);  
//   jose.message();



  ///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h



1. Recrie o desafio 1, mas desta vez usando uma classe ES6;

2. Adicione um getter chamado 'speedUS' que retorna a velocidade atual em mi/h (dividindo por 1.6);

3. Adicione um setter chamado 'speedUS' que define a velocidade atual em mi/h (mas converte para km/h antes de armazenar o valor, 
multiplicando a entrada por 1.6);

4. Crie um novo carro e experimente os métodos de acelerar e frear, além do getter e setter.

DADOS DO CARRO 1: 'Ford' indo a 120 km/h


GOOD LUCK 😀
*/


// class Car {
//   constructor(brand, speed) {
//     this.brand = brand;
//     this.speed = speed;
//   }

//   accelerate(){
//     this.speed += 10;
//     console.log(this.speed);
//   }

//   brake(){
//     this.speed -= 5;
//     console.log(this.speed);
//   }

//   get speedUS(){
//     return (this.speed/1.6);
//   }

//   set speedUS(speed){    
//     this.speed = speed * 1.6;   
//   }

// }

// const ford = new Car('Ford', 120);

// console.log(ford);

// ford.accelerate();
// ford.brake();
// ford.brake();

// console.log(ford.speedUS);

// ford.speedUS = 40;
// console.log(ford);


// const Person = function(firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function(){
//   return (2024 - this.birthYear);
// }


// const Student = function(firstName, birthYear, course) {
//    Person.call(this, firstName, birthYear);
//    this.course = course;
// };

// // Linking prototypes
// Student.prototype = Object.create(Person.prototype);
// // essa herança deve ser adicionada antes de incluir outros no 'Student', pois ele sobrescreve.

// const lucas = new Student('Lucas', 1992, 'Engineer');

// console.log(lucas);

// Student.prototype.introduce = function(){
//   console.log(`My name is ${this.firstName} and i study ${this.course}`)
// }
// lucas.introduce();
// console.log(lucas.calcAge());

// console.log(lucas.__proto__);
// console.log(lucas.__proto__.__proto__);
 
// console.log(lucas instanceof Student);


// Student.prototype.constructor = Student;
//   /* 
//     é necessario fazer isso, pois como utilizamos o 'Object.create' ele está considerando o 'Person' como o contrutor, 
//     porém queremos que seja o próprio 'Student'
//   */

// console.dir(Student.prototype.constructor); // ƒ Student(firstName, birthYear, course)


//   /* --------------------------- 230. CHALLENGE #3 --------------------------- */

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

1. Use uma função construtora para implementar um Carro Elétrico (chamado de EV) como uma "classe" FILHA de Carro. 
Além da marca (make) e da velocidade atual (current speed), o EV também possui a carga atual da bateria em % (propriedade charge);

2. Implemente um método chamado chargeBattery, que recebe um argumento chargeTo e define a carga da bateria para o valor de chargeTo;

3. Implemente um método accelerate que aumentará a velocidade do carro em 20 e diminuirá a carga da bateria em 1%. 
Depois, exiba uma mensagem como esta: 'Tesla indo a 140 km/h, com uma carga de 22%';

4. Crie um objeto de carro elétrico e experimente chamar os métodos accelerate, brake e chargeBattery (carregue até 90%). 
Perceba o que acontece ao usar o accelerate! DICA: Revise a definição de polimorfismo 😉

DADOS DO CARRO 1: 'Tesla' indo a 120 km/h, com uma carga de 23%

GOOD LUCK 😀
*/

const Car = function(make, currentSpeed) {
  this.make = make;
  this.currentSpeed = currentSpeed;
};

Car.prototype.accelerate = function(){
  this.currentSpeed += 10;
  console.log(`${this.make} is goind at ${this.currentSpeed} km/h`);
}
Car.prototype.brake = function(){
  this.currentSpeed -= 5;
  console.log(`${this.make} is going at ${this.currentSpeed} km/h`);
}

const Ev = function(make, currentSpeed, charge){
  Car.call(this, make, currentSpeed);
  this.charge = charge;
};


// link the prototypes

Ev.prototype = Object.create(Car.prototype);
Ev.prototype.chargeBattery = function(chargeTo){
this.charge = chargeTo;
};

// deve ficar após linkar os prototypes
const tesla = new Ev('Tesla', 120, 6);
console.log(tesla);


 Ev.prototype.accelerate = function(){ // essa alteração não afeta o accelerate do objeto Car, apenas o do Ev
  if(this.charge>0){
    this.currentSpeed += 20;  
    this.charge --;    
  } else {
      this.currentSpeed = 0;
      this.charge = 0;
  }
  console.log(`Car: ${this.make}, Current Speed: ${this.currentSpeed} km/h, Charge: ${this.charge} %`)
};

console.log(tesla);

tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.chargeBattery(50);
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.brake();