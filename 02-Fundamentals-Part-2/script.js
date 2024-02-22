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

/*

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

///////////////////////////////////////
// Introduction to Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


///////////////////////////////////////
// Basic Array Operations (Methods)
const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}
*/

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
*/