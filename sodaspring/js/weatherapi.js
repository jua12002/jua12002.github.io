//ADD the key and change units to imperial
/*
//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);

    document.getElementById('place').innerHTML=weatherInfo.name;
    document.getElementById('currentTemp').innerHTML=weatherInfo.main.temp;
    document.getElementById('windSpeed').innerHTML=weatherInfo.wind.speed;

    document.getElementById('townName').innerHTML=weatherInfo.name;

    const iconcode = weatherInfo.weather[0].icon;
    console.log(iconcode);
    const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    console.log(icon_path);

    document.getElementById('weather_icon').src = icon_path;


//console.log(myweekday[3]);
*/

//ADD the key and change units to imperial
const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5604473&appid=79ecb9ae3225480c66f41a9ccbe4878b&units=imperial";

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);

    document.getElementById('place').innerHTML=weatherInfo.name;
    document.getElementById('currentTemp').innerHTML=weatherInfo.main.temp;
    document.getElementById('windSpeed').innerHTML=weatherInfo.wind.speed;
    document.getElementById('tempmax').innerHTML=weatherInfo.main.temp_max;
    document.getElementById('humidity').innerHTML=weatherInfo.main.humidity;

    //Chill
    const tempNumber = parseFloat(document.getElementById("currentTemp").textContent);
    console.log(tempNumber);
    const speedNumber = parseFloat(document.getElementById("windSpeed").textContent);
    console.log(speedNumber);

    let windchill = 35.74 + (0.6215 * tempNumber) - (35.75 * Math.pow(speedNumber,
    0.16)) + (0.4275 * tempNumber * Math.pow(speedNumber, 0.16));
    windchill = Math.round(windchill);
    console.log(windchill);

    if(tempNumber<=50 && speedNumber > 3) {
      document.getElementById("chill").textContent = " "
      +windchill+"\xB0F";
    } else {
      document.getElementById("chill").textContent = "No Wind Chill Today";
    }
    


 //console.log(myweekday[3]);


    //

    const iconcode = weatherInfo.weather[0].icon;
    console.log(iconcode);
    const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    console.log(icon_path);

    document.getElementById('weather_icon').src = icon_path;

    //What Day is Today
    const mydate = new Date();
    const y = mydate.getDay();
    console.log(y);

    const myweekday = new Array(7);
    myweekday[0]="Sunday";
    myweekday[1]="Monday";
    myweekday[2]="Tuesday";
    myweekday[3]="Wednesday";
    myweekday[4]="Thursday";
    myweekday[0]="Friday";
    myweekday[0]="Saturday";

   
 }); //end of today weather

// 5 days weather
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=79ecb9ae3225480c66f41a9ccbe4878b&units=imperial";
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
