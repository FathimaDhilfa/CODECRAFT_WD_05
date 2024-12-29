let valueSearch = document.getElementById("valueSearch");
let city = document.getElementById("city");
let temperature = document.getElementById("temperature");
let description = document.querySelector(".description");
let clouds = document.getElementById("clouds");
let humidity = document.getElementById("humidity");
let pressure = document.getElementById("pressure");
let form = document.querySelector("form");
let main = document.querySelector('main');

form.addEventListener('submit',(event) => {
    event.preventDefault();
    if(valueSearch != ''){
        searchWeather();
    }
})
let id = 'b0e37b9b576e0c9868a46b16d5a24d86';
let url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid='+id;  
const searchWeather = () => {
    fetch(url + '&q=' + valueSearch.value)
    .then(responsive => responsive.json())  //convert response into json file
    .then(data => {
        console.log(data);  
        if(data.cod == 200){
            city.querySelector('figcaption').innerText = data.name;
            city.querySelector('img').src = 'http://flagsapi.com/'+data.sys.country+'/shiny/32.png';

            temperature.querySelector('img').src = 'http://openweathermap.org/img/wn/'+data.weather[0].icon+'@4x.png';
            temperature.querySelector('figcaption span').innerText = data.main.temp;

            description.innerText = data.weather[0].description;
            clouds.innerText = data.clouds.all;
            humidity.innerText = data.main.humidity;
            pressure.innerText = data.main.pressure;
        }
        else {
            main.classList.add('error');
            setTimeout(()=>{
                main.classList.remove('error');
            },1000)
        }
        valueSearch.value = '';
    })
}

const initApp = () => {
    valueSearch.value = 'Washington';
    searchWeather();
}
initApp();