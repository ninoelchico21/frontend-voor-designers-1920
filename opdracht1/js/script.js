/*
  Wat doe je ook alweer in Javascript voor een micro-interactie?
  1. Gebruik de querySelector om een element in je html te selecteren
  2. Koppel een evenListener aan het element om een mouse-event te detecteren
  3. Gebruik het Classlist object om een css class aan een element toe te voegen of weg te halen.
*/


// Variabelen opstellen: select the HTML elements which you want to manipulate
var emojiHeart = document.querySelector('.emoji-heart');

// Hier hang ik een oortje aan de ... die checkt of er een klik plaatsvind.
// Bij een click wordt de functie verzinfunctie gerunned.
emojiHeart.addEventListener('click', verzinFunctie);

// Deze functie toggled de classes cssselector1 en cssselector2. Deze kun je in css vinden.
function verzinFunctie() {
    emojiHeart.classList.toggle('active');
    emojiHeart.classList.toggle('active');
}
