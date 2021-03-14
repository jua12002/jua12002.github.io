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

    //console.log(myweekday[3]);

 }); //end of "then" fat arrow function



