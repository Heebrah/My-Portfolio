const url ='https://api.openweathermap.org/data/2.5/weather';
const APIKEY = 'c960e94caa31a4840a05c58f51866d85'

$(document).ready(function () {
    weatherFn('Lagos');
});


async function weatherFn(cName) {
    const temp =
       ` ${url}?q=${cName}&appid=${APIKEY}&units=metric`
    try {
        const res = await fetch(temp);
        const data = await res.json();
        if (res.ok) {
            weatherShowFn(data);
        } else {
            alert('City not found. Please try again.');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function weatherShowFn(data) {
    $('#city-name').text(data.name);
    $('#date').text(moment().
        format('MMMM Do YYYY, h:mm:ss a'));
    $('#temperature').
        html(`${data.main.temp}°C`);
    $('#description').
        text(data.weather[0].description);
    $('#wind-speed').
        html(`Wind Speed: ${data.wind.speed} m/s`);
    $('#weather-icon').
        attr('src',
            `...`);
    $('#weather-info').fadeIn();
}