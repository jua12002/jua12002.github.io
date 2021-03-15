//What Day is Today
const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5604473&appid=79ecb9ae3225480c66f41a9ccbe4878b&units=imperial";
fetch(apiURL)
    .then((response) => response.json())
    .then((weatherinfo) => {
    console.log(weatherinfo);
    document.getElementById('place').innerHTML=weatherInfo.name;
    document.getElementById('currentTemp').innerHTML=weatherInfo.main.temp;
    document.getElementById('temp-max').innerHTML=weatherInfo.main.temp_max;
    document.getElementById('humidity').innerHTML=weatherInfo.humidity;
    document.getElementById('windSpeed').innerHTML=weatherInfo.wind.speed;

    let temperature=parseFloat(document.getElementById('currentTemp').innerHTML);
    let speed=parseFloat(document.getElementById(speed).innerHTML);

    let windchill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(speed, 0.16))
        + (0.4275 * temperature * Math.pow(speed, 0.16));

        if (temperature <= 50 && speed > 3) {

            document.getElementById('chill').innerHTML = Math.round(windchill);
          } else {
      
            windchill = "N/A";
          }
    });

const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5604473&appid=79ecb9ae3225480c66f41a9ccbe4878b&units=imperial";


fetch(apiURL)
    .then((response) => response.json())
    .then((weatherinfo) => {

        console.log(weatherinfo)
        var forecast = weatherinfo.list.filter(x => x.dt_txt.includes('18:00:00'));
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

/*


const d = new Date();
const todayDayNumber=d.getDay();
const weekday = new Array(7);
weekday[0]="Sunday";
weekday[1]="Monday";
weekday[2]="Tuesday";
weekday[3]="Wednesday";
weekday[4]="Thursday";
weekday[0]="Friday";
weekday[0]="Saturday";





document.getElementById("townName").textContent=weatherinfo.city.name;

let mylist=weatherinfo.list;

  let forecastDayNumber=todayDayNumber;

  for (i=0;i<mylist.length;i++) {
      let time=mylist[i].dt_txt;

      if (time=includes('21:00:00')) {
        console.log("Found an entry with 21:00:00 in the time.it was report"+i+"from the mylist od 40");

        forecastDayNumber+=1;
        if (forecastDayNumber===7){forecastDayNumber = 0;}

        lettheDayName=document.createElement("span");
        theDayName.textContent=weekday[forecastDayNumber];
        /* console.log(">"+weekday[forecastDayNumber]);*/
/*
        lettheTemp=document.createElement("p");
        theTemp.textContent=weatherInfo=weatherinfo.list[i].main.temp+"\xB0";

        let iconcode=weatherInfo.list[i].weather[0].icon;
        let iconPath="//openweathermap.org/img/w/"+iconcode+".png";
        let theIcon=document.createElement("img")
        theIcon.src=iconPath;

        let theDay=document.createElement("div");
        theDay.appendChild(theDayName);
        theDay.appendChild(theTemp);
        theDay.appendChild(theIcon);

        document.getElementById(weatherforecast).appendChild(theDay);
      }//endif
    }//end for
});//end function

/*
const d = new Date();
const todayDayNumber=d.getDay();
let forecastDayNumber=todayDayNumber;
console.log(forecastDayNumber);

for (i = 0;i<mylist.length;i++) {
    var timme = mylist[i].dt_txt;
    if(TimeRanges.includes('21:00:00')){
}//end if
}//end for*/