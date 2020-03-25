/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/


// BLACK HEARTS, deze stap doe ik al laatste wanneer mijn carousel af is.
//var blackHart = document.getElementsByClassName('blackhearts');
//blackHart[0].addEventListener('click', blackheartClicked);
//
//// Hier zet ik de blackheart in een loop
//for (i = 0; i < blackHart.length; i++) {
//    blackHart[i].addEventListener('click', blackheartClicked);
//}
//
//
//// Deze functie toggled de classes .blackhearts en .redhart Deze kun je in css vinden.
//// In a function, this refers to the global object.
//function blackheartClicked() {
//    console.log(this);
//    this.classList.toggle('redhart');
//}




//  hieronder wordt de link met data van de 6 films aangeroepen.
var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();



//  hieronder worden de classes van de carouselknoppen aangeroepen.
var vorigeKnop = document.querySelector('.vorige');
var volgendeKnop = document.querySelector('.volgende');


var imageOne = true;
var imageTwo = false;
var imageThree = false;
var imageFour = false;
var imageFive = false;
var imageSix = false;


// Hieronder worden de functies gemaakt waarin ik in een if statement zeg dat de image steeds een image verder kan als het true is.
// Dus van 1 naar 2, 2 naar 3 etc..
function volgendeBol() {



    if (imageOne === true) {
        event.preventDefault();
        document.getElementById("film2").click();
        imageOne = false;
        imageTwo = true;
    } else if (imageTwo === true) {
        event.preventDefault();
        document.getElementById("film3").click();
        imageTwo = false;
        imageThree = true;
    } else if (imageThree === true) {
        event.preventDefault();
        document.getElementById("film4").click();
        imageThree = false;
        imageFour = true;
    } else if (imageFour === true) {
        event.preventDefault();
        document.getElementById("film5").click();
        imageFour = false;
        imageFive = true;
    } else if (imageFive === true) {
        event.preventDefault();
        document.getElementById("film6").click();
        imageFive = false;
        imageSix = true;
    } else if (imageSix === true) {
        event.preventDefault();
        document.getElementById("film1").click();
        imageSix = false;
        imageOne = true;
    }
}


//In deze functie doe ik hetzelfde, alleen andersom nu.
// Dus van 1 naar 6, 6 naar 5 etc..

function vorigeBol() {

    if (imageOne === true) {
        event.preventDefault();
        document.getElementById("film6").click();
        imageOne = false;
        imageSix = true;
    } else if (imageTwo === true) {
        event.preventDefault();
        document.getElementById("film1").click();
        imageTwo = false;
        imageOne = true;
    } else if (imageThree === true) {
        event.preventDefault();
        document.getElementById("film2").click();
        imageThree = false;
        imageTwo = true;
    } else if (imageFour === true) {
        event.preventDefault();
        document.getElementById("film3").click();
        imageFour = false;
        imageThree = true;
    } else if (imageFive === true) {
        event.preventDefault();
        document.getElementById("film4").click();
        imageFive = false;
        imageFour = true;
    } else if (imageSix === true) {
        event.preventDefault();
        document.getElementById("film5").click();
        imageSix = false;
        imageFive = true;
    }
}






//  Hieronder wordt bij het laden van de site de function showMovies getriggerd
//  verder word de variabele movies in de console geshowed.
request.onload = function () {
    var movies = request.response;
    console.log(movies);
    showMovies(movies);
}



//  Hieronder wordt de functie 'showMovies' gerunt.
//  In de function worden variabelen aangemaakt: movies, mijnLijst, deBolletjes...
//  ..in mijnLijst wordt de ul in het html document opgezocht.
//  in deBolletjes worden de id 'navbolletjes' in het html document opgezocht.
function showMovies(jsonObj) {


    var movies = jsonObj;
    var mijnLijst = document.querySelector('ul');
    var deBolletjes = document.querySelector('#navbolletjes');
    //    var svg = document.querySelector('blackhearts');


    //  vervolgens wordt er loop gemaakt in de function....
    for (let i = 0; i < movies.length; i++) {

        // de film aanmaken en toevoegen
        var liFilm = document.createElement('li');

        //  In de loop worden variabelen gemaakt, waarin html elementen worden gemaakt....
        var filmTitel = document.createElement('h2');
        var filmCover = document.createElement('img');
        var releaseDatum = document.createElement('date');
        var releaseDatumP = document.createElement('p');
        var plotTekst = document.createElement('p');

        //  In de html elementen worden vervolgens de data van het json document erin gegooid,...
        //  dus title bij h2, cover bij img etc..
        filmTitel.innerHTML = movies[i].title;
        plotTekst.innerHTML = 'Plot: ' + movies[i].plot;
        releaseDatum.innerHTML = movies[i].release_date;
        releaseDatumP.innerHTML = 'Release Date: ';
        releaseDatumP.appendChild(releaseDatum);
        filmCover.src = movies[i].cover;

        // de film (de li) een id geven
        liFilm.id = "film" + i;

        //  Die html elementen worden in li-tjes gezet...
        liFilm.appendChild(filmTitel);
        liFilm.appendChild(filmCover);
        liFilm.appendChild(releaseDatumP);
        liFilm.appendChild(plotTekst);

        //  Tot slot worden de li-tjes in ul gezet, zodat er een carousel gemaakt kan worden.
        mijnLijst.appendChild(liFilm);

        // Het navigatie bolletje voor de film aanmaken en toevoegen aan de bolletjes
        var bolletje = document.createElement('a');
        bolletje.setAttribute("href", "#film" + i);
        deBolletjes.appendChild(bolletje);


    }

    // Dan als de loop klaar is het eerste bolletje zwart maken
    deBolletjes.querySelector("a:first-of-type").classList.add("zwart");
}



//  MISLUKTE CODE: BOLLETJE ZWART MAKEN BIJ CLICK

//var navBolletje = document.querySelector('#film');
//
//for (i = 0; i < navBolletje.length; i++) {
//
//    navBolletje[i].addEventListener('click', bolletjeZwart);
//
//    function bolletjeZwart() {
//        document.querySelector(".zwart").classList.remove("zwart");
//        this.classList.add('zwart');
//    }
//}






//  ik heb de movies met cover en info in een carousel gezet,
//  de volgende stap die ik wil nemen is, om de li-tjes een id te geven,
//  zodat ik de navigatiebolletjes van de carousel ernaar kan linken.



//  MISLUKTE CODE:

//  Hieronder maak ik de variabele idToLi aan,
//  zodat ik in de loop een id aan alle li-tjes kan geven.
//  var idToLi = document.querySelector('li');

//  Hier voeg ik aan alle li-tjes een id genaamd link toe
//  idToLi.id = 'link'
