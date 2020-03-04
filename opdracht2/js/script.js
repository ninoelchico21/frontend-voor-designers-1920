//  Hier maak ik variabelen aan en selecteer ik de twee knoppen uit de html document
var vorigeKnop = document.querySelector('.vorige');
var volgendeKnop = document.querySelector('.volgende');
var images =

    //  Vervolgens hang ik een oortje aan beide knoppen om te luisteren naar en click,
    //  Zodat dan de bijbehorende functies worden getriggerd.
    vorigeKnop.addEventListener('click', nextLink);
volgendeKnop.addEventListener('click', previousLink);


//  In de functie wil ik zeggen dat de volgende link moet worden geshowed
function nextlink() {
    console.log("werkt");

    document.querySelector('');

}


//  In de functie wil ik zeggen dat de vorige link moet worden geshowed
function previouslink() {
    console.log("werkt");
}
