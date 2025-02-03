'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////


const renderCountry = function(data, className){
    const html = `
            <article class="country ${className}">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
                <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
                <p class="country__row"><span>💰</span>${data.currencies[0].code}</p>
            </div>
            </article>
        `
    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
}

// -----------------------------  258. Our First AJAX Call: XMLHttpRequest -----------------------------
// -----------------------------  260. Welcome to Callback Hell -----------------------------

 // MANEIRA ANTIGA de fazer requisição
/*
    // AJAX call country (1)
 const getCountyAndNeighbour = function(country) {
    const request = new XMLHttpRequest();

    request.open('GET', `https://restcountries.com/v2/name/${country}`)
    request.send();

    request.addEventListener('load', function(){
        // console.log(this.responseText)

        const [data] = JSON.parse(this.responseText);
        console.log(data);

        renderCountry(data);
        

            // Get neighbour country (2)
            const [neighbour] = data.borders;
            console.log(neighbour);
            if(!neighbour) return;
            
            const request2 = new XMLHttpRequest();
            request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);           
            request2.send();
        
            request2.addEventListener('load', function(){
                const data2 = JSON.parse(this.responseText); 
                 console.log(data2)
                 renderCountry(data2, 'neighbour');
            });
    });

};

getCountyAndNeighbour('brasil');
// getCountyAndNeighbour('brasil');
// getCountyAndNeighbour('argentina');


// callback HELL
setTimeout(()=> {
    console.log('1 second');
    setTimeout(()=> {
        console.log('2 second');
        setTimeout(()=> {
            console.log('3 second');
            setTimeout(()=> {
                console.log('4 second');
            },1000);
        },1000);
    },1000);
},1000);

*/

// -----------------------------  262. Consuming Promises -----------------------------

// const getCountryData = function(country){
//     fetch(`https://restcountries.com/v2/name/${country}`)
//      .then(function(response){
//         console.log(response);
//         return response.json(); // é preciso chamar o método json para deixar que os dados fiquem disponiveis para serem acessados, porém ele retorna uma promises então é necessario chamar o then novamente.
//     })
//         .then(function(data){
//         console.log(data);
//         renderCountry(data[0]);
//     });
// };

// Versão simplificada do que foi apresentado acima
// const getCountryData = function(country){
//     fetch(`https://restcountries.com/v2/name/${country}`)
//      .then((response) => response.json())
//      .then((data) =>renderCountry(data[0])
//     );
// };


// -----------------------------  263. Chaining Promises -----------------------------

// const getJSON = function(url, errorMsg = 'Algo deu errado!'){
//     fetch(url).then(response => {        
//         if(!response.ok)
//             throw new Error(`${errorMsg} (${response.status})`);

//         return response.json();    
//     });
// };

// const getCountryData = function(country){
//      // Country 1
//     fetch(`https://restcountries.com/v2/name/${country}`)
//      .then(response => {
//         console.log(response);
//         if(!response.ok)
//             throw new Error(`Country not fount (${response.status})`)
//         return response.json()
//     //  ,err =>alert(err) exemplo 1
// })
//      .then(data => {

//          renderCountry(data[0]);

//          const neighbour = data[0].borders[0];

//          if(!neighbour) return;

//          // Country 2
//         return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);          
//     }) // deve ser utilizado o then fora da function de retorno, para não ter função de callback dentro de outra
//     // primeiro deve se retornar a pomises e depois lidar com ela
//         .then((response)=>{

//             if(!response.ok)
//                 throw new Error(`Country not found (${response.status})`)
//             return response.json()

//             })
//         .then(data => renderCountry(data, 'neighbour'))
//         .catch(err => {
//             console.error(`${err}😒`);
//             renderError(`${err.message} tente novamente!`);
//         }) // Exemplo 2 e mais ideal pois captura qualquer lugar que ocorra erro de toda essa cadeia
//         .finally(() => {
// countriesContainer.style.opacity = 1;
//         }) // independente de falhar ou não esse método é chamado
// };


////////////////

// const getJSON = function(url, errorMsg = 'Algo deu errado!'){
//     return fetch(url).then(response => {        
//         if(!response.ok)
//             throw new Error(`${errorMsg} (${response.status})`);

//         return response.json();    
//     });
// };

// const renderError = function(msg){
//     countriesContainer.insertAdjacentText('beforeend', msg);
//     countriesContainer.style.opacity = 1;
// }

// const getCountryData = function(country){
//     // Country 1
//     getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not fount')    
//     .then(data => {
//         renderCountry(data[0]);

//         const neighbour = data[0].borders?.[0] || null;    
      
//         if(!neighbour) throw new Error(`Nenhum vizinho encontrado`);

//         // Country 2
//        return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`, 'Country not found');          
//    }) 
//        .then(data => renderCountry(data, 'neighbour'))
//        .catch(err => {
//         //    console.error(`${err}😒`);
//            renderError(`${err.message} tente novamente!`);
//        }) 
//        .finally(() => {
// countriesContainer.style.opacity = 1;
//        })
// };



// btn.addEventListener('click', function(){

//     getCountryData('australia');
//     // getCountryData('brasil');
// });



// getCountryData('portugal');



///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀


Desafio: Criar a função whereAmI para exibir um país com base em coordenadas GPS
Parte 1
Criar uma função chamada whereAmI que recebe uma latitude (lat) e uma longitude (lng) como entrada.
Realizar a geocodificação reversa, ou seja, converter as coordenadas em um local significativo (cidade e país). Para isso, utilizar a API:
Exemplo de URL para a requisição:
https://geocode.xyz/52.508,13.381?geoit=json
https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lgn}
Utilizar fetch() e promises para obter os dados. Não usar getJSON.
Após obter os dados, exibir no console uma mensagem como:
"Você está em Berlim, Alemanha"
Adicionar .catch() ao final da cadeia de promises para capturar e registrar erros no console.
A API permite apenas 3 requisições por segundo. Se recarregar rapidamente, pode aparecer um erro 403. Como fetch() não rejeita automaticamente nesse caso, é necessário criar manualmente um erro com uma mensagem significativa.
Parte 2
Com os dados obtidos, usar o país retornado na API de geocodificação para buscar informações sobre ele na API de países.
Renderizar as informações do país e capturar erros, da mesma forma que fizemos anteriormente.
Coordenadas para teste:
52.508, 13.381 (Latitude, Longitude)
19.037, 72.873
-33.933, 18.474


geocodificação reversa

*/
// PART 1
// const whereAmI = function(lat, lgn){
//     fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lgn}`)
//         .then(response => console.log(response))
//         .then(data => console.log(data, `Você está em ${data.city}, ${data.countryName}`))
//         .catch(err => alert(err.message))
//     };


// PART 2
const whereAmI = function(lat, lgn){
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lgn}`)
        .then(function(response) {

            if(!response.ok) throw new Error(`Erro (${response.status})`);
                
            return response.json();  
           
        })
        .then(function(data) {
            console.log(`Você está em ${data.city}, ${data.countryName}`)

            return fetch(`https://restcountries.com/v2/name/${data.countryName}`)
        })
            .then(response => response.json())
            .then(function(data2){
               console.log(data2);
               renderHTML2(data2[0]);

            })
            // .catch(err => alert(err.message))
            
    };
    

const renderHTML2 = function(data){
    const HTML2 = `
        <article class="country">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
                <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
                <p class="country__row"><span>💰</span>${data.currencies[0].code}</p>
            </div>
        </article>
    `

    countriesContainer.insertAdjacentHTML('beforeend', HTML2);
    countriesContainer.style.opacity = 1;
};

whereAmI(52.508, 13.381);












