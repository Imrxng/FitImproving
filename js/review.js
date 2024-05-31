let amountStars;

reviewAmountStars.addEventListener('input', function(e){
    amountStars = document.getElementById('reviewAmountStars').value;
    document.getElementById('amountStarsText').innerHTML = "";    

    for (let index = 0; index < amountStars; index++) {
        document.getElementById('amountStarsText').innerHTML += "&#9733;";    
    }
});


document.getElementById('reviewSubmitForm').addEventListener('submit', function(e){

    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();

    let fullName = document.getElementById('Naam').value;
    amountStars = document.getElementById('reviewAmountStars').value;
    let message = document.getElementById('Bericht').value;
    let email = document.getElementById('Mail').value;

    document.getElementById('reviewsToevoegen').style.gap = '2rem';
    let stars = "";
    let firstLetterSurname = fullName.substring(0,1);
    let indexOfSpatie = fullName.indexOf(" ");
    let surname = fullName.substring(0, indexOfSpatie);
    let lastName = fullName.substring(indexOfSpatie + 1);
    let firstLetterLastName = lastName.substring(0, 1).toUpperCase();

    for (let index = 0; index < amountStars; index++) {
        stars += '<img src="assets/Icons/RatingWhite.webp" alt="WhiteStar">'       
    }


    document.getElementById("reviewsToevoegen").innerHTML += `
    <section>
    <p id="PersoonB">${firstLetterSurname}</p>
    <ul>
        <li>Naam: ${surname} ${firstLetterLastName}.</li>
        <li>Datum: ${day}/${month}/${year}</li>
        <li>${stars}</li> 
    </ul><br>
        <p>"${message}"</p>
    </section>`;

    document.getElementById('amountStarsText').innerHTML = "";    
    fullName = document.getElementById('Naam').value = "";
    document.getElementById('Bericht').value = "";
    email = document.getElementById('Mail').value = "";

    let succesMessage = (surname, firstLetterLastName, day, month, year, amountStars, message) => {
        setTimeout(() => {   
                alert(`Uw review is toegevoegd geweest aan ons systeem:\n\nNaam: ${surname} ${firstLetterLastName}\nDatum: ${day}/${month}/${year}\nSterren: ${amountStars}\nBericht: "${message}"`); 
        }, 2);
    };
    succesMessage(surname, firstLetterLastName, day, month, year, amountStars, message);
});