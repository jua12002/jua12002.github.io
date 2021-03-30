//const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';
const requestURL = 'https://jua12002.github.io/projectw14/js/events.json';


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const events = jsonObject['events'];

        for (let i = 0; i < events.length; i++) {
            let card = document.createElement('section');
            let titleDiv = document.createElement('div');
            titleDiv.classList.add('event-title');
            let bodyDiv = document.createElement('div');
            bodyDiv.classList.add('event-body');

            /*let h2 = document.createElement('h2');
            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            card.appendChild(h2);
            document.querySelector('div.cards').appendChild(card);*/

            // h1 - Place
            let Place = document.createElement('h1');
            Place.textContent = events[i].Place + ' ' + events[i].Event;
            titleDiv.appendChild(Place);

            // p - Address
            let Address = document.createElement('p');
            Address.textContent = 'Address: ' + events[i].Address;
            bodyDiv.appendChild(Date);

            // p - Event
            let Event = document.createElement('p');
            Address.textContent = 'Event: ' + events[i].Event;
            bodyDiv.appendChild(Date);

            // p - Date
            let Date = document.createElement('p');
            Date.textContent = 'Date: ' + events[i].Date;
            bodyDiv.appendChild(Date);

            // p - Time
            let Time = document.createElement('p');
            Time.textContent = 'Time: ' + events[i].Time;
            bodyDiv.appendChild(Time);

            /* img - picture
            let image = document.createElement('img');
            image.setAttribute('src', events[i].imageurl);
            image.setAttribute('loading', 'lazy');
            image.setAttribute('alt', events[i].name + ' ' + events[i].lastname + ' - ' + (i + 1));*/
         
            events.appendChild(titleDiv);
            //card.appendChild(image);
            event.appendChild(bodyDiv);

            document.querySelector('div.events').appendChild(events);
        }
    });

/*    
const imgHover = document.getElementsByTagName('img')[0];
const sect = document.getElementsByTagName('section')[0];

window.addEventListener('load',function () {
    sect.classList.remove('loading');
    
});

sect.addEventListener('mouseover', function() {
    imgHover.classList.add('white-border');    
},false)
sect.addEventListener('mouseout',function () {
    imgHover.classList.remove('white-border')    
},false)*/