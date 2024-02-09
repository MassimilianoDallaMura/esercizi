/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

/*SOLUZIONE
let sum = 10 + 20
console.log (sum);
*/

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/


/*SOLUZIONE
function generaNumero() {
  let random = Math.floor(Math.random() * 20 +1); //funzione che genera un numero casuale da 0 a 19 + 1 
  
  return random;  //ritorna il numero generato
}

numeroCasuale = generaNumero(); //richiamo la funzione 
console.log(numeroCasuale); //stampo il numero generato
*/


/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/


/* SOLUZIONE
let me = {
  name: "Massimiliano",
  surname: "Dalla Mura",
  age: 32
}

console.log(me);

*/


/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

/*SOLUZIONE
delete me.age;
console.log(me);
*/


/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/


/*SOLUZIONE
me.skills = []; //creo array vuoto 

let skills = ["html", "css", "javascript"]; //riempio l'array con delle skills

for(let i = 0; i<skills.length; i++){ //avvio ciclo: per ogni oggetto contenuto nell'indice dell'array, 
  me.skills.push(skills[i]);          //lo pusho dentro l'oggetto me creato prima
}                                     //penso si potrebbe utilizzare anche una funzione freccia per alleggerire il codice rg 73

console.log(me);

*/



/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

/*SOLUZIONE
me.skills.push("angular");
console.log(me)
*/

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

/*SOLUZIONE
me.skills.pop();
console.log(skills)
*/


// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/


/* SOLUZIONE
function dice(){
  let numeroCasuale = Math.floor((Math.random() * 6) + 1);
  return numeroCasuale;
}

let numero = dice()
console.log(numero)

*/


/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

/* SOLUZIONE
let num1 = 11
let num2 = 19


function whoIsBigger(num1, num2) {
  // Controlla quale numero è maggiore
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

let risultato = whoIsBigger(num1, num2);
console.log("Il numero più grande è: " + risultato);

*/


/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/


/* SOLUZIONE
const stringa = "i love coding"

function splitMe(stringa) {
  const risultato = stringa.split(" ");
  return risultato;
}

const risultato = splitMe(stringa);
console.log(risultato);
*/


/* SOLUZIONE 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/


/* SOLUZIONE
const stringa = "ciao"
const booleano = false

function deleteOne(stringa, booleano) {
  if (booleano === true) {
    return stringa.slice(1);
  } else {
    return stringa.slice(0, -1);
  }
}
console.log(deleteOne(stringa, booleano))

*/


/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"

*/


/* SOLUZIONE
stringa = "ho preso 48 su 100 all'esame"

function onlyLetters(stringa){ //attribuisco un valore alla proprietà stringa
  const soloLettere = stringa.replace(/\d/g, ''); //onestamente ho cercato guardato gli appunti, ho pensato al regex solo dopo averlo visto
  return soloLettere;
}

const senzaNumeri = onlyLetters(stringa);
console.log(senzaNumeri)
*/


/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

/* SOLUZIONE

let email = "massi@dallamura.it"

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  return regex.test(email); //è test che restituisce il valore booleano in base a se la regex (con attributo email) corrisponde
}

console.log(isValidEmail(email));


*/



/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

/* SOLUZIONE
function whatDayIsIt(){
  const oggi = new Date();
  const giorno = oggi.getDay();
  const giorni = ['lunedì','martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato','domenica']; 
  return giorni[giorno];
}

console.log(whatDayIsIt());  //sfasato di un giorno

*/

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

//do il nome alla funzione, stabilisco giorni settimana e creo array, attribuisco il parametro attraverso una let, definisco giorno corrente, 



/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

//devo sapere che giorno è oggi, quindi stabilisco la data di oggi e attribuisco il mese

/* ZOLUZIONE NON FUNZIONA, Dà SEMPRE FALSE
const compleanno = "2024-02-09"


function isTodayMyBirthday(compleanno){
  const oggi = new Date(); //definisco la data odierna
  const giorno = oggi.getDay(); // ottengo il giorno corrente
  const mese = oggi.getMonth(); // ottengo il mese
  const anno = oggi.getFullYear(); // non fondamentale per l'esercizio ma almeno ho il codice

  const formattazioneCompleanno = compleanno.getDay() === oggi && compleanno.getMonth() +1 && mese;
  return formattazioneCompleanno; //ritorna true se il compleanno è oggi
}

const mioCompleanno = new Date(compleanno); 
console.log(isTodayMyBirthday(mioCompleanno))

*/

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

/* SOLUZIONE 

const oggetto = { // Creo l'oggetto con proprietà
    nome: 'Prodotto',
    prezzo: 100,
    disponibile: true,
    recensioni: ["negative", "positive"]
};

function deleteProp(oggetto, recensioni) { // Creo la funzione e le attribuisco i parametri oggetto 
    if (oggetto.hasOwnProperty("recensioni")) { // Verifico se l'oggetto contiene la proprietà specificata
        delete oggetto[recensioni]; // Elimino la proprietà dall' array dell' oggetto
    }
    return oggetto; // Ritorno l'oggetto modificato
}

const oggettoSenzaProp = deleteProp(oggetto, 'recensioni');
console.log(oggettoSenzaProp);

*/





/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/


const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]


/*ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
  */

  /* SOLUZIONE
function newestMovie(movies) {
  movies.sort((a, b) => parseInt(b.Year) - parseInt(a.Year)); // OrdinO l'array dei film in base all'anno in ordine decrescente//ma non mi è ben chiaro l'uso della funzione freccia e del parsint
  
  // Ritorna il primo elemento dell'array ordinato, che sarà il film più recente
  return movies[0];
}

const FilmPiùRecente = newestMovie(movies);
console.log("Il film è:", FilmPiùRecente.Title,);
*/


/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/


/* SOLUZIONE
const numeroDiFilm = countMovies(movies)

function countMovies(movies){
  return movies.length;
}
console.log(numeroDiFilm)
*/

/*
function countMovies(movies){
  i = movies()
  for (let i=o; i.length; i++){
  }
  return //mmmmh
}
*/


/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

/*SOLUZIONE
function onlyTheYears(movies){
  const anni = []
  for (let i = 0; i < movies.length; i++){
    anni.push(movies[i].Year);
  }
  return anni;
}

const AnnoDeiFilm = onlyTheYears(movies);
console.log(AnnoDeiFilm)

*/

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/


/*SOLUZIONE
function onlyInLastMillennium(movies) { // Nomino la funzione 
  const filmUltimoMillennio = movies.filter(movie => parseInt(movie.Year) <= 2000); // anno da stringa a numero e controllo se <= 2000
  return filmUltimoMillennio;
}

const filmUltimoMillennio = onlyInLastMillennium(movies); 
console.log("I film dello scorso millennio sono:", filmUltimoMillennio); 

*/


/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/


/*
function removeIndex(indexToRemove, movies) {

  if (indexToRemove < 0 || indexToRemove >= movies.length) {   // Controllo se l'indice da rimuovere è valido
      console.log("L'indice specificato non è valido.");
      return movies; // Restituisco l'array originale se l'indice non è valido
  }

  const copiaDeiFIlm = [...movies]; //Creo una copia dell'array movies per non modificare quello originale

  copiaDeiFIlm.splice(indexToRemove, 1); // Rimuovo l'elemento nell'indice specificato

  return copiaDeiFIlm;
}


const FilmAggiornati = removeIndex(4, movies); // Rimuove l'elemento nella posizione 4
console.log("Array movies aggiornato:", FilmAggiornati);


/*

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/



/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */

