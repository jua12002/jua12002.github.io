const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Soda Springs" || towns[i].name == "Preston" || towns[i].name == "Fish Haven") {
                let card = document.createElement('div');
                let info = document.createElement('section');
                let photo = document.createElement('figure');
                let name = document.createElement('h2');
                let motto = document.createElement('h3');
                let date = document.createElement('p');
                let people = document.createElement('p');
                let rain = document.createElement('p');
                let todo = document.createElement('h3');
                let image = document.createElement('img');
                let link = document.createElement('a');


                link.textContent = towns[i].name;
                motto.textContent = towns[i].motto;
                date.textContent = 'Year Founded: ' + towns[i].yearFounded;
                people.textContent = 'Population: ' + towns[i].currentPopulation;
                rain.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;

                todo.textContent = 'Events: ' + towns[i].events;

                image.setAttribute('src', 'images/'+towns[i].photo);
                image.setAttribute('alt', towns[i].name + ' Hometown');

                

                let srcLink = "";
                if (towns[i].name == "Soda Springs") 
                    srcLink = "/sodaspring/sodasprings.html";
                if (towns[i].name == "Preston"  )
                    srcLink = "/lesson10api/preston.html";
                if (towns[i].name == "Fish Haven")
                    srcLink = "/fishhaven/fishhaven.html";

                link.setAttribute('href',srcLink );
                name.appendChild(link);
                photo.appendChild(image);
                card.appendChild(photo);

                info.appendChild(name);
                info.appendChild(motto);
                info.appendChild(date);
                info.appendChild(people);
                info.appendChild(rain);
                card.appendChild(info);
                info.appendChild(todo);
                document.getElementById('cards').appendChild(card);
            }
        }

    });