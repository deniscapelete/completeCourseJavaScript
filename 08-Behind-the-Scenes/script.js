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

