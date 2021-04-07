const requestURL = 'https://jua12002.github.io/projectw14/data/dirdata.json';
 
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Osteopath Treatment" || towns[i].name == "City of Winnipeg" || towns[i].name == "University of Winnipeg"||
               towns[i].name == "Hy Steakhouse" || towns[i].name == "Coal & Canary" || towns[i].name == "Taco Sargent"||
               towns[i].name == "Canadian College Solution to Pain" || towns[i].name == "Magicuts" || towns[i].name == "The Forks"){
                let card = document.createElement('div');
                let info = document.createElement('section');
                let photo = document.createElement('figure');
                let name = document.createElement('h3');
                let motto = document.createElement('h4');
                let date = document.createElement('p');
                let people = document.createElement('p');
                let rain = document.createElement('p');
                let todo = document.createElement('h4');
                let image = document.createElement('img');
                let link = document.createElement('a');


                link.textContent = towns[i].name;
                motto.textContent = towns[i].motto;
                date.textContent = 'Contact: ' + towns[i].Contact;
                people.textContent = '' + towns[i].currentPopulation;
                rain.textContent = '' + towns[i].Website;
                
                todo.textContent = 'News or Events: ' + towns[i].events;

                image.setAttribute('src', 'images/'+towns[i].photo);
                image.setAttribute('alt', towns[i].name + 'Logo');

                let srcLink = "";
                if (towns[i].name == "Osteopath Treatment") 
                    srcLink = "https://www.osteopathtreatment.ca/";
                if (towns[i].name == "City of Winnipeg"  )
                    srcLink = "https://winnipeg.ca/";
                if (towns[i].name == "University of Winnipeg")
                    srcLink = "https://www.uwinnipeg.ca/";
                if (towns[i].name == "Hy Steakhouse") 
                    srcLink = "https://hyssteakhouse.com/";
                if (towns[i].name == "Canadian College Solution to Pain" )
                    srcLink = "https://www.solutionstopain.ca/";
                if (towns[i].name == "Coal & Canary")
                    srcLink = "https://www.coalandcanary.com/";
                if (towns[i].name == "Magicuts") 
                    srcLink = "https://www.magicutssalons.com/";
                if (towns[i].name == "Taco Sargent" )
                    srcLink = "https://sargent-tacoshop.com/";
                if (towns[i].name == "The Forks")
                    srcLink = "https://www.theforks.com/about/the-forks";

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