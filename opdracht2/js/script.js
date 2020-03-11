//  Hier maak ik variabelen aan en selecteer ik de twee knoppen uit de html document
//var vorigeKnop = document.querySelector('.vorige');
//var volgendeKnop = document.querySelector('.volgende');
//var links = document.querySelectorAll('#link .links');
var bolletje = document.getElementsByClassName('bol');

console.log(bolletje);

//  Vervolgens hang ik een oortje aan beide knoppen om te luisteren naar en click,
//  Zodat dan de bijbehorende functies worden getriggerd.
//vorigeKnop.addEventListener('click', nextLink);
//volgendeKnop.addEventListener('click', previousLink);

for (i = 0; i < bolletje.length; i++) {
    console.log(bolletje[i]);

    bolletje[i].addEventListener('click', bolletjeZwart);

    function bolletjeZwart() {
        document.querySelector(".zwart").classList.remove("zwart");
        this.classList.add('zwart');
    }
}






////  In de functie wil ik zeggen dat de volgende link moet worden geshowed
//function nextLink() {
//    console.log("werkt");
//
//    document.querySelector('#link1');
//    document.querySelector('#link2');
//}
//
//
////  In de functie wil ik zeggen dat de vorige link moet worden geshowed
//function previousLink() {
//    console.log("werkt");
//}
