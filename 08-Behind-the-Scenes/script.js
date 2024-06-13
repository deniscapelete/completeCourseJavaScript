'use strict';
/*
function calcAge(birthYear) {
    const age = 2024 - birthYear;

    function printAge() {
        //Criando uma nova variável com o mesmo nome da variavel do outro escopo
        const firstName = 'Diow';  //Como encontrou o 'firstName' no escopo ele nao vai para a cadeia de escopo 
        let output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);


        if (birthYear >= 1981 && birthYear <= 1996) {
            var millernial = true;
            const str = `Oh, and you're a millenial, ${firstName}`
            console.log(str);

            function add(a, b) {
                return a + b;
            }

            //const output = 'NEW OUTPUT'; 
             //o output  do escopo pai continua com o mesmo valor inicial  
           // essa nova variavel é diferente do escopo pai

             //em um escopo filho nao criamos a variavel novamente
             //apenas redefinimos a variavel do escopo pai
            console.log(output)
            //Reatribuindo a variável de escopos externos
            output = 'NEW OUTPUT';
        }

        if (true) {
            console.log(millernial);  //Funciona 
        }

        console.log(millernial); //Funciona 
         //'var' tem escopo de função, funciona dentro da mesma função que foi chamada, portando elas ignoram o bloco 


        //console.log(add(2, 3));  //Não funciona apenas para o modo estrito
        console.log(output);

        // console.log(str);  //Não funciona 
         //'let' e 'const' tem escopo de bloco, portando so funcionam dentro do bloco,
       // porem os blocos internos tem acesso aos blocos externos nunca ao contrário

    }
    printAge();

    //console.log(millernial); Não funciona, pois está fora da função que foi chamada 
    return age;

}
const firstName = 'Jorge';
calcAge(1991);
*/



/*

//Variables
console.log(me); // indefinida - Como não foi declarada vem com indefinida
//console.log(job); // ReferenceError - So pode ser utilizada a apos ser declarada
//console.log(year); // ReferenceError -So pode ser utilizada a apos ser declarada

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3)); // Declaração de função pode ser usada ante de declarar
//console.log(addExpr(2, 3));  // ReferenceError - So pode ser utilizada a apos ser declarada
//console.log(addArrow(2, 3)); //  ReferenceError - So pode ser utilizada a apos ser declarada
//console.log(addExprVar(2, 3)); // É a mesma coisa de chamarmos undefined(2,3)
//console.log(addArrowVar(2, 3)); // É a mesma coisa de chamarmos undefined(2,3)

function addDecl(a, b) {
    return a + b;
};

const addExp = function addDecl(a, b) {
    return a + b;
}
const addArrow = (a, b) => a + b;


var addExpVar = function addDecl(a, b) {
    return a + b;
}
var addArrowVar = (a, b) => a + b;

// váriaveis declaradas com var serão içadas e definidas como indefinidas


// Example bug
if (!numProducts) deleteShoppingCart();
//Nesse momento numProducts não está definido então ele assume o valor de 'undefined' que é um valor falso com isso a função é executada

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All poducts deleted!');
}

//Como evitar esses erros - melhores praticas
//1- Não utilizar var
//2- Ao declarar função dê preferencia para usar const
//3- Declarar as variáveis no topo de cada escopo
//4- Sempre declare suas funções primeiro e a use somente após a declaração.

//Para acessar o objeto janela digite 'Window' no console
var x = 1; // Cria propriedade no objeto janela global. e isso pode ter implicações em alguns casos.
let y = 2; // Não cria propriedade no objeto janela global.
const z = 3; // Não cria propriedade no objeto janela global.

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);


*/

/* 'this' palavra-chave na prática */

/*

console.log(this); // aqui retorna o Window

const calcAge = function (birthYear) {
    console.log(2037 - birthYear);
    console.log(this); 
};

calcAge(1991);// Função normal obtém sua própria palavra chave do disco e aqui é indefinido

*************************

const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this); 
};
calcAgeArrow(1980);// retorna Window, a função seta não obtém sua própria palavra-chave de disco, ela usa a palavra chave lexical this,
    // o que significa que usa a palavra chave disc de sua função pai ou seu escopo pai

*************************

const jonas = {
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);
    },
};
jonas.calcAge(); // Quando temos uma chamada de método, a palavra-chave disco do métpdp será o objeto que está chamando o método.
// neste caso esse é o objeto Jonas, aqui basicamente Jonas é o dono do método.

*************************

const matilda = {
    year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f(); // Retorna indefinido porque agora é uma chamda de uma função regular, não está ligada a nenhum objeto

*/



