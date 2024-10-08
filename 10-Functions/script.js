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

// const lufthansa = {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],
//     book(flightNum, name) {
//         console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
//         this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name })
//     },
// }

// lufthansa.book(210, 'Denis Teste');
// lufthansa.book(542, 'Jonas Testando');
// console.log(lufthansa)

// const eurowings = {
//     airline: 'Eurowings',
//     iataCode: 'EW',
//     bookings: [],
// };
// // Precisamos usar exatamente os mesmos nome das 'PROPRIEDADE' do objeto original, pois O 'MÉTODO BOOK' está tentando ler apenas essas propriedades

// const book = lufthansa.book;

// // Não funciona (Does NOT work)
// // book(23, 'Joao Pedro');
// // a palavra-chave 'THIS' a qual 'BOOK' se refere nesse caso está apontando para 'UNDEFINED'



// // ------- Método de chamada - (Call method) -------
// // Definindo manual e explicitamente a palavra-chave(this)
// book.call(eurowings, 23, 'Joao Pedro');
// // o método 'CALL', chama a função book com a palavra-chave(this) definida como eurowings
// console.log(eurowings);

// book.call(lufthansa, 202, 'Marina Silva');
// console.log(lufthansa);

// const swiss = {
//     airline: 'Swiss Air Lines',
//     iataCode: 'LX',
//     bookings: []
// }

// book.call(swiss, 282, 'Kaka');
// console.log(swiss);



// // ------- Método de aplicação - (Apply method)  -------
// //Não recebe uma lista de argumentos apos á palavra-chave(this), na verdade ele receberá um 'ARRAY' de argumentos.
// const flightData = [320, 'George Lincoln'];
// book.apply(swiss, flightData);
// //NÃO É MAIS UTILIZADO
// console.log(swiss);

// book.call(swiss, ...flightData)
// //MANEIRA INDICADA



// // //------------- 135. The bind Method  -------------

// // ------- Método de bind - (Bind method)  -------
// // Assim como 'CALL' permite definir manualmente as palavras-chave(this)
// // O 'BIND' não chama a função imediatamente, ele retorna uma nova função onde a palavra-chave(this) está associada.
// // É necessario chamar a função posteriormente quando for usar

// const bookLH = book.bind(lufthansa);
// const bookEW = book.bind(eurowings);
// const bookLX = book.bind(swiss);

// bookEW(425, 'Jorginho');
// console.log(eurowings);

// const bookEW23 = book.bind(eurowings, 23);
// //Neste caso deixamos predefinido o primeiro parâmetro (padrão chamado de aplicação parcial)
// bookEW23('Denis teste'); // retorna -  Denis teste booked a seat on Eurowings flight EW23
// bookEW23('Marta testando') // retorna - Marta testando booked a seat on Eurowings flight EW23

// // With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//     console.log(this);

//     this.planes++
//     console.log(this.planes);
// };
// // lufthansa.buyPlane()


// document.querySelector('.buy')
//     .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));


// // Partial application

// const addTax = (rate, value) => value + value * rate;

// console.log(addTax(0.1, 200));


// const addVAT = addTax.bind(null, 0.23); // neste caso não importa a palavra-chave(this) então adicionamos null.

// console.log(addVAT(100));
// console.log(addVAT(200));


// // // const addNewTax = rate => value =>  value + value * rate; (com arrow function)


// const addNewTax = function (rate) {
//     return function (value) {
//         return value + value * rate;;
//     }
// }

// const newTax = addNewTax(0.23);

// console.log(newTax(200));
// console.log(newTax(100));


// // //------------- 136. Coding Challenge #1  -------------
// Coding Challenge #1

