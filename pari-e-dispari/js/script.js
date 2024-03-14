//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.

//recupero il button per il trigger
let startBtn = document.getElementById("start-btn");

//creo l'evento al click
startBtn.addEventListener("click", function(){
    //raccolgo i dati che mi servono
    let userChoice = document.querySelector("#even-odd").value;
    let userNumber = parseInt(document.querySelector("#user-number").value);
    let computerNumber = getRandomIntInclusive(1, 5)

    //microvalidazione per il valore da 1 a 5 dell'utente
    if (userNumber > 5){
        alert("Devi inserire un numero tra 1 e 5!")
    } else {
        //faccio partire la funzione
        let result = sumEvenOrOdd(userNumber, computerNumber);

        //in base al risultato, printo in pagina
        if (userChoice === result){
            document.querySelector("#result").innerHTML = "Hai vinto!";
        } else {
            document.querySelector("#result").innerHTML = "Hai perso, ma provaci ancora";
        }
    }
})


// FUNCTIONS

// funzione che prende due numeri, li somma e returna se quest'ultima è pari e dispari
// argomenti: due int
// result: una str
function sumEvenOrOdd(num1, num2) {
    let sum = num1 + num2;
    let evenOdd;

    if (sum % 2 === 0){
        evenOdd = "even";
    } else {
        evenOdd = "odd";
    }

    return evenOdd;
}

//funzione per la generazione di numeri random, presa da 3WS
function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
    }