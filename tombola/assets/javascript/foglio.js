

//variabili e costanti globali

tira(numeroCasuale)
numeriDa1a100 = []



//creo ma forse non serve
const numeriDa1a100 = [];
for (let i = 1; i <= 90; i++) {
  numeriDa1a100.push(i);
}
///


const creaTabella = (numeriDa1a100) => {
    
}



console.log(numeriDa1a100);

//mi gerero un numero casuale da 1 a 100 e attribuisco alla funzione un id per poterla chiamare

function tira(numeroCasuale){
    const tira = Math.floor(Math.random() * 89) + 1;
    document.getElementById("tira").textContent = 'numero casuale:' + numeroCasuale;
}




document.getElementById('tira').addEventListener('click', NumeroCasuale); //collegamento con id tira del pulsante html. attiva la funzione n casuale