/*
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)

  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/


/////////////////////////////////////// // Desafio de Codificação #1

/* Vamos construir um simples aplicativo de enquete!

Uma enquete tem uma pergunta, um array de opções para as quais as pessoas podem escolher e um array com o número de respostas para cada opção.
Esses dados estão armazenados no objeto inicial abaixo.

Aqui estão suas tarefas:

Crie um método chamado 'registerNewAnswer' no objeto 'poll'. O método faz 2 coisas:

1.1. Exibe uma janela de prompt para o usuário inserir o número da opção selecionada.
    O prompt deve ser assim: Qual é a sua linguagem de programação favorita? 0: JavaScript 1: Python 2: Rust 3: C++ C

1.2.
    1.2.1. Com base no número de entrada, atualize o array de respostas. Por exemplo, se a opção for 3, aumente o valor NA POSIÇÃO 3 do array em 1.
    1.2.2. Certifique-se de verificar se a entrada é um número e se o número faz sentido (por exemplo, a resposta 52 não faria sentido, certo?) 2.
    1.2.3. Chame este método sempre que o usuário clicar no botão "Responder enquete". 3.
    Crie um método 'displayResults' que exiba os resultados da enquete.
    O método recebe uma string como entrada (chamada 'type'), que pode ser 'string' ou 'array'.
    Se o tipo for 'array', simplesmente exiba o array de resultados como está, usando console.log(). Esta deve ser a opção padrão.
    Se o tipo for 'string', exiba uma string como "Os resultados da enquete são 13, 2, 4, 1". 4.
    Execute o método 'displayResults' no final de cada chamada do método 'registerNewAnswer'.

DICA: Use muitas das ferramentas que você aprendeu nesta e na última seção 😉

BÔNUS: Use o método 'displayResults' para exibir os 2 arrays nos dados de teste. Use tanto a opção 'array' quanto 'string'. NÃO coloque os arrays no objeto da enquete! Então, como deve ser a palavra-chave this nesse caso?

DADOS DE TESTE BÔNUS 1: [5, 2, 3] DADOS DE TESTE BÔNUS 2: [1, 5, 3, 9, 6, 1]

BOA SORTE 😀 */

// // ----------------------- Resolução do Professor (início) -----------------------

// const poll = {
//     question: 'What is your favourite programming language?',
//     options: [
//         '0: JavaScript',
//         '1: Python',
//         '2: Rust',
//         '3: C++'
//     ],
//     // This generates [0, 0, 0, 0]. More in the next section 😃
//     answers: new Array(4).fill(0),

//     registerNewAnswer() {
//         // Get answer
//         const answer = Number(
//             prompt(
//                 `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//             )
//         );
//         console.log(answer);

//         // Register answer
//         typeof answer === 'number' && answer < this.options.length && answer >= 0 &&
//             this.answers[answer]++;

//         this.displayResults();
//         this.displayResults('string');
//     },

//     displayResults(type = 'array') {
//         if (type === 'array') {
//             console.log(this.answers);
//         } else if (type === 'string') {
//             console.log(`Poll results are ${this.answers.join(', ')}.`)
//         }
//     },

// };

// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));
// //em uma função de manipulador de eventos igual a essa a palavra this aponta para ela, para solucionar adicionamos o .bind('nome de onde queremos a palavra chave')

// // poll.registerNewAnswer();

// // --- Exercicio bonus ---
// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');


// ----------------------- Resolução do Professor (Fim) -----------------------



// ----------------------- Minha resolução (início) -----------------------
// const poll = {
//     question: 'What is your favourite programming language?',
//     options: [
//         '0: JavaScript',
//         '1: Python',
//         '2: Rust',
//         '3: C++'
//     ],
//     // This generates [0, 0, 0, 0]. More in the next section 😃
//     answers: new Array(4).fill(0),
//     registerNewAnswer(type = 'array') {
//         document.querySelector('.poll').addEventListener('click', function () {

//             const answer = Number(prompt(poll.question + poll.options + '(Escreva o número da opção)'))

//             if ((typeof answer) == 'number' && answer >= 0 && answer < 4) {
//                 poll.answers[answer] = poll.answers[answer] + 1;
//                 poll.displayResults(type);
//             } else {
//                 alert(`Por favor, tente novamente '${answer}' não corresponde a nenhuma das opções`)
//             }

//         });
//     },

//     displayResults(type) {
//         if (type == 'array') {
//             console.log(poll.answers)
//         } else if (type == 'string') {

//             console.log(`Os resultados da enquete são ${[...poll.answers]}.`);
//         }

//     },
// };

// const registerNewAnswer = poll.registerNewAnswer('string');

// const teste = poll.registerNewAnswer();

// ----------------------- Minha resolução (Fim) -----------------------




// // //------------- 137. Immediately Invoked Function Expression (IIFE)  -------------

// // -- Expressão de Função imediatamente invocada// serve para usar a função apenas uma vez

// // (IIFFE)
// (function () {
//     console.log('This will never run again');
//     const isPrivate = 23;
//     // tem acesso ao escopo externo
// })();

// // console.log(isPrivate); // o escopo global não tem acesso a nada dentro de um escopo

// (() => console.log('This will also never run again')
// )();

// //let e const criam seu próprio escopo dentro de um bloco {}

// {
//     const isPrivate = 21;
// }

// console.log(isPrivate) // tambem não pode ser acessado pois foi criado em um bloco (não se aplica a 'VAR');



// // //------------- 138. Closures  -------------

// //Não criamos encerramento explicitamente/manualmente ele acontece automaticamente em certas situações só precisamos reconhecer essas situações

// // o encerramento faz a função lembrar de todas a variáveis presentes no momento da criação da função essencialmente
// //Qualquer função sempre tem acesso ao ambiente variável do contexto de execução no qual a função foi criada.


// const secureBooking = function () {
//     let passengerCount = 0;

//     return function () { // essa função se lembra de tudo de seu local de nascimento no momento em que foi criada
//         passengerCount++;
//         console.log(`${passengerCount} passenger`);
//     };
// };

// const booker = secureBooking();
// // (Criando a função booker) passengerCount = 0, (1ª chamada de booker) passengerCount = 1, (2ª chamada de booker)passengerCount = 2.


// // passageCount é definida no escopo em que a função booker foi realmente criada
// booker();
// booker();
// booker();

// console.dir(booker);


// // //------------- 139. More Closures Examples  -------------

// // Exemple 1
// let f;

// const g = function () {
//     const a = 23;
//     f = function () {
//         console.log(a * 2);
//     };
// };

// const h = function () {
//     let b = 555;
//     f = function () {
//         console.log(b * 2);
//     }
// }

// g();
// f(); //retorna 46

// // Re-assingning f function
// h();
// f(); //retorna 1110

// console.dir(f);

// // Exemple 2
// const boardPassengers = function (n, wait) {
//     const perGroup = n / 3;

//     setTimeout(function () {
//         console.log(`We are now boarding all ${n} passengers`);
//         console.log(`There are 3 groups, each with ${perGroup} passengers`);
//     }, wait * 1000);

//     console.log(`Will star boarding in ${wait} seconds`);
// }

// const perGroup = 1000;
// //Por conta do fechamento, ele utiliza a variável que está em seu escopo, se não existisse ai sim ele pegaria a do escopo global
// boardPassengers(180, 3);



// //------------- 140. Coding Challenge #2  -------------

///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, 
attach an event listener that changes the color of the selected h1 element ('header') to blue,
each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. 
Think about WHEN exactly the callback function is executed, 
and what that means for the variables involved in this example.

GOOD LUCK 😀


Desafio de Codificação #2

Este é mais um desafio de raciocínio do que um desafio de codificação 🤓

Pegue a IIFE (Immediately Invoked Function Expression - Função Imediatamente Invocada) abaixo e, 
no final da função, anexe um ouvinte de evento que mude a cor do elemento h1 selecionado ('header') para azul, 
cada vez que o elemento BODY for clicado. NÃO selecione o elemento h1 novamente!

E agora, explique para SI MESMO (ou alguém ao seu redor) POR QUE isso funcionou! Leve o tempo que precisar. 
Pense sobre QUANDO exatamente a função de retorno de chamada (callback) é executada e o que isso significa para 
as variáveis envolvidas neste exemplo.

BOA SORTE 😀
*/


(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click', function () {
        header.style.color = 'blue';
    });

})();

//Explicação em minhas palavras,
//a variavel dentro do evento de ouvinte ainda funciona mesmo após a função de execução imediata ja ter se encerrado,
// pois ela se "lembra" de suas informações no momento de seu nascimento, ou seja as informações de seu escopo no momento da criação.
