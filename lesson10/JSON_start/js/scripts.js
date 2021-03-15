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

//What Day is Today

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

  const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5604473&appid=79ecb9ae3225480c66f41a9ccbe4878b&units=imperial";

  fetch(apiURL)
  .then((response) => response.json())
  .then((weatherinfo) => {
  console.log(weatherinfo);

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
