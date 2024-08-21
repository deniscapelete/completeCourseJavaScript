'use strict';


//------------- 129. Default Parameters -------------
//valor padrão

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