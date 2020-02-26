/*
  Wat doe je ook alweer in Javascript voor een micro-interactie?
  1. Gebruik de querySelector om een element in je html te selecteren
  2. Koppel een evenListener aan het element om een mouse-event te detecteren
  3. Gebruik het Classlist object om een css class aan een element toe te voegen of weg te halen.
*/


//
//var films = ["matrix_the_1999.jpg", "scary_movie_5.jpg", "wall-e_2008.jpg", "shutter-island.jpg", "x-men_the_last_stand.jpg"];
//
//console.log(films.length);
//// 5
//
//
//var first = films[0]; //matrix_the_1999.jpg
//var second = films[films.length - 4]; //scary_movie_5.jpg
//var third = films[films.length - 3]; // wall-e_2008.jpg
//var fourth = films[films.length - 2]; //shutter-island.jpg
//var last = films[films.length - 1]; // x-men_the_last_stand.jpg



// Variabelen opstellen: select the HTML elements which you want to manipulate
var navHart = document.getElementById('navlinkhart');
var blackHart = document.getElementsByClassName('blackhearts');

console.log(blackHart[0]);


console.log(navHart);



// Hier hang ik een oortje aan de ... die checkt of er een klik plaatsvind.
// Bij een click wordt de functie verzinfunctie gerunned.
navHart.addEventListener('click', showLiked);
blackHart[0].addEventListener('click', blackheartClicked);

for (i = 0; i < blackHart.length; i++) {
    blackHart[i].addEventListener('click', blackheartClicked);
}


// Deze functie toggled de classes cssselector1 en cssselector2. Deze kun je in css vinden.
function showLiked() {
    console.log("werkt");

}

function blackheartClicked() {
    console.log(this);
    this.classList.toggle('redhart');
}