// const jonas = {
//     firstName: 'Jonas',
//     year: 1991,
//     calcAge: function () {
//         console.log(this); // 'this' refere-se ao objeto jonas
//         console.log(2037 - this.year); // funciona corretamente, pois this.year é 1991


//         ///////////////////// 

//         // const isMillenial = function () {
//         //     console.log(this);
//         //     console.log(this.year >= 1981 && this.year <= 1996);
//         // };
//         // isMillenial(); // dentro de uma chamada de função regular a palavra chave é indefinida, (função dentro de função)
//         //a função regular obtém sua prorpia palavra chave por isso da erro
//         //////////////////////////  Abaixo segue duas maneiras para corrigir esse problema



//         ///////////////////// Solução 1 - antiga pré-ES6

//         // const self = this; // Criamos uma variavel para ter acesso as palavras-chave para jonas
//         // const isMillenial = function () {
//         //     console.log(self);
//         //     console.log(self.year >= 1981 && self.year <= 1996);
//         // };
//         // isMillenial(); 

//         /////////////////////




//         ///////////////////// Solução 2 - atual no ES6    
//         //funciona com a função de seta pois ela não tem sua propria palavra chave, ela usa do escopo pai, neste caso é de calcAge

//         const isMillenial = () => {
//             console.log(this);
//             console.log(this.year >= 1981 && this.year <= 1996);
//         };
//         isMillenial();




//     },

//     greet: () => console.log(`Hey ${this.firstName}`), // 'this' refere-se ao escopo global, nunca utilizar para definir um método (igual aqui)
// };

// jonas.greet();// 'this' refere-se ao escopo global, onde 'firstName' é undefined3 
// jonas.calcAge(); // 'this' refere-se a 'jonas', então o cálculo funciona corretamente 




// //argument keyword
// const addExpr = function (a, b) {
//     console.log(arguments);
//     return a + b;

// };


// addExpr(2, 5);
// addExpr(2, 5, 8, 12);
// //Com a palavra chave arguments, mesmo passando apenas dois parametros consigo incluir mais argumentos além desses dois, funciona apenas em função regular.


// var addArrow = (a, b) => {
//     console.log(arguments);
//     return a + b;
// }

// console.log(addArrow(2, 5, 8));

// //A palavra chave arguments não funciona em função de seta, dessa forma os argumentos não são definidos 






// ************** Primitive types **************
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis'
console.log(lastName, oldLastName);


// ************** Reference types **************
const jessica = {
    firstName: 'Jessica',
    lastame: 'Willians',
    age: 27,
};


//Aqui ele não copia ele simplesmente utiliza a mesma referencia salva no heap.
//Logo se eu fizer qualquer alteração  em 'marriedJessica' ele ira alterar tambem em 'jessica'
const marriedJessica = jessica;

marriedJessica.lastName = 'Davis';
console.log(jessica);
console.log(marriedJessica)


//não é possivel fazer isso pois estaria criando um novo objeto, 
//pois esse novo objto será armazenado em um lugar diferente da memória,a referencia na variavel tera que mudar por ser uma constante
//marriedJessica = {}; 

//Alterar completamente um objeto é diferente de alterar apenas as propriedade


// ************** Copying objects **************


const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Jose',
    age: 55,
};



//cria apenas uma copia superficial
//se houver um objeto dentro de outro, o objeto interno apontara para o mesmo lugar na memória
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Arroba';

console.log(jessica2);
console.log(jessicaCopy);



//************** Exemplo da copia superficial **************

const jessica3 = {
    firstName: 'Jessica',
    lastName: 'Jose',
    age: 55,
    family: ['Alice', 'Bob'],
};

const jessicaCopy3 = Object.assign({}, jessica3);
jessicaCopy.lastName = 'Arroba';

jessicaCopy3.family.push('Mary');
//com essa alteração family passa a ter 4 em 'jessicaCopy3' e em 'jessica', pois ambos utilizam a mesma referencia no heap

console.log(jessica3);
console.log(jessicaCopy3);