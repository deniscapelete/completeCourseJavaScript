'use strict'

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



