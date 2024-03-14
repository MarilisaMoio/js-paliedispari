//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma
//Su internet ci sono soluzioni con join e reverse, non potete usarle!

let userWord = prompt("Inserisci una parola per verificare se è palindroma")
console.log(checkThisPalindrome(userWord))

// FUNCTION
// partendo da una parola, returna se è palindroma andando a verificare se sono uguali indipendentemente dall'ordine, dopo aver reso tutto minuscono
// argomenti: una str
// return: una str
function checkThisPalindrome(word){
    let lowerWord = word.toLowerCase();
    let wordReversed = "";
    
    for (let i = lowerWord.length - 1; i >= 0; i--){
        wordReversed += lowerWord[i];
    }

    let palOrNot;
    if (wordReversed === lowerWord){
        palOrNot = `${word} è palindroma!`
    } else {
        palOrNot = `${word} non è palindroma!`
    }

    return palOrNot;
}