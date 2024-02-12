/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

const firstName = 'Matilda';
console.log(firstName);
console.log(firstName);
console.log(firstName);

let person = 'Jonas';
let PI = 3.1415;

let myFirstJob = 'coder';
let myCurrentJob = 'Teacher';

let country = 'Brasil';
let continent = 'America do Sul';
let population = 100000000;

console.log(country);
console.log(continent);
console.log(population);
console.log(country + ' localizado na ' + continent);

true;
console.log(true);
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1992;
console.log(typeof year);

const isIsland = 'not';

const language = 'Portugues';

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2**3 = dois elevado a três (2 * 2 * 2)

const lastName = 'schmedmann';
console.log(firstName + ' ' + lastName);

//Assignment operators
let x = 10 + 5; // x=15
x += 10; // x = x + 10 = 25
x /= 5; // x = x / 5 = 5
x *= 20; // x = x * 20 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x = x-+ 1 = 99

console.log(x);

// comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=

console.log(ageSarah >= 18);

console.log(now - 1991 > now - 2018);

let halfPopulationCountry = population / 2;

console.log('Metade da população do país: ' + halfPopulationCountry);

population++;

console.log(population);

const finlandiaPopulation = 6000000;

console.log(population > finlandiaPopulation);

const averagePopulationCountry = 33000000;

console.log(population > averagePopulationCountry);

const description = country + ' está na ' + continent + ', e seus ' + population + ' de habitantes falam ' + language;

console.log(description);

let q, w;

q = w = 25 - 10 - 5; // q = w = 10, q = 10
console.log(q, w);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

*/




/*-------------------------------- DESAFIO #1 --------------------------------*/

/*
const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log('IMC Mark: ' + BMIMark + ' IMC John: ' + BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;

console.log('O IMC de Mark é maior que o de John? ' + markHigherBMI);
*/

/*

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year =2037;

const jonas = "I'm " + firstName + ', a ' + (year-birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);

*/

/*

const age = 17;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log('Sarah can start driving license');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`)
}


if (age >=18) {
  console.log('Sarah can start driving license');
} else {
  console.log("Sarah can't start driving license")
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);



const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn); 

*/

/* Write your code below. Good luck! 🙂 */

/*

if (BMIMark > BMIJohn) {
    console.log(`O IMc de Mark ( ${BMIMark} )  é maior que o IMC de John ( ${BMIJohn} )`)
} else if (BMIMark === BMIJohn) {
    console.log(`O IMc de Mark ( ${BMIMark} )  é igual ao do IMC de John ( ${BMIJohn} )`)
} else {
    console.log(`O IMc de Mark ( ${BMIMark} )  é menor ao do IMC de John ( ${BMIJohn} )`)
}



if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
}

*/

/*
// type conversion
const inputYear = '1991';
console.log(Number(inputYear, inputYear)); // transforma o primeiro em numero
console.log(inputYear + 18);

console.log(Number('Jonas')); // transforma o primeiro em numero (porém um NaN (não um número) numero inválido)
console.log(typeof NaN);

console.log(String(23), 23); // transforma o primeiro em string


// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' -3) // retonarna 10
console.log('24' / '2'); // retorna 12

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);

*/

//são falsos quando tentamos converte-los em booleanos
// 5 falsy values 0, 'string vazia',undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

// Nos exemplos abaixo temos as dois casos

// 1º caso - o money é igual a zero, logo ao converte-lo para boleano ele se torna false
/*
const money = 0;
if (money) {
  console.log("Don't spend it all ;)")
} else {
  console.log('You Should get a job!');
}
*/


// 1º caso - o dinheiro é igual a um, logo ao converte-lo para boleano ele se torna false (qualquer numero diferente de zero é true )
const dinheiro = 1;
/*
if (dinheiro) {
  console.log("Don't spend it all ;)")
} else {
  console.log('You Should get a job!');
}

let height;
if (height) {
  console.log ('YAY, Height is defined');
} else {
  console.log('Height is UNDEFINED')
}

*/


/*
const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log('9 is cool')
} else if (favourite === 7) {
console.log('7 is cool')
} else if (favourite === 9) {
  console.log('9 is cool')
} else {
  console.log('Number is not 23 or 7 or 9')
}

if(favourite !== 23) console.log('Why not 23?');

*/


/*

const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100){
  console.log('Dolphins win the trophy unicode👋');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100){
  console.log('Koalas win the trophy unicode👋');
} else if (scoreKoalas === scoreDolphins && scoreKoalas>=100){
  console.log('Both win the trophy');
} else {
  console.log ('No one wins the trophy');
}

*/

//switch - projetado para igualdade e não para comparação
const day = 'thursday';

switch (day) {
  case 'monday': //day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break; // server para para o código, se não ele continua até o fim.
  case 'tuesday':
    console.log('prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;  
  default:
    console.log('Not a valid day!');
}


if (day==='monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day==='tuesday') {
  console.log('prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log ('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}


//EXPRESSOES E DECLARAÇÕES

3 + 4 // expressão
1991
true && false && !false

if (23 > 10){  // declaração
  const str = '23 is bigger';

}

const me = 'Jonas';
console.log(`I'm ${2037 - 1991} year old ${10}`)





// OPERADOR CONDICIONAL também chamado de operador ternário

const age = 17;
age >= 18 ? console.log('I like to drink wine') :
console.log('I like to drink water');

// um operador porduz um valor, logo, ele é uma expressão

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink)

let drink2;
if (age >= 18) {
  drink2 = 'wine';
} else {
  drink2 = 'water';
}

console.log(drink2);




const bill = 275;

const tip = bill >= 50 || bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log (`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);


console.log (tip * bill + bill);

if (bill >= 50 || bill <= 300){
  tip = bill * 0
}