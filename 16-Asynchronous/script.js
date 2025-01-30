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

const getJSON = function(url, errorMsg = 'Algo deu errado!'){
    return fetch(url).then(response => {        
        if(!response.ok)
            throw new Error(`${errorMsg} (${response.status})`);

        return response.json();    
    });
};

const renderError = function(msg){
    countriesContainer.insertAdjacentText('beforeend', msg);
    countriesContainer.style.opacity = 1;
}

const getCountryData = function(country){
    // Country 1
    getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not fount')    
    .then(data => {

        renderCountry(data[0]);

        const neighbour = data[0].borders[0];      

        if(!neighbour) throw new Error(`Nenhum vizinho encontrado`);

        // Country 2
       return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`, 'Country not found');          
   }) 
       .then(data => renderCountry(data, 'neighbour'))
       .catch(err => {
           console.error(`${err}😒`);
           renderError(`${err.message} tente novamente!`);
       }) 
       .finally(() => {
countriesContainer.style.opacity = 1;
       })
};



btn.addEventListener('click', function(){

    getCountryData('australia');
    // getCountryData('brasil');
});



// getCountryData('portugal');