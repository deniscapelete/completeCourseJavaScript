'use strict';


//------------- 129. Default Parameters -------------
//valor padrão

/*
const bookings = [];

const createBooking = function (
    flightNum,
    numPassengers = 1,
    price = 150 * numPassengers // só funciona para parametros definidos antes desse (price)
) {
    // ES5
    // numPassengers = numPassengers || 1;
    // price = price || 150;

    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('ABX425')

createBooking('ABX425', 4, 10)

createBooking('ABX425', 4) // o segundo ARGUMENTO sempre é mapeado para o segundo PARÂMETRO
//ou seja, não é possível pular PARÂMETRO

createBooking('ABX425', undefined, 4)//Uma maneira para resolver isso é adicionando o ARGUMENTO como UNDEFINED
//funciona pois, fazendo isso é a mesma coisa que nem configura-lo, já que quando não passamos o argumento ele fica como UNDEFINED

console.log(bookings)
*/




//------------- 130. How Passing Arguments Works: Value vs. Reference -------------
//Como funciona a passagem de argumentos: valor versus referência

// const flight = 'LH234'; // PRIMITIVO
// const denis = {
//     name: 'Denis Capelete',
//     passport: 45685265423
// }

// const checkIn = function (flightNum, passenger) { // 
//     flightNum = 'LH999'; //o PARAMETRO flightNum funciona basicamente como uma cópia do valor original, portanto essa mudança não altera de fato o "flight"
//     passenger.name = 'Mr. ' + passenger.name // Quando passamos um tipo de referência para uma função, é copiado a referência ao objeto no heap de memória

//     // é apenas um exemplo, não devemos alterar o valor de um PARÂMETRO


//     if (passenger.passport === 45685265423) {
//         alert('Checked in');
//     } else {
//         alert('Wrong passport!');
//     }

// }
// //passar valor PRIMITIVO para uma função é p mesmo que criar uma cópia

// //passar OBJETO cria uma copia simples utilizando o mesmo espaço no HEAP

// checkIn(flight, denis)
// console.log(flight);
// console.log(denis)

// //é o mesmo que fazer...
// const flightNum = flight
// // faz uma copia, se o flightNum for alterado o fligth não sofre alteração.
// const passenger = denis  // passenger e denis apontam para o mesmo objeto na memória.
// // copia a mesma referência no HEAP, então se alterar o 'passenger' o 'denis' também sofre alteração por usarem o mesmo espaço no HEAP de memória.

// // Exemplo de problema
// const newPassport = function (person) {
//     person.passport = Math.trunc(Math.random() * 100000001);
// };

// newPassport(denis);// aqui é feita a alteração do número do passaporte no OBJETO
// checkIn(flight, denis); // aqui o objeto foi alterado pela função "newPassport" então o número do passaporte não é mais o mesmo e da falso nossa condição




// //------------- 132. Functions Accepting Callback Functions -------------

// //Função de ordem superior (Higher-order function)

// const oneWord = function (str) {
//     return str.replace(/ /g, '').toLowerCase();
// }

// const upperFirstWord = function (str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// }
// const transformer = function (str, fn) {
//     console.log(`Original string: ${str}`);

//     console.log(`Transformed string: ${fn(str)}`);

//     console.log(`Transformed by: ${fn.name}`)

// }

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);


// // JavaScript usa chamada de retorno o tempo todo (JS uses callbacks all the time)
// const high5 = function () {
//     console.log('👋');
// };
// document.body.addEventListener('click', high5);
// ['denis', 'jonas', 'teste'].forEach(high5);


// const nome = function (str) {
//     return str[0].toUpperCase() + str.slice(1);
// }

// const message = function (nome, func) {
//     console.log(`Olá ${func(nome)}`)
// }

// message('denis', nome)


// // //------------- 133. Functions Returning Functions (Funções Retornando Funções)  -------------

// const greet = function (greeting) {
//     return function (name) {
//         console.log(`${greeting} ${name}`);
//     };
// };


// const greeterHey = greet('Hey');

// greeterHey('Denis');
// greeterHey('Jonas');

// greet('Olá')('Denis')


// // Challenge
// const saudar = saudacao => nome => console.log(`${saudacao} ${nome}`)

// saudar('Bom dia')('Denis');

// const saudarOla = saudar('Olá');
// saudarOla('Denis');



// // //------------- 134. The call and apply Methods  -------------

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name })
    },

}

lufthansa.book(210, 'Denis Teste');
lufthansa.book(542, 'Jonas Testando');
console.log(lufthansa)

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};
// Precisamos usar exatamente os mesmos nome das 'PROPRIEDADE' do objeto original, pois O 'MÉTODO BOOK' está tentando ler apenas essas propriedades

const book = lufthansa.book;

// Não funciona (Does NOT work)
// book(23, 'Joao Pedro'); 
// a palavra chave 'THIS' a qual 'BOOK' se refere nesse caso está apontando para 'UNDEFINED'



// ------- Método de chamada - (Call method) -------
// Definindo manual e explicitamente a palavra chave
book.call(eurowings, 23, 'Joao Pedro');
// o método 'CALL', chama a função book com a palavra chave this definida como eurowings
console.log(eurowings);

book.call(lufthansa, 202, 'Marina Silva');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: []
}

book.call(swiss, 282, 'Kaka');
console.log(swiss);



// ------- Método de aplicação - (Apply method)  -------
//Não recebe uma lista de argumentos apos á palavra chave, na verdade ele receberá um 'ARRAY' de argumentos.
const flightData = [320, 'George Lincoln'];
book.apply(swiss, flightData);
//NÃO É MAIS UTILIZADO
console.log(swiss);

book.call(swiss, ...flightData)
//MANEIRA INDICADA



// ------- Método de bind - (Bind method)  -------