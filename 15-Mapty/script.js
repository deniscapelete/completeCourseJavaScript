'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

class Workout {
    date = new Date();
    id = (Date.now() + '').slice(-10);

    constructor(coords, distance, duration){
    this.coords = coords; // [lat, lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
    }
}

class Running extends Workout {
    constructor(coords, distance, duration, cadence){
        super(coords, distance, duration);
        this.cadence = cadence;
        this.calcPace();
    }

    calcPace(){
        // min/km
        this.pace = this.duration / this.distance;
        return this.pace;
    }
}

class Cycling extends Workout {
    constructor(coords, distance, duration, elevationGain){
        super(coords, distance, duration);
        this.elevationGain = elevationGain;
        this.calcSpeed();
    }

    calcSpeed(){
        // km/h
        this.speed = this.distance / (this.duration/60);
        return this.speed;
    }
}


// const run1 = new Running([39, -12], 7.5, 30, 280);
// const cycling1 = new Cycling([39, -12], 35, 40, 623);
// console.log(run1, cycling1);

/////////////////////////////////////////////////////
// APPLICATION ARCHITECTURE

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class App {
    #map;
    #mapEvent;
    #workouts = [];

    constructor(){
        this._getPosition();

        form.addEventListener('submit', this._newWorkout.bind(this));    
        inputType.addEventListener('change', this._toggleElevationField);
    }

    _getPosition(){
        if(navigator.geolocation)
            navigator.geolocation.getCurrentPosition(this._loadMap.bind(this),
         function(){
                    alert('Não conseguimos a sua localização')
                }
            );
    }

    _loadMap(position){               
            const {latitude} = position.coords
            const {longitude} = position.coords
           console.log(`https://www.google.com.br/maps/@${latitude},${longitude}z?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D`);
           
           const coords = [latitude, longitude];
    
    console.log(this);

           this.#map = L.map('map').setView(coords, 14);
        //    console.log(map);    
                L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(this.#map);    
                // Handling clicks on map
                this.#map.on('click', this. _showForm.bind(this));  
    }

    _showForm(mapE){
        this.#mapEvent = mapE;
        form.classList.remove('hidden')
        inputDistance.focus()
    }

    _toggleElevationField(){
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    }


    _newWorkout(e){
        const validInputs = (...inputs) => 
            inputs.every(inp => Number.isFinite(inp));

        const allPositive = (...inputs) => inputs.every(inp => inp >0);

        e.preventDefault();

        // Get data from form
        const type = inputType.value;
        const distance = +inputDistance.value;
        const duration = +inputDuration.value;
        const {lat, lng} = this.#mapEvent.latlng;
        let workout;

        // Check if data is valid
        
        // If workout running, create running
        if(type === 'running') {
            const cadence = +inputCadence.value;

            if(
                // !Number.isFinite(distance) && 
                // !Number.isFinite(duration) && 
                // !Number.isFinite(cadence)
                !validInputs(distance, duration, cadence) || 
                !allPositive(distance, duration, cadence)
            ) 
            return alert('Os valores dos campos devem ser positivos');

            workout = new Running([lat, lng], distance, duration, cadence);
        };

        // If workout cycling, create cycling
        if(type === 'cycling') {
            const elevation = +inputElevation.value;

            if(              
                !validInputs(distance, duration, elevation) || 
                !allPositive(distance, duration)
            ) 
            return alert('Os valores dos campos devem ser positivos');
            workout = new Cycling([lat, lng], distance, duration, elevation);
        };

        // Add new object to workout array
        this.#workouts.push(workout);


        // Render workout on map as marker

        this.renderWorkoutMarker(workout)
       


        // Render workout fields
    
        // Hide form + clear input fields
        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = 
        '';
               
    }

    renderWorkoutMarker(Workout){
        L.marker([lat, lng]).addTo(this.#map)
        .bindPopup(L.popup({
            maxWidth:250,
            minWidth:100,
            autoClose: false,
            closeOnClick: false,
            className: `${type}-popup`
        }))
        .setPopupContent(Workout.distance)
        .openPopup();
    }
}

const app = new App(); 