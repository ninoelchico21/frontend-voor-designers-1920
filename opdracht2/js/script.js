/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

//  Hier maak ik variabelen aan en selecteer ik de twee knoppen uit de html document, de nav bolletjes, en de images
var bolletje = document.getElementsByClassName('bol');

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


//In deze functie doe ik hetzelfde, alleen andersom nu.
// Dus van 1 naar 6, 6 naar 5 etc..

function vorigeBol() {

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



//Hieronder hang ik een oortje aan de vorige en volgende knop
//die luistert naar clicks, zodat de daarbijbehorende functies kunnen worden getriggerd.
vorigeKnop.addEventListener('click', vorigeBol);
volgendeKnop.addEventListener('click', volgendeBol);


//Dit is het loopje, de nav bolletjes gaan erdoorheen zodat er eentje zwart wordt wanner erop geklikt wordt.
var i = 0;

for (i = 0; i < bolletje.length; i++) {

    bolletje[i].addEventListener('click', bolletjeZwart);

    function bolletjeZwart() {
        document.querySelector(".zwart").classList.remove("zwart");
        this.classList.add('zwart');

    }
