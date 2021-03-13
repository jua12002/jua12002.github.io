const apiURL='https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=b1c4009595630e2651d3712160a3c1f6&units=imperial';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
    console.log(jsObject);
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + 'png';
    const desc = jsObject.weather[0].description; //weather array
    document.getElementById('imagesrc').textContent = imagesrc; //info specification
    document.getElementById('icon').setAttribute('src',imagesrc); //focus on the setAttribute
    document.getElementById('icon').setAttribute('alt',desc);  
    document.getElementById('current-temp').textContent = jsObject.main.temp;
    });

    
   