/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/


// BRONNEN:
// SVG toevoegen met js: http://xahlee.info/js/js_scritping_svg_basics.html
// Keyboard events: https://stackoverflow.com/questions/45639000/adding-keyboard-navigation-to-a-slideshow
// HTML details en summary elementen: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary


// link met data van de 6 films aangeroepen.
var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();



// bij het laden van de site de function showMovies getriggerd
// de variabele movies in de console geshowed.
request.onload = function () {
    var movies = request.response;
    console.log(movies);
    showMovies(movies);
}



// Hieronder wordt de functie 'showMovies' gerunt.
// In de function worden variabelen aangemaakt: movies, mijnLijst, deBolletjes...
// ..in mijnLijst wordt de ul in het html document opgezocht.
// in deBolletjes worden de id 'navbolletjes' in het html document opgezocht.
function showMovies(jsonObj) {
    var movies = jsonObj;
    var mijnLijst = document.querySelector('ul');
    var deBolletjes = document.querySelector('#navbolletjes');


    // vervolgens wordt er loop gemaakt in de function....
    for (let i = 0; i < movies.length; i++) {

        // de film aanmaken en toevoegen
        var liFilm = document.createElement('li');

        // de basis elementen van de film aanmaken en toevoegen
        // In de loop worden variabelen gemaakt, waarin html elementen worden gemaakt....
        var filmTitel = document.createElement('h2');
        var filmCover = document.createElement('img');
        // In de html elementen worden vervolgens de data van het json document erin gegooid,...
        // dus title bij h2, cover bij img etc..
        filmTitel.innerHTML = movies[i].title;
        filmCover.src = movies[i].cover;
        // die html elementen worden in li-tjes gezet...
        liFilm.appendChild(filmTitel);
        liFilm.appendChild(filmCover);



        // de details aanmaken en toevoegen
        // Gebruik gemaakt gebruik van de HTML details en summary elementen
        // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary
        var filmDetails = document.createElement('details');
        var filmDetailsSummary = document.createElement('summary');

        // overige elemnten van de film aanmaken en toevoegen
        var releaseDatum = document.createElement('date');
        var releaseDatumP = document.createElement('p');
        var plotTekst = document.createElement('p');

        // dus plot bij p, release datum bij date
        plotTekst.innerHTML = 'Plot: ' + movies[i].plot;
        releaseDatum.innerHTML = movies[i].release_date;
        releaseDatumP.innerHTML = 'Release Date: ';
        releaseDatumP.appendChild(releaseDatum);

        // De summary wordt gevuld met het woord "more"
        filmDetailsSummary.innerHTML = "more";
        // de summary vervolgens toevoegen aan de details
        filmDetails.appendChild(filmDetailsSummary);

        // de detail info toevoegen aan de details
        filmDetails.appendChild(releaseDatumP);
        filmDetails.appendChild(plotTekst);

        // het details element toevoegen aan de film
        liFilm.appendChild(filmDetails);



        // svg element aanmaken
        // bron: http://xahlee.info/js/js_scritping_svg_basics.html
        var heartSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        heartSvg.setAttribute("viewBox", "0 0 99.2 99.2");

        // vorm van het hartje aanmaken
        var heartVorm = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        heartVorm.setAttribute("d", "M80.4,17.5c-11-5.1-24-1.3-30.5,8.8C43,14.9,28.1,11.2,16.7,18C5.8,24.6,1.9,38.2,7.6,49.5c5.3,11.6,42.2,40.7,42.3,40.7S86.6,61.1,92,49.5C97.5,37.5,92.3,23.3,80.4,17.5z");

        // het hartje wordt in de svg gezet..
        heartSvg.appendChild(heartVorm);

        // eventlistener die class 'liked' toggled
        heartSvg.addEventListener("click", function () {
            this.parentNode.classList.toggle("liked");
        });

        // de hartvormige svg toevoegen aan de li.
        liFilm.appendChild(heartSvg);



        // de film (de li) een id geven
        liFilm.id = "film" + i;
        // de li-tjes worden in ul gezet, zodat er een carousel gemaakt kan worden.
        mijnLijst.appendChild(liFilm);



        // Het navigatie bolletje voor de film aanmaken
        var bolletje = document.createElement('a');
        bolletje.setAttribute("href", "#film" + i);

        // de bolletjes zijn linkjes
        // scrollen naar nieuwe link -> zorgt de link voor
        // nieuwe bolletje blauw maken ->
        // in de loop maak ik voor elk bolletje ook een eventlistener aan
        // daarmee wordt de functie bolletjeBlauw aangeroepen
        bolletje.addEventListener('click', function () {
            var nieuweBolletje = this;
            bolletjeBlauw(nieuweBolletje);
        });

        // het bolletje toevoegen aan de lijst met bolletjes
        deBolletjes.appendChild(bolletje);
    }
    /*****  EINDE LOOP  *****/



    // Dan als de loop klaar is het eerste bolletje blauw maken
    deBolletjes.querySelector("a:first-of-type").classList.add("blauw");

    // En tenslotte laten we de buttons luisteren naar clicks
    // Ook dit doe ik na het aanmaken van de films.
    // Zo werken de knoppen nog niet als de films er nog niet zijn.
    let vorigeKnop = document.querySelector('.vorige');
    let volgendeKnop = document.querySelector('.volgende');

    // functions aanroepen
    vorigeKnop.addEventListener('click', naarVorigeFilm);
    volgendeKnop.addEventListener('click', naarVolgendeFilm);



    ////KEY EVENT BRON: https://stackoverflow.com/questions/45639000/adding-keyboard-navigation-to-a-slideshow
    // ik maak gebruik van dezelde functies als bij de buttons
    document.addEventListener('keydown', function (e) {
        if (e.key == "ArrowLeft") {
            naarVorigeFilm();
        } else if (e.key == "ArrowRight") {
            naarVolgendeFilm();
        }
    });



    // DE FILTERS
    // de radio buttons opzoeken
    let allRadioButtonAll = document.body.querySelector("#all");
    let allRadioButtonLiked = document.body.querySelector("#liked");


    // de radio buttons laten luisteren naar het change event
    allRadioButtonAll.addEventListener("change", function () {
        // variabele aanmaken om het nieuwe filter in te stoppen
        // this is het element dat het event heeft laten afgaan
        // dat is dus de radio button die gewijzigd is
        // met this.value vraag je de waarde van de radio button op
        let hetFilterWordt = this.value;
        // vervolgens stop ik de waarde van dat filter in het data-filters attribuut van de body
        document.body.setAttribute("data-filters", hetFilterWordt);
        // dan verder met css om de films te verstoppen (of weer te tonen)
    });

    allRadioButtonLiked.addEventListener("change", function () {
        let hetFilterWordt = this.value;
        document.body.setAttribute("data-filters", hetFilterWordt);
    });

}

/*****  EINDE FUNCTION SHOWMOVIES   *****/



function bolletjeBlauw(nieuweBolletje) {
    // we zoeken het huidige bolletje op
    // dat is het bolletje dat nu de class blauw heeft
    var huidigeBolletje = document.querySelector(".blauw");
    // we verwijderen class blauw van dat bolletje
    huidigeBolletje.classList.remove("blauw");
    // daarna voegen we class blauw toe aan het nieuwe bolletje
    nieuweBolletje.classList.add('blauw');
}



function naarVolgendeFilm() {
    // we zoeken wederom het huidige bolletje op
    // dat is het bolletje dat nu de class blauw heeft
    var huidigeBolletje = document.querySelector(".blauw");

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

    // en dan moeten we blauw weer verplaatsen
    bolletjeBlauw(nieuweBolletje);
}



function naarVorigeFilm() {
    // zelfde als boven alleen dan de andere kant op
    var huidigeBolletje = document.querySelector(".blauw");
    var nieuweBolletje = huidigeBolletje.previousElementSibling;

    if (nieuweBolletje === null) {
        nieuweBolletje = document.querySelector("#navbolletjes a:last-child");
    }

    nieuweBolletje.click();
    bolletjeBlauw(nieuweBolletje);
}
