# Procesverslag Frontend voor Designers

## Schets idee:
Het idee dat ik had gekozen was een mobiele scherm waarop je films onder elkaar ziet en ze kunt harten. De gehartte films kon je dan terugvinden op een andere pagina genaamd "hearts'.

![alt text](https://ninoelchico21.github.io/frontend-voor-designers-1920/opdracht1/readmeimg/ontwerp.jpg "Ontwerpen films")



## Eerste versie film:
In de eerste versie van mijn ontwerp heb ik de filmposters geplaatst en ben ik vooral bezig geweest met het **positioneren** van dingen en met de margins paddings etc. Verder ben ik gaan kijken naar mijn **'heart' button**. Zoals je hieronder kunt zien zat ik nog te twijfelen over een emoji of een div.

![alt text](https://ninoelchico21.github.io/frontend-voor-designers-1920/opdracht1/readmeimg/opdracht1versie11van6.png "Versie 1 (1/6)")
![alt text](https://ninoelchico21.github.io/frontend-voor-designers-1920/opdracht1/readmeimg/opdracht1versie12van6.png "Versie 1 (2/6)")
![alt text](https://ninoelchico21.github.io/frontend-voor-designers-1920/opdracht1/readmeimg/opdracht1versie13van6.png "Versie 1 (3/6)")
![alt text](https://ninoelchico21.github.io/frontend-voor-designers-1920/opdracht1/readmeimg/opdracht1versie14van6.png "Versie 1 (4/6)")
![alt text](https://ninoelchico21.github.io/frontend-voor-designers-1920/opdracht1/readmeimg/opdracht1versie15van6.png "Versie 1 (5/6)")
![alt text](https://ninoelchico21.github.io/frontend-voor-designers-1920/opdracht1/readmeimg/opdracht1versie16van6.png "Versie 1 (6/6)")



## Tweede versie film:
In de tweede versie heb ik vooral de **css** aangepast. Ik heb de keuze gemaakt om de heart button op een unieke wijze te maken: namelijk als **toggle button**. Onder elke filmposter zie je deze staan. Je kunt hem toggelen van een zwart hartje naar een rood hartje. Verder heb ik een klein beginnetje gemaakt aan de javascript door de basics variabele-eventlistener-function erin te plaatsen. Het is nog een placeholder zegmaar. Tot slot heb ik ook nog een beginnetje gemaakt aan mijn 'hearts' pagina, waarbij je de gehartte films kunt 'terugvinden'

![alt text](https://ninoelchico21.github.io/frontend-voor-designers-1920/opdracht1/readmeimg/opdracht1versie21van5.png "Versie 2 (1/5)")
![alt text](https://ninoelchico21.github.io/frontend-voor-designers-1920/opdracht1/readmeimg/opdracht1versie22van5.png "Versie 2 (2/5)")
![alt text](https://ninoelchico21.github.io/frontend-voor-designers-1920/opdracht1/readmeimg/opdracht1versie23van5.png "Versie 2 (3/5)")
![alt text](https://ninoelchico21.github.io/frontend-voor-designers-1920/opdracht1/readmeimg/opdracht1versie24van5.png "Versie 2 (4/5)")
![alt text](https://ninoelchico21.github.io/frontend-voor-designers-1920/opdracht1/readmeimg/opdracht1versie25van5.png "Versie 2 (5/5)")



## Derde versie (na feedback) versie:
In deze versie heb ik mijn ontwerp het meest aangepast. Ik heb de harttogglebuttons helaas moeten weggooien uit mijn site. Het positieve was dat ik nu een grote slag heb geslagen met de **javascript**. Met behulp van Jamie heb ik met **svg'tjes** een nieuwe hart button kunnen coderen. De iteratieslag heeft er ook voor gezorgt dat mijn css een zooitje is, maar dat ga ik nog aanpassen. Tot slot heb ik mijn **'hearts' pagina** ook moeten verwijderen, omdat het handiger voor mij was als ik de gehartte films zou filteren. Dit moet ik nog wel doen.

![alt text](https://ninoelchico21.github.io/frontend-voor-designers-1920/opdracht1/readmeimg/opdracht1versie31van3.png "Versie 3 (1/3)")
![alt text](https://ninoelchico21.github.io/frontend-voor-designers-1920/opdracht1/readmeimg/opdracht1versie32van3.png "Versie 3 (2/3)")
![alt text](https://ninoelchico21.github.io/frontend-voor-designers-1920/opdracht1/readmeimg/opdracht1versie33van3.png "Versie 3 (3/3)")


## Final versie:
In de Final versie heb ik meerdere malen geprobeert om ervoor te zorgen dat mijn gehartte films te filteren wanneer ik op het menu item 'hearts' klik. Dit is mij helaas niet gelukt. Het lastige was vooral het verbinden van het rode hartje met de filmposter en titel. Waarschijnlijk heb ik er iets te moeilijk over nagedacht. Verder ben ik gaan werken aan de feedback door iets meer **hierarchie** toe te voegen door de **lettergroottes en spatiëringen** aan te passen. Ook ben ik gaan kijken hoe ik het begip *keep users in control*  kan toepassen. Dit heb ik geprobeert door bovenaan de pagina een melding te tonen met uitleg over de site/heartbutton en door een mini reminder te geven bij de heartbutton zelf. Tot slot heb ik de css een beetje aangepast en is het mij gelukt om de nav volledig te fiksen.


![alt text](https://raw.githubusercontent.com/ninoelchico21/frontend-voor-designers-1920/master/opdracht1/readmeimg/opdracht1finalversie1van2.png "Final versie (1/2)")
![alt text](https://ninoelchico21.github.io/frontend-voor-designers-1920/opdracht1/readmeimg/opdracht1finalversie2van2.png "Final versie (2/2)")


## Feedback formulier:
![alt text](https://ninoelchico21.github.io/frontend-voor-designers-1920/opdracht1/readmeimg/feedbackformulier.jpg "Feedback formulier")




## Code dat niet was gelukt uiteindelijk:

### 1.) css: wel gelukt, maar niet te manipuleren met js

/************************************************
                   HEART TOGGLE
*************************************************/

.emoji-toggle {
    position: relative;
    width: 60px;
    margin: 25px auto;
}

.emoji-toggle .well {
    display: block;
    background: #eee;
    height: 20px;
    border-radius: 10px;
    cursor: pointer;
}

.emoji-toggle .toggle {
    opacity: 0;
    border: 0;
    outline: none;
    height: 100%;
    width: 100%;
    background: transparent;
    position: absolute;
    cursor: pointer;
    z-index: 100;
}

.emoji-toggle .toggle ~ .emoji:before {
    content: "🖤";
    position: absolute;
    left: 0;
    top: -15px;
    font-size: 40px;
    -webkit-transition: 0.2s;
    transition: 0.2s;
}

.emoji-toggle .toggle:checked ~ .emoji:before {
    left: 100%;
    margin-left: -1em;

}

.emoji-toggle .toggle ~ label {
    white-space: nowrap;
}

.emoji-toggle .toggle ~ label:before {
    position: absolute;
    right: 100%;
    margin-right: 5px;
    top: 0;
}

.emoji-toggle .toggle ~ label:after {
    position: absolute;
    left: 100%;
    margin-left: 5px;
    top: 0;
}

.emoji-heart .toggle ~ .emoji:before {
    content: "🖤";
}

.emoji-heart .toggle:checked ~ .emoji:before {
    content: "❤️";
}

.heart-item {
    position: absolute;
    height: 24px;
    width: 24px;
    top: -10px;
    right: -10px;
}

&:before {
    content: '1';
    display: block;
    line-height: 24px;
    height: 24px;
    width: 24px;
    font-size: 12px;
    font-weight: 600;
    background: #2bd156;
    color: white;
    border-radius: 20px;
    text-align: center;
}

.heart-item.active {
    position: relative;
    height: 24px;
    width: 24px;
    top: 22px;
    right: 335px;
}





### 2.) js: gehartte films filteren. / css: display block, display none

// Deze functie toggled de classes cssselector1 en cssselector2. Deze kun je in css vinden.
function showLiked() {
    console.log("werkt");

    if (blackHart = this.classList.toggle('redhart')) {
        filmTitel = document.getElementsByClassName('filmentitel');
        filmTitel.classList.add('heartsshowed');
    } else {
        filmTitel = document.getElementsByClassName('filmentitel');
        filmTitel.classList.add('hiddenhearts');
    }

}

.heartsshowed {
    display: block;
}

.hiddenhearts {
    display: none;
}











