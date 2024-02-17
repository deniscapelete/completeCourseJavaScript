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


/*

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

*/

/*

// Functions Calling Other Functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice =`Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`
  return juice;
}

console.log(fruitProcessor(2, 3));

*/

/*

const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}

const yearsUnitRetirement = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;
}

if (retirement >0 ) {
  return retirement;
  console.log(`${firtName} retires in ${retirement} years`);
} else {
  return -1;
  console.log
}
*/

// 

const calcAverage = (note1, note2, note3) => (note1 + note2 + note3)/3;

//teste 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins>= 2 * avgKoalas){
    const dolphinsWin = console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
     return dolphinsWin
  } else if (avgKoalas>= 2 * avgDolphins){
     const KoalasWin = console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
      return KoalasWin
  } else {
    console.log('No team wins');
  }
}

checkWinner(scoreDolphins,scoreKoalas)


//teste 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

checkWinner(scoreDolphins,scoreKoalas);














const idade = ano => 2024 - ano;

console.log(idade(1995));



const maiorIdade = function(ano, nome){
  
  idade(ano);

  console.log(idade(ano));
  
  if (idade>=18) {
    console.log(`${nome} é maior de idade`)
    return 2
  } else {
    console.log(`${nome} é menor de idade`)
    return 1
  }
}


console.log(maiorIdade(1995, "Denis"))