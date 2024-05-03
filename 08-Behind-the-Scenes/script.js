'use strict';

function calcAge(birthYear) {
    const age = 2024 - birthYear;

    function printAge() {
        //Criando uma nova variável com o mesmo nome da variavel do outro escopo
        const firstName = 'Diow'; /* Como encontrou o 'firstName' no escopo ele nao vai para a cadeia de escopo */
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
            /* o output  do escopo pai continua com o mesmo valor inicial  
            essa nova variavel é diferente do escopo pai*/

            /* em um escopo filho nao criamos a variavel novamente
             apenas redefinimos a variavel do escopo pai*/
            console.log(output)
            //Reatribuindo a variável de escopos externos
            output = 'NEW OUTPUT';
        }

        if (true) {
            console.log(millernial); /* Funciona */
        }

        console.log(millernial); /* Funciona */
        /* 'var' tem escopo de função, funciona dentro da mesma função que foi chamada, portando elas ignoram o bloco */


        //console.log(add(2, 3)); /* Não funciona apenas para o modo estrito*/
        console.log(output);

        // console.log(str); /* Não funciona */
        /* 'let' e 'const' tem escopo de bloco, portando so funcionam dentro do bloco,
        porem os blocos internos tem acesso aos blocos externos nunca ao contrário*/

    }
    printAge();

    //console.log(millernial);/* Não funciona, pois está fora da função que foi chamada */
    return age;

}

const firstName = 'Jorge';
calcAge(1991);
