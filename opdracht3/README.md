# frontend voor designers - opdracht 3: Een interactie uitwerken met externe data

**Link naar website:** https://ninoelchico21.github.io/frontend-voor-designers-1920/


kleine doelen voor mezelf:
1. liked movies filteren: alle / gehartte
2. tekst onder films: show more -> show less
3. trailer invoegen (extra)



**vraag 1 voor vrijdag 3 april:** Hoe filter ik op likes/alles? Ik had een kleine beginnetje gemaakt, maar weet alleen niet hoe ik moet beginnen.


**vraag 2 voor vrijdag 3 april:** Hoe maak ik een read more button? Heb een tutorial gezien en het zag er best makkelijk uit, alleen het gaat lastig als de p tekst vanuit een json bestand is opgehaald en niet in de html staat. ik wil bij de plottekst zegmaar een 'show more'/'show less' button maken. Ik was begonnen met het maken van een button element en een span element, maar weet niet hoe ik verder moet. code:

var readMoreButton = document.createElement('button');
var readMore = document.createElement('span');



## Schets idee:
Mijn originele idee was om de vorige twee opdrachten te combineren: mijn filmlijst waarbij je films kan harten en "opslaan" en een fotocarousel. Het idee is om een carousel te maken met filmposters die je kan harten.

![alt text](https://ninoelchico21.github.io/frontend-voor-designers-1920/opdracht3/readmeimg/schetsen.jpg "schetsen")



## Versie 1.0:
In deze versie heb ik de films geplaatst en in een carousel geplaatst. Verder zijn er navigatiebolletjes toegevoegd en carouselknoppen.Tot slot is er data opgehaald uit een json bestand.

![alt text](https://raw.githubusercontent.com/ninoelchico21/frontend-voor-designers-1920/master/opdracht3/readmeimg/versie1a.png " Movie Carousel versie 1")
![alt text](https://raw.githubusercontent.com/ninoelchico21/frontend-voor-designers-1920/master/opdracht3/readmeimg/versie1b.png " Movie Carousel versie 1")
![alt text](https://raw.githubusercontent.com/ninoelchico21/frontend-voor-designers-1920/master/opdracht3/readmeimg/versie1c.png " Movie Carousel versie 1")



## Versie 2.0:
In deze versie is er geprobeerd om de navbolletjes zwart te maken wanneer er opdrukt wordt. Ook is er een poging gewaagd om de carousel buttons klikbaar te maken. Wat visueel is verandert is aan mijn website is dat de eerste bolletje zwart is gemaakt.

![alt text](https://raw.githubusercontent.com/ninoelchico21/frontend-voor-designers-1920/master/opdracht3/readmeimg/versie2.png " Movie Carousel versie 2")

## Versie 2.1:
In deze versie is de carousel klikbaar gemaakt en worden de nav bolletjes zwart wanneer erop geklikt word.



## Versie 3.0:
In deze versie is er een klikbare heart button svg toegevoegd aan het document. De carousel kun je nu bedienen met toetsen. Verder is er en beginnetje gemaakt aan de filters. Er is nagedacht over een show more/show less button.

![alt text](https://raw.githubusercontent.com/ninoelchico21/frontend-voor-designers-1920/master/opdracht3/readmeimg/versie3a.png " Movie Carousel versie 3a")
![alt text](https://raw.githubusercontent.com/ninoelchico21/frontend-voor-designers-1920/master/opdracht3/readmeimg/versie3b.png " Movie Carousel versie 3b")




=================================================
ARCHIEF VAN VORIGE VRAGEN DIE AL BEANTWOORD ZIJN
=================================================

**vraag 1 voor donderdag 26maart:** Het linken van de navbuttons is gelukt (nogmaals bedankt), en ik ben nu bezig met het zwart maken van de navbutton wanneer er op geklikt wordt. Ik heb hierbij geprobeerd de code van mijn vorige opdracht over te nemen en een beetje aan te passen. Hier roep ik eerst met een andere variabele de id "film" aan en vervolgens maak ik een loopje aan waarin ik een clickevent aanmaak en een function aanroep. Ik snap niet wat ik verkeerd doe en de console zegt: *Uncaught TypeError: Cannot read property 'length' of null*. Kan je mij helpen?

<!--
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
-->



**vraag 2 voor donderdag 26maart:**  Toen hetgeen hierboven mij niet lukte, heb ik geprobeerd om de carousel buttons aan de praat te krijgen . Ik heb de code van de vorige opdracht proberen te gebruiken en de id's te gebruiken die jij hebt gemaakt bij liFilm. In mijn console stond er geen foutmelding, maar een een array met de info per film. Ik begin nu te twijfelen of ik de juiste richting aan het gaan ben?

<!--
var vorigeKnop = document.querySelector('.vorige');
var volgendeKnop = document.querySelector('.volgende');


<!--
var imageOne = true;
var imageTwo = false;
var imageThree = false;
var imageFour = false;
var imageFive = false;
var imageSix = false;
-->

<!--
// Hieronder worden de functies gemaakt waarin ik in een if statement zeg dat de image steeds een image verder kan als het true is.
// Dus van 1 naar 2, 2 naar 3 etc..
function volgendeBol() {
    //    var huidigeBolletje = document.querySelector(".zwart").parentNode;
    //    var nieuweBolletje = huidigeBolletje.nextSibling;
    //    console.log(nieuweBolletje.href);
    //    window.location = nieuweBolletje;
-->


    if (imageOne === true) {
        event.preventDefault();
        document.getElementById("Two").click();
        imageOne = false;
        imageTwo = true;
    } else if (imageTwo === true) {
        event.preventDefault();
        document.getElementById("Three").click();
        imageTwo = false;
        imageThree = true;
    } else if (imageThree === true) {
        event.preventDefault();
        document.getElementById("Four").click();
        imageThree = false;
        imageFour = true;
    } else if (imageFour === true) {
        event.preventDefault();
        document.getElementById("Five").click();
        imageFour = false;
        imageFive = true;
    } else if (imageFive === true) {
        event.preventDefault();
        document.getElementById("Six").click();
        imageFive = false;
        imageSix = true;
    } else if (imageSix === true) {
        event.preventDefault();
        document.getElementById("One").click();
        imageSix = false;
        imageOne = true;
    }
}


<!--
//In deze functie doe ik hetzelfde, alleen andersom nu.
// Dus van 1 naar 6, 6 naar 5 etc..
-->

<!--function vorigeBol() {-->

    if (imageOne === true) {
        event.preventDefault();
        document.getElementById("Six").click();
        imageOne = false;
        imageSix = true;
    } else if (imageTwo === true) {
        event.preventDefault();
        document.getElementById("One").click();
        imageTwo = false;
        imageOne = true;
    } else if (imageThree === true) {
        event.preventDefault();
        document.getElementById("Two").click();
        imageThree = false;
        imageTwo = true;
    } else if (imageFour === true) {
        event.preventDefault();
        document.getElementById("Three").click();
        imageFour = false;
        imageThree = true;
    } else if (imageFive === true) {
        event.preventDefault();
        document.getElementById("Four").click();
        imageFive = false;
        imageFour = true;
    } else if (imageSix === true) {
        event.preventDefault();
        document.getElementById("Five").click();
        imageSix = false;
        imageFive = true;
    }
}
<!--

//Hieronder hang ik een oortje aan de vorige en volgende knop
//die luistert naar clicks, zodat de daarbijbehorende functies kunnen worden getriggerd.
//vorigeKnop.addEventListener('click', vorigeBol);
//volgendeKnop.addEventListener('click', volgendeBol);
-->


____________________________________________________________________________________________________________


**vraag 1 voor donderdag 2 April:** Ik heb geprobeerd om een hartvormige svg in mijn document te krijgen. Ik heb het met .createElementNS gedaan, ik had eerst een cirkel proberen te maken eals test die ik op deze website had gevonden, maar ik krijg alleen een lege ruimte te zien in mijn html. Ik kan de svg nogsteeds niet zien zelfs als ik hem een kleur geef. Dit was mijn code:

Gebruikte bron: http://xahlee.info/js/js_scritping_svg_basics.html

//      hieronder maak ik de svg aan
        var heartSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

        heartSvg.setAttribute("width", "100");
        heartSvg.setAttribute("height", "100");

        var heartVorm = document.createElementNS('http://www.w3.org/2000/svg', 'heart')
        heartVorm.setAttribute("fill", "red");

        heartSvg.appendChild(heartVorm);

        heartSvg.innerHTML = movies[i].svg;


**vraag 2 voor donderdag 2 April:** Het andere wat ik had geprobeerd was het toevoegen van keyboard events. Ik heb meerdere codes geprobeerd maar het schiet niet echt op. Soms kon ik de films wel zien in mijn html en soms niet. Dit waren een paar van mijn codes:

Gebruikte bron: https://stackoverflow.com/questions/45639000/adding-keyboard-navigation-to-a-slideshow

//POGING 1
function naarVorigeFilm() {

    var huidigeBolletje = document.querySelector(".zwart");
    var nieuweBolletje = huidigeBolletje.previousElementSibling;
    document.addEventListener('keydown', function (e));

    if (nieuweBolletje === null) {
        nieuweBolletje = document.querySelector("#navbolletjes a:last-child");
    } else if (e.keyCode == 37) {
        nieuweBolletje = document.querySelector("#navbolletjes a:last-child");
    }

    nieuweBolletje.click();
    bolletjeZwart(nieuweBolletje);
}


//POGING 2
document.addEventListener('keydown', function (e) {
    if (e.keyCode == 37) {
        var huidigeBolletje = document.querySelector(".zwart");
        var nieuweBolletje = huidigeBolletje.previousElementSibling;
        nieuweBolletje = document.querySelector("#navbolletjes a:last-child");
    } else if (e.keyCode == 39) {
        var huidigeBolletje = document.querySelector(".zwart");
        var nieuweBolletje = huidigeBolletje.nextElementSibling;
        nieuweBolletje = document.querySelector("#navbolletjes a:first-child");
    }
});

____________________________________________________________________________________________________________



=================================================
            ARCHIEF VAN MISLUKTE CODE
=================================================

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


//  MISLUKTE CODE: ID TOEVOEGEN AAN LI

//  Hieronder maak ik de variabele idToLi aan,
//  zodat ik in de loop een id aan alle li-tjes kan geven.
//  var idToLi = document.querySelector('li');

//  Hier voeg ik aan alle li-tjes een id genaamd link toe
//  idToLi.id = 'link'

