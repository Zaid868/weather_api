const key='0391d33147737eb150c39c59d4220f5d'
const city= 'Miami'


fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
.then(res=>res.json())
.then(data=>
    {
        // console.log(data);
        // console.log(data.name);
        // console.log(data.main.temp);
        // console.log(data.weather[0].description);
        displayWeather(data);

    })

function displayWeather(data){
    document.querySelector('.temperature').innerHTML=data.main.temp;
    document.querySelector('.city-name').innerHTML=data.name;
    document.querySelector('.weather-description').innerHTML=data.weather[0].description;

}



