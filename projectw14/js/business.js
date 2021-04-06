const requestURL = 'https://jua12002.github.io/projectw14/data/business.json';
 
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const business = jsonObject['business'];

        for (let i = 0; i < business.length; i++) {
            if (business[i].name == "Osteopath Treatment" || business[i].name == "City of Winnipeg" || business[i].name == "University of Winnipeg"  || business[i].name == "Hy Steakhouse" ||
             business[i].name == "Canadian College Solution to Pain" || business[i].name == "Coal & Canary" 
             || business[i].name == "Magicuts" || business[i].name == "Taco Sargent" ) {
            
                let card = document.createElement('div');
                let info = document.createElement('section');
                let photo = document.createElement('figure');
                let name = document.createElement('h2');
                let addr = document.createElement('p');
                let conta = document.createElement('p');
                let acti = document.createElement('p');
                let image = document.createElement('img');
                let link = document.createElement('a');


                link.textContent = business[i].name;
                 
                addr.textContent = 'Address: ' + business[i].Address;
                conta.textContent = 'Contact: ' + business[i].Contact;
                acti.textContent = 'Activity: ' + business[i].Activity;

                image.setAttribute('src', 'images/'+business[i].photo);
                image.setAttribute('alt', business[i].name + 'Name');

                let srcLink = "";
                if (business[i].name == "Winnipeg Zoo") 
                    srcLink = "https://www.assiniboinepark.ca/zoo/visit/hours-and-rates";
                if (business[i].name == "The Forks"  )
                    srcLink = "https://www.theforks.com/about/the-forks";
                if (business[i].name == "Assiniboine park")
                    srcLink = "https://www.assiniboinepark.ca/park/visit/hours";

                link.setAttribute('href',srcLink );
                name.appendChild(link);
                photo.appendChild(image);
                card.appendChild(photo);

                info.appendChild(name);
                info.appendChild(addr);
                info.appendChild(cota);
                info.appendChild(acti);
                
                card.appendChild(info);
                
                document.getElementById('cards').appendChild(card);
            }
        }

    });

    const requestURL = 'https://jua12002.github.io/projectw14/data/businessdata.json';
 
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const business = jsonObject['business'];

        for (let i = 0; i < business.length; i++) {
            if (business[i].name == "Osteopath Treatment" || business[i].name == "City of Winnipeg" || business[i].name == "University of Winnipeg"  || business[i].name == "Hy Steakhouse" ||
             business[i].name == "Canadian College Solution to Pain" || business[i].name == "Coal & Canary" 
             || business[i].name == "Magicuts" || business[i].name == "Taco Sargent" ) {
            
                let card = document.createElement('div');
                let info = document.createElement('section');
                let photo = document.createElement('figure');
                let name = document.createElement('h2');
                let motto = document.createElement('h3');
                let date = document.createElement('p');
                let people = document.createElement('p');
                let rain = document.createElement('p');
                let todo = document.createElement('p');
                let image = document.createElement('img');
                let link = document.createElement('a');


                link.textContent = business[i].name;
                motto.textContent = business[i].motto;
                date.textContent = 'News: ' + business[i].yearFounded;
                people.textContent = 'Address: ' + business[i].currentPopulation;
                rain.textContent = 'Time: ' + business[i].averageRainfall;

                todo.textContent = 'Events: ' + business[i].events;

                image.setAttribute('src', 'images/'+business[i].photo);
                image.setAttribute('alt', business[i].name + 'Places');

                let srcLink = "";
                if (business[i].name == "Winnipeg Zoo") 
                    srcLink = "https://www.assiniboinepark.ca/zoo/visit/hours-and-rates";
                if (business[i].name == "The Forks"  )
                    srcLink = "https://www.theforks.com/about/the-forks";
                if (business[i].name == "Assiniboine park")
                    srcLink = "https://www.assiniboinepark.ca/park/visit/hours";

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