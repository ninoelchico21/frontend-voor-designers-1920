# Procesverslag Frontend voor Designers Opdracht 2

## Schets idee:
Het idee dat ik had gekozen was een carousel waarmee je van links naar recht kunt swipen en klikken. Verder hoopte ik dat ik het in een rondje kon krijgen of met een 3d effect zou kunnen creëren.

![alt text](https://ninoelchico21.github.io/frontend-voor-designers-1920/opdracht2/readmeimg/schets.jpg "Carousel schetsen")



## Eerste versie film:
In de eerste versie van mijn ontwerp heb ik de **afbeeldingen van de carousel** in de html geplaatst. Ik zat vooral met de grootes en de positie van de afbeeldingen. Vervolgens ben ik de **pijltjes** gaan toevoegen die png'tjes zijn.

![alt text](https://raw.githubusercontent.com/ninoelchico21/frontend-voor-designers-1920/master/opdracht2/readmeimg/versie1.png "Carousel versie 1")



## Tweede versie film:
In de tweede versie van mijn ontwerp ben ik de carousel gaan maken. Zoals je kunt zien hebben de paddings kleuren gekregen om het makelijker te maken voor mezelf. Vervolgens zijn de **navigatie bolletjes** onderin gemaakt. Met **li** tjes zijn de bolletjes gestyled. De bolletjes linken naar de afbeeldingen, zodat de juiste afbeelding wordt geshowed wanneer er op een nav bolletje wordt geklikt. Verder zijn de 'vorige' en 'volgende' knoppen aan de carousel toegevoegd. Tot slot is er js toegevoegd, om ervoor te zorgen dat de nav bolletjes feedback geven aan de gebruiker wanneer er op een bolletje geklikt wordt.

![alt text](https://raw.githubusercontent.com/ninoelchico21/frontend-voor-designers-1920/master/opdracht2/readmeimg/versie2.png "Carousel versie 2")



## Derde versie film:
In de derde versie van mijn ontwerp heb ik de carousel **klikbaar** gemaakt met js. Nu kan de gebruiker door de afbeeldingen heen en terug klikken. Met functions, eventlisteners en if/else statements met true/false conditions heb ik met behulp van medestudent **Sebastiaan**  ervoor kunnen zorgen dat je van de eerste tot laatste afbeelding en andersom, kunt klikken. Verder heb ik de styling iets aangepast, vond  de kleurenpadding wel een leuk idee voor de kleuren van Aruba. Ik noem het: **De Arusel**.

![alt text](https://raw.githubusercontent.com/ninoelchico21/frontend-voor-designers-1920/master/opdracht2/readmeimg/versie3.png "Carousel versie 3")



## Vierde versie film:
In de vierde versie van mijn ontwerp heb ik een gif toegevoegd om de gebruiker te helpen. Verder heb ik in de js geprobeerd om de gif weg te halen wanneer er geklikt wordt om naar de volgende afbeelding te gaan.

![alt text](https://raw.githubusercontent.com/ninoelchico21/frontend-voor-designers-1920/master/opdracht2/readmeimg/versie4.png "Carousel versie 4")



## Feedback formulier:
![alt text](https://ninoelchico21.github.io/frontend-voor-designers-1920/opdracht2/readmeimg/feedback.jpg "Feedback formulier opdracht 2")


## Code dat niet was gelukt uiteindelijk:

### 1.) js: het klikbaar maken van de carousel lukte met deze code helaas niet.
//Snapte het niet meer, omdat er in de console een error stond dat 'vorigeKnop' geen eventlistener is.
//Verder makakte deze codes de forloop van de navbolletjes kapot.


**poging 1**
 document.getElementByClassName("vorige").onclick = vorigeBol(){
    bolletje[i]--;
};
function vorigeKnop(){
    document.getElementsByClassName("vorige");
    this.onclick();
    bolletje[i]--;
}


**poging 2**
   function vorigeKnop() {
   document.getElementsByClassName("vorige");
   this.onclick();
   bolletje[i]--;
    }

document.getElementsByClassName("vorige").addEventListener('click', vorigeKnop);
}


**poging 3**
var i = 0;

function vorigeBol(){
i--;
}
function volgendeBol(){
i++;
}

var vorigeKnop = document.getElementByClassName("vorige").onclick = vorigeBol()
vorigeKnop.addEventListener('click', vorigeBol);
volgendeKnop.addEventListener('click', volgendeBol);


### 2.) js: het removen van de gif wanneer er op 'volgende' geklikt wordt.


var removeGif = document.querySelector('#arrowgif');
removeGif.addEventListener('click', stopGif);

function stopGif() {
    removeGif.parentNode.removeChild('img');
}



