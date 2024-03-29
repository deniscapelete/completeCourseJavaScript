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

/*
const jonasArray = [
  'Jonas',
  'Santos',
  2024 - 1991,
  'teacher',
  ['Michel', 'Peter', 'Steven']
];

*/

// Introduction to Objects

/*
const jonas = {
  firstName: 'Jonas',
  lastName: 'Santos',
  age: '2024-1991',
  job: 'teacher',
  friends: ['Michel', 'Peter', 'Steven']
}
console.log(jonas);

console.log(jonas.lastName); // notação de pontos para recuperar elementos de um objeto
console.log(jonas['lastName']); // notação de colchetes para recuperar elementos de um objeto

const nameKey = 'Name';
console.log(jonas['first' + nameKey]) // notação de colchetes para recuperar elementos de um objeto
console.log(jonas['last' + nameKey])

// console.log(jonas.'last' + nameKey) assim não funciona

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn])
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
  }

  jonas.location = 'Portugal'; // notação de pontos para propriedades ao objeto.
  jonas['twitter'] = '@jonassantos'; // notação de colchetes para adicionar propriedades ao objeto.

  console.log(jonas);

  // Challenge
  //"Jonas has 3 friends, and his best friend is called Michael"
  console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)

*/

/*

const jonas = {
  firstName: 'Jonas',
  lastName: 'Santos',
  birthYeah: '1991',
  job: 'teacher',
  friends: ['Michel', 'Peter', 'Steven'],
  hasDriversLicense: true,

  // calcAge: function (birthYeah) { --- FORMA INCORRETA
  //   return 2037 - birthYeah; --- FORMA INCORRETA
  // } --- FORMA INCORRETA

  // calcAge: function () {
  //   //console.log(this);
  //   return 2037 - this.birthYeah;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  }, // desse jeito é melhor pois faz o calculo apenas uma vez caso precise ser chamado mais vezes no futuro

  getSummary: function () {

    return `${this.firstName} is a ${this.age}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
  }

};

// console.log(jonas.calcAge(jonas.birthYeah));--- FORMA INCORRETA
// console.log(jonas.calcAge(1991));--- FORMA INCORRETA
// console.log(jonas['calcAge'](1991));--- FORMA INCORRETA

console.log(jonas.calcAge());


console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

//Challenge
//"Jonas is a 46-year old teacher. anda he has a driver's license"


console.log(jonas.getSummary());

*/


/* CHALLENGE #3
Let's go back to Mark and John comparing their BMIs!

This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:

For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property, and also return it from the method.

Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.



👋 OPTIONAL: You can watch my solution in video format in the next lecture



IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).
*/
/*
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,

  calcBMI() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

mark.calcBMI();
john.calcBMI();



if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s ("${john.bmi})!`)

} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s ("${mark.bmi})!`)
}

console.log(mark.bmi, john.bmi);
*/

/*
  console.log(mark.bmi < john.bmi ? `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s ("${mark.bmi})!` : `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s ("${john.bmi})!`);

*/


/*

//Loop

// o loop continua em execução enquanto a condição for verdadeira
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Liftinf weigths repetition ${rep}`);
}


const jonasArray = [
  'Jonas',
  'Jose',
  2037 - 1995,
  'teacher',
  ['Michel', 'Peter', 'Steven'],
  true
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
  //Leitura da matriz jonas Array
  console.log(jonasArray[i], typeof jonasArray[i])

  //Preenchendo a matriz types
  //types[i] = typeof jonasArray[i];

  // Preenchendo a matriz atraves do metodo push (adiciona no final da matriz)
  types.push(typeof jonasArray[i]);
};

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continuar e interromper
console.log('--- ONLY STRINGS ---')

for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== 'string') continue; // continue é o mesmo que "pular para o próximo" ele continua o loop até o fim pulando onde a condição for verdadeira.

  console.log(jonasArray[i], typeof jonasArray[i])
};

console.log('--- BREAK WITH NUMBER ---')

for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === 'number') break; // assim que a condição for verdadeira ele para todo o processo e não continua o loop"

  console.log(jonasArray[i], typeof jonasArray[i])
};



let valor = 0.01;

for (let dia = 1; dia <= 30; dia++) {
  console.log("Dia " + dia + ": " + valor);
  valor = valor * 2;
}
*/


/*  Looping Backwards and Loops in Loops
const jonasArray = [
  'Jonas',
  'Jose',
  2037 - 1995,
  'teacher',
  ['Michel', 'Peter', 'Steven'],
  true
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = jonasArray.length - 1; i >= 0; i--) {
  console.log(i, jonasArray[i]);
}


for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`---------Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weight repetition ${exercise}.${rep}`)
  }
}
*/

/*

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Liftinf weigths repetition ${rep}`);
}

//While
let rep = 1;
while (rep <= 10) {
  console.log(`Liftinf weigths repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled  a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice == 6) console.log('Loop is about to end...')
}

*/

/*
CHALLENGE #4
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:

Create an array called bills containing all 10 test bill values.

Create empty arrays for the tips and the totals (tips and totals)

Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!



TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.



BONUS:

Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

Call the function with the totals array.



👋 OPTIONAL: You can watch my solution in video format in the next lecture
*/

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]; //conta

let tips = []; //gorjetas
let totals = []; // totais


const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(tips[i] + bills[i]);
  console.log(tips[i]);
  console.log(totals[i]);
}


const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(calcAverage(totals));
console.log(calcAverage(tips));
