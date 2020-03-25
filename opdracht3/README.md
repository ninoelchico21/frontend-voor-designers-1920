# frontend voor designers - opdracht 3: Een interactie uitwerken met externe data


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



## Schets idee:
Mijn originele idee was om de vorige twee opdrachten te combineren: mijn filmlijst waarbij je films kan harten en "opslaan" en een fotocarousel. Het idee is om een carousel te maken met filmposters die je kan harten.

![alt text](https://ninoelchico21.github.io/frontend-voor-designers-1920/opdracht3/readmeimg/schets.jpg "schetsen")



## Versie 1.0:
In deze versie heb ik de films geplaatst en in een carousel geplaatst. Verder zijn er navigatiebolletjes toegevoegd en carouselknoppen.Tot slot is er data opgehaald uit een json bestand.

![alt text](https://raw.githubusercontent.com/ninoelchico21/frontend-voor-designers-1920/master/opdracht3/readmeimg/versie1a.png " Movie Carousel versie 1")
![alt text](https://raw.githubusercontent.com/ninoelchico21/frontend-voor-designers-1920/master/opdracht3/readmeimg/versie1b.png " Movie Carousel versie 1")
![alt text](https://raw.githubusercontent.com/ninoelchico21/frontend-voor-designers-1920/master/opdracht3/readmeimg/versie1c.png " Movie Carousel versie 1")



## Versie 2.0:
In deze versie is er geprobeerd om de navbolletjes zwart te maken wanneer er opdrukt wordt. Ook is er een poging gewaagd om de carousel buttons klikbaar te maken. Wat visueel is verandert is aan mijn website is dat de eerste bolletje zwart is gemaakt.

![alt text](https://raw.githubusercontent.com/ninoelchico21/frontend-voor-designers-1920/master/opdracht3/readmeimg/versie2.png " Movie Carousel versie 2")

