let FotoKlant = [];
let InfoKlant = [];
let amountOfClients = 12;

for (let index = 0; index < amountOfClients; index++) {
    FotoKlant[index] = `FotoKlant${index + 1}`;
    InfoKlant[index] = `InfoKlant${index + 1};`
}

let parent = document.getElementById("AlleKlanten");

fetch(`https://randomuser.me/api/?results=${amountOfClients}`)
    .then(function(response) {
        return response.json()
    })
    .then(function(response) {
        for (let index = 0; index < response.results.length; index++) {

            // Dit is de container waar alle info en foto van de klant in zitten.
            let addElementSectionParent = document.createElement("section");
            addElementSectionParent.setAttribute("class", "KlantBox");

            // Dit is de foto van de klant.
            let imgPic = response.results[index].picture.large;
            let addElementImg = document.createElement("img");
            addElementImg.setAttribute("id", FotoKlant[index]);
            addElementImg.style.borderRadius = "50%"
            addElementImg.src = imgPic;

            
            // Dit is de container waar alle info van de klant in zit.
            let addElementSectionChild = document.createElement("section");
            addElementSectionChild.setAttribute("id", InfoKlant[index]);
            addElementSectionChild.setAttribute("class", "InfoKlanten");


            // Dit is de paragraaf aanspreektitel
            let ParagraafTitle = response.results[index].name.title;
            let addElementParagraafTitle = document.createElement("p");
            addElementParagraafTitle.style.color = "white"
            let addTextNodeTitle = document.createTextNode(`Aanspreektitel: ${ParagraafTitle}`);
            addElementParagraafTitle.appendChild(addTextNodeTitle);

            // Dit is de paragraaf voornaam
            let surname = response.results[index].name.first;
            let addElementParagraafSurname = document.createElement("p");
            addElementParagraafSurname.style.color = "white";
            let addTextNodeSurname = document.createTextNode(`Voornaam: ${surname}`);
            addElementParagraafSurname.appendChild(addTextNodeSurname);
            
            // Dit is de paragraaf achternaam
            let lastName = response.results[index].name.last;
            let addElementParagraafLastName = document.createElement("p");
            addElementParagraafLastName.style.color = "white";
            let addTextNodeLastName = document.createTextNode(`Achternaam: ${lastName}`);
            addElementParagraafLastName.appendChild(addTextNodeLastName);

            // Dit is de paragraaf land
            let country = response.results[index].location.country;
            let addElementParagraafCountry = document.createElement("p");
            addElementParagraafCountry.style.color = "white";
            let addTextNodeCountry = document.createTextNode(`Land: ${country}`);
            addElementParagraafCountry.appendChild(addTextNodeCountry);


            // Alle paragraven worden gestoken in de info container
            addElementSectionChild.appendChild(addElementParagraafTitle);
            addElementSectionChild.appendChild(addElementParagraafSurname);
            addElementSectionChild.appendChild(addElementParagraafLastName);
            addElementSectionChild.appendChild(addElementParagraafCountry);

            // De container info en de foto worden in 1 container gestoken
            addElementSectionParent.appendChild(addElementImg);
            addElementSectionParent.appendChild(addElementSectionChild);

            // De totale container word toegevoegd aan de parent in de html
            parent.appendChild(addElementSectionParent);
        }
    })
    .catch(function(error){
        console.error("Error with message: " + error);
    });