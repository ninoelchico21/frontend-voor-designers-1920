// BLACK HEARTS, deze stap doe ik al laatste wanneer mijn carousel af is.
//var blackHart = document.getElementsByClassName('blackhearts');
//blackHart[0].addEventListener('click', blackheartClicked);
//
//// Hier zet ik de blackheart in een loop
//for (i = 0; i < blackHart.length; i++) {
//    blackHart[i].addEventListener('click', blackheartClicked);
//}
//
//
//// Deze functie toggled de classes .blackhearts en .redhart Deze kun je in css vinden.
//// In a function, this refers to the global object.
//function blackheartClicked() {
//    console.log(this);
//    this.classList.toggle('redhart');
//}




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
//  In de function worden variabelen aangemaakt: movies en mijnLijst,..
//  ..waarin de ul in het html document wordt opgezocht.
function showMovies(jsonObj) {


    var movies = jsonObj;
    var mijnLijst = document.querySelector('ul');
    //    var svg = document.querySelector('blackhearts');


    //  vervolgens wordt er loop gemaakt in de function....
    for (let i = 0; i < movies.length; i++) {
        var liItem = document.createElement('li');

        //  In de loop worden variabelen gemaakt, waarin html elementen worden gemaakt....
        var filmTitel = document.createElement('h2');
        var filmCover = document.createElement('img');
        var releaseDatum = document.createElement('date');
        var releaseDatumP = document.createElement('p');
        var plotTekst = document.createElement('p');

        //  In de html elementen worden vervolgens de data van het json document erin gegooid,...
        //  dus title bij h2, cover bij img etc..
        filmTitel.innerHTML = movies[i].title;
        plotTekst.innerHTML = 'Plot: ' + movies[i].plot;
        releaseDatum.innerHTML = movies[i].release_date;
        releaseDatumP.innerHTML = 'Release Date: ';
        releaseDatumP.appendChild(releaseDatum);
        filmCover.src = movies[i].cover;

        //  Die html elementen worden in li-tjes gezet...
        liItem.appendChild(filmTitel);
        liItem.appendChild(filmCover);
        liItem.appendChild(releaseDatumP);
        liItem.appendChild(plotTekst);

        //  Tot slot worden de li-tjes in ul gezet, zodat er een carousel gemaakt kan worden.
        mijnLijst.appendChild(liItem);

    }
}



//  ik heb de movies met cover en info in een carousel gezet,
//  de volgende stap die ik wil nemen is, om de li-tjes een id te geven,
//  zodat ik de navigatiebolletjes van de carousel ernaar kan linken.


//  MISLUKTE CODE:

//  Hieronder maak ik de variabele idToLi aan,
//  zodat ik in de loop een id aan alle li-tjes kan geven.
//  var idToLi = document.querySelector('li');

//  Hier voeg ik aan alle li-tjes een id genaamd link toe
//  idToLi.id = 'link'
