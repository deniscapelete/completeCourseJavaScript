'use strict'
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

*/

// const interface = 'Audio'; (a palavra 'interface' é reservada para um recurso no JS)

// const private = 534; (a palavra 'privado' é reservada para um recurso no JS)



// Function declaration (função são apenas valores)

/*

function fruitProcessor(alimento1, alimento2) { 
  console.log(alimento1, alimento2);
const juice = `Suco de ${alimento1} com ${alimento2} !!!`;
return juice;
}



const suco = fruitProcessor('limão', 'couve');

console.log(suco);



function calculateBmi (peso, altura) {
  return peso/(altura*altura)
  
};

const imc = calculateBmi (67, 1.82);

console.log(imc);

// Function declaration (pode ser chamada antes de ser definido)

//const age1 = calcAge1(1995); aqui ele tambem funciona

function calcAge1 (birthYeah) {
  return 2024 - birthYeah;
}
const age1 = calcAge1(1995);
console.log (age1);

// Function declaration (Expressão / Função anonima) pois retorna valor

//const age2 = calcAge2 (1995); aqui ele não funciona

const calcAge2 = function (birthYeah) {
  return 2024 - birthYeah;
}
const age2 = calcAge2 (1995);
console.log (age2);

*/

// Arrow function (função de seta não obtém a palavra chave)
const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3); 

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`
}

console.log (yearsUntilRetirement(1995, "Dênis"));
console.log (yearsUntilRetirement(1996, "Ariel"));