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



// Variabelen opstellen: Hier selecteer ik de nav item hearts en de svg hart.
var navHart = document.getElementById('navlinkhart');
var blackHart = document.getElementsByClassName('blackhearts');
var redHart = document.getElementsByClassName('redhart');
var filmPosters = document.getElementsByClassName('film');
var filmTitel



// Hier check ik in de console of de eerste naam van de film is aangesproken
console.log(blackHart[0]);

// Hier check ik in de console of de svg is aangesproken
console.log(navHart);



// Hier hang ik een oortje aan de nav item hearts die checkt of er een klik plaatsvind
// Hetzelfde geldt voor de svg blackheart
// Bij een click op de navHart wordt de functie showLiked gerunned.
// Bij een click op de blackHart wordt de functie blackheartClicked gerunned.
navHart.addEventListener('click', showLiked);
blackHart[0].addEventListener('click', blackheartClicked);


// Hier zet ik de blackheart in een loop
for (i = 0; i < blackHart.length; i++) {
    blackHart[i].addEventListener('click', blackheartClicked);
}


// Deze functie toggled de classes .blackhearts en .redhart Deze kun je in css vinden.
// In a function, this refers to the global object.
function blackheartClicked() {
    console.log(this);
    this.classList.toggle('redhart');
}


// Deze functie toggled de classes cssselector1 en cssselector2. Deze kun je in css vinden.
function showLiked() {
    console.log("werkt");

    if (blackHart = this.classList.toggle('redhart')) {
        filmTitel = document.getElementsByClassName('filmentitel');
        filmTitel.classList.add('heartsshowed');
    } else {
        filmTitel = document.getElementsByClassName('filmentitel');
        filmTitel.classList.add('hiddenhearts');
    }

}
