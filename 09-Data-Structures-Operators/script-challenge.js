'use strict';

/*
Data Structures, Modern Operators and Strings

Coding Challenge #1

We're building a football betting app (soccer for my American friends )!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:

1. Create one player array for each team (variables 'players1' and
'players2')

2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players

3. Create an array 'allPlayers' containing all players of both teams (22
players)

4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')

6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)

7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.

Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
GOOD LUCK 
*/

///////////////////////////////////////

/*
Estruturas de Dados, Operadores Modernos e Strings

Desafio de Codificação #1

Estamos construindo um aplicativo de apostas de futebol (soccer para os meus amigos americanos)!
Suponha que recebemos dados de um serviço web sobre um determinado jogo 
(variável 'game' na próxima página).
 Neste desafio, vamos trabalhar com esses dados.
Suas tarefas:

1. Crie um array de jogadores para cada time (variáveis 'players1' e 'players2').

2. O primeiro jogador em qualquer array de jogadores é o goleiro e os outros são jogadores de campo.
Para o Bayern Munich (time 1), crie uma variável ('gk') com o nome do goleiro, e um array ('fieldPlayers') 
com todos os 10 jogadores de campo restantes.

3. Crie um array 'allPlayers' contendo todos os jogadores de ambos os times (22 jogadores).

4. Durante o jogo, o Bayern Munich (time 1) usou 3 jogadores substitutos. Então, crie um novo array
('players1Final') contendo todos os jogadores originais do time 1 mais 'Thiago', 'Coutinho' e 'Perisic'.

5. Com base no objeto game.odds, crie uma variável para cada odd (chamada 'team1', 'draw' e 'team2').

6. Escreva uma função ('printGoals') que recebe um número arbitrário de nomes de jogadores (não um array)
e imprime cada um deles no console, junto com o número total de gols que foram marcados 
(número de nomes de jogadores passados).

7. O time com a menor odd é mais provável de ganhar. Imprima no console qual time é mais provável de ganhar,
 sem usar uma declaração if/else ou o operador ternário.

Dados de teste para o item 6: Primeiro, use os jogadores 'Davies', 'Muller', 'Lewandowski' e 'Kimmich'.
Depois, chame a função novamente com jogadores de game.scored.

BOA SORTE

*/

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },

  printgoals: function (player1, player2, player3, player4, goals) {
    console.log(player1, player2, player3, player4, goals)
  },

};

// 1)
const players1 = [...game.players[0]];
const players2 = [...game.players[1]];

console.log(players1);
console.log(players2);


// 2)
const [gk, ...fieldPlayer] = [...players1];

console.log(gk, fieldPlayer);


// 3)
const allPlayers = [...game.players[0], ...game.players[1]];

console.log(allPlayers)

// 4)
const players1Final = [...game.players[0], 'Thiago', 'Coutinho', 'Perisic'];

console.log(players1Final);


// 5)
const { team1, x, team2 } = { ...game.odds };

console.log(team1, x, team2);


// 6)

game.printgoals(...game.scored, game.scored.length);


// 7)


