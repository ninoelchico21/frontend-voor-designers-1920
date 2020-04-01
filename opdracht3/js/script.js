/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

//BRONNEN:
//SVG toevoegen met js: http://xahlee.info/js/js_scritping_svg_basics.html
//Keyboard events: https://stackoverflow.com/questions/45639000/adding-keyboard-navigation-to-a-slideshow



//  hieronder wordt de link met data van de 6 films aangeroepen.
var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();



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

        //      hieronder maak ik de svg aan
        // Bron: http://xahlee.info/js/js_scritping_svg_basics.html
        var heartSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

        heartSvg.setAttribute("width", "100");
        heartSvg.setAttribute("height", "100");

        var heartVorm = document.createElementNS('http://www.w3.org/2000/svg', 'heart')
        heartVorm.setAttribute("fill", "red");

        heartSvg.appendChild(heartVorm);


        //  In de html elementen worden vervolgens de data van het json document erin gegooid,...
        //  dus title bij h2, cover bij img etc..
        filmTitel.innerHTML = movies[i].title;
        plotTekst.innerHTML = 'Plot: ' + movies[i].plot;
        releaseDatum.innerHTML = movies[i].release_date;
        releaseDatumP.innerHTML = 'Release Date: ';
        releaseDatumP.appendChild(releaseDatum);
        filmCover.src = movies[i].cover;
        heartSvg.innerHTML = movies[i].svg;

        // de film (de li) een id geven
        liFilm.id = "film" + i;

        //  Die html elementen worden in li-tjes gezet...
        liFilm.appendChild(filmTitel);
        liFilm.appendChild(filmCover);
        liFilm.appendChild(heartSvg);
        liFilm.appendChild(releaseDatumP);
        liFilm.appendChild(plotTekst);

        //  Tot slot worden de li-tjes in ul gezet, zodat er een carousel gemaakt kan worden.
        mijnLijst.appendChild(liFilm);

        // Het navigatie bolletje voor de film aanmaken
        var bolletje = document.createElement('a');
        bolletje.setAttribute("href", "#film" + i);


        // de bolletjes zijn links
        // om naar de nieuwe film te scrollen hoeft niets te gebeuren
        // daar zorgt de link voor
        // om het nieuwe bolletje zwart te maken moeten we wel wat doen
        // om daar voor te zorgen doe ik het volgende
        // in de loop maak ik voor elk bolletje ook een eventlistener aan
        // daarmme wordt de functie bolletjeZwart aangeroepen
        bolletje.addEventListener('click', function () {
            var nieuweBolletje = this;
            bolletjeZwart(nieuweBolletje);
        });
        // het bolletje toevoegen aan de lijst met bolletjes
        deBolletjes.appendChild(bolletje);
    }

    // Dan als de loop klaar is het eerste bolletje zwart maken
    deBolletjes.querySelector("a:first-of-type").classList.add("zwart");

    // En tenslotte laten we de buttons luisteren naar clicks
    // Ook dit doe ik na het aanmaken van de films.
    // Op deze manier werken de knoppen nog niet als de films er nog niet zijn.
    let vorigeKnop = document.querySelector('.vorige');
    let volgendeKnop = document.querySelector('.volgende');

    vorigeKnop.addEventListener('click', naarVorigeFilm);
    volgendeKnop.addEventListener('click', naarVolgendeFilm);


}
/*****  EINDE FUNCTION SHOWMOVIES   *****/



function bolletjeZwart(nieuweBolletje) {
    // we zoeken het huidige bolletje op
    // dat is het bolletje dat nu de class zwart heeft
    var huidigeBolletje = document.querySelector(".zwart");
    // we verwijderen class zwart van dat bolletje
    huidigeBolletje.classList.remove("zwart");
    // daarna voegen we class zwart toe aan het nieuwe bolletje
    nieuweBolletje.classList.add('zwart');
}


function naarVolgendeFilm() {
    // we zoeken wederom het huidige bolletje op
    // dat is het bolletje dat nu de class zwart heeft
    var huidigeBolletje = document.querySelector(".zwart");

    // we zoeken het volgende bolletje op
    // dat kan met de functie nextElementSibling
    var nieuweBolletje = huidigeBolletje.nextElementSibling;

    // als het laatste al actief was is er geen volgend bolletje
    // dan heeft nieuweBolletje de waarde null
    // als dat zo is doen we dit
    if (nieuweBolletje === null) {
        // we maken het eerste bolletje het nieuwe bolletje
        // dat betekent dat de lijst weer naar de eerste film gaat
        nieuweBolletje = document.querySelector("#navbolletjes a:first-child");
    }

    // dan laten we JS op het nieuwe bolletje klikken
    nieuweBolletje.click();

    // en dan moeten we zwart weer verplaatsen
    bolletjeZwart(nieuweBolletje);
}




function naarVorigeFilm() {
    // zelfde als boven alleen dan de andere kant op
    var huidigeBolletje = document.querySelector(".zwart");
    var nieuweBolletje = huidigeBolletje.previousElementSibling;

    if (nieuweBolletje === null) {
        nieuweBolletje = document.querySelector("#navbolletjes a:last-child");
    }

    nieuweBolletje.click();
    bolletjeZwart(nieuweBolletje);
}

//
////KEY EVENT BRON: https://stackoverflow.com/questions/45639000/adding-keyboard-navigation-to-a-slideshow
//document.addEventListener('keydown', function (e) {
//    if (e.keyCode == 37) {
//        var huidigeBolletje = document.querySelector(".zwart");
//        var nieuweBolletje = huidigeBolletje.previousElementSibling;
//        nieuweBolletje = document.querySelector("#navbolletjes a:last-child");
//    } else if (e.keyCode == 39) {
//        var huidigeBolletje = document.querySelector(".zwart");
//        var nieuweBolletje = huidigeBolletje.nextElementSibling;
//        nieuweBolletje = document.querySelector("#navbolletjes a:first-child");
//    }
//});
