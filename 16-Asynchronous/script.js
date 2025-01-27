'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////


/*

 // MANEIRA ANTIGA de fazer requisição

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

const request = fetch('https://restcountries.com/v2/name/portugal');

console.log(request);