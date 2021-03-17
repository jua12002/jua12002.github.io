    
//5 Days Forecast
    
const weatherDate = new Date();
const weatherDay = weatherDate.getDay();
let forecastDayNumber = weatherDay;
const weekday = new Array(7);
weekday[0]="Sunday";
weekday[1]="Monday";
weekday[2]="Tuesday";
weekday[3]="Wednesday";
weekday[4]="Thursday";
weekday[5]="Friday";
weekday[6]="Saturday";

const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5604473&appid=79ecb9ae3225480c66f41a9ccbe4878b&units=imperial";
const renderForecastCard = (forecastdata, dayofweek) => {
 
let cards = document.createElement('div');
cards.classList.add('bs');
document.getElementById('cards').appendChild(card);

let title = document.createElement('h4');
title.textContent = dayofweek;
card.appendChild(title);

let weather_icon = document.createElement('img');
let iconCode = forecastdata.weather[0].icon;
let icon_path ='//openweathermap.com/img/wn/${iconCode}placeholder.png';
weather_icon.src = icon_path;
weather_icon.setAttribute('alt', forecastdata.weather[0].description)
card.appendChild(weather_icon);

let forecastTemp = document.createElement('p');
forecastTemp.textContent = Math.round(forecastdata.main.temp*10)/10+ "\xB0";
card.appendChild(forecastTemp);


for (let i = 0; i < forecastList.length; i++) {
    let time = forecastList[i].dt_txt;
    if (time.includes('18:00:00')) {
        forecastDayNumber += 1;
        if (forecastDayNumber === 7) {
            forecastDayNumber = 0
        }
        renderForecastCard(forecastList[i], weekDay[forecastDayNumber])

    }
}

}
//

fetch(forecastURL)
    .then((response) => response.json())
    .then((forecastObject) => {
        console.log(forecastObject)
        var forecast = forecastObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        console.log(forecast)
        const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        
      for (let day = 0; day < forecast.length; day++) {
          const d = new Date(forecast[day].dt_txt);
          const imagesrc = 'https://openweathermap.org/img/wn/' + forecast[day].weather[0].icon + '@2x.png';
          const desc = forecast[day].weather[0].description;
          document.getElementById(`dayofweek${day+1}`).textContent = weekdays[d.getDay()];
          document.getElementById(`forecast${day+1}`).textContent = Math.round(forecast[day].main.temp);
          document.getElementById(`icon${day+1}`).setAttribute('src', imagesrc);
          document.getElementById(`icon${day+1}`).setAttribute('alt', desc);
      }

    });