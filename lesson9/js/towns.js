const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {
            let card = document.createElement('section');
            let titleDiv = document.createElement('div');
            titleDiv.classList.add('card-title');
            let bodyDiv = document.createElement('div');
            bodyDiv.classList.add('card-body');

            /*let h2 = document.createElement('h2');
            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            card.appendChild(h2);
            document.querySelector('div.cards').appendChild(card);*/

            // h1 - name
            let townName = document.createElement('h1');
            townName.textContent = towns[i].name;
            titleDiv.appendChild(townName);

            // p - motto
            let motto = document.createElement('p');
            motto.textContent = ' ' + towns[i].motto;
            bodyDiv.appendChild(motto);

            // p - yearFounded
            let yearFounded = document.createElement('p');
            yearFounded.textContent = 'yearFounded' + towns[i].yearFounded;
            bodyDiv.appendChild(yearFounded);

            // p - currentPopulation
            let currentPopulation = document.createElement('p');
            currentPopulation.textContent = 'currentPopulation' + towns[i].currentPopulation;
            bodyDiv.appendChild(currentPopulation);

            // p - averageRainfall
            let averageRainfall = document.createElement('p');
            averageRainfall.textContent = 'averageRainfall' + towns[i].averageRainfall;
            bodyDiv.appendChild(averageRainfall);
 
            // img - picture
            let image = document.createElement('img');
            image.setAttribute('src', prophets[i].imageurl);
            image.setAttribute('loading', 'lazy');
            image.setAttribute('alt', prophets[i].name + ' ' + towns[i].lastname + ' - ' + (i + 1));
         
            // p - events
            let events = document.createElement('p');
            events.textContent = 'events' + towns[i].events;
            bodyDiv.appendChild(events);
 
            card.appendChild(titleDiv);
            card.appendChild(image);
            card.appendChild(bodyDiv);

            document.querySelector('div.cards').appendChild(card);
        }
    });

const imgHover = document.getElementsByTagName('img')[0];
const sect = document.getElementsByTagName('section')[0];

/*window.addEventListener('load',function () {
    sect.classList.remove('loading');
    
});

sect.addEventListener('mouseover', function() {
    imgHover.classList.add('white-border');    
},false)
sect.addEventListener('mouseout',function () {
    imgHover.classList.remove('white-border')    
},false)*/