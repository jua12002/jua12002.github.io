const apiURL='//api.openweathermap.org/data/2.5/weather?id=5604473&appid=79ecb9ae3225480c66f41a9ccbe4878b&units=imperial';
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
    console.log(jsObject);
    const imagesrc = '//openweathermap.org/img/w/' + jsObject.weather[0].icon + 'png';
    const desc = jsObject.weather[0].description; //weather array
    document.getElementById('imagesrc').textContent = imagesrc; //info specification
    document.getElementById('icon').setAttribute('src',imagesrc); //focus on the setAttribute
    document.getElementById('icon').setAttribute('alt',desc);  
    document.getElementById('current-temp').textContent = jsObject.main.temp;
    });