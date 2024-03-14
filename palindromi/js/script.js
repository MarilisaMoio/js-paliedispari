//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma
//Su internet ci sono soluzioni con join e reverse, non potete usarle!

let userWord = prompt("Inserisci una parola per verificare se è palindroma")
console.log(checkThisPalindrome(userWord))

//versione plus
let userPhrase = prompt("Inserisci una frase per verificare se è palindroma")
console.log(checkThisPalindromePhrase(userPhrase))

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
//versione con l'aggiunta del replace per eliminare gli spazi
function checkThisPalindromePhrase(phrase){
    let noWhitesPhrase = phrase.replace(/\s/g, '');
    console.log(noWhitesPhrase)
    let lowerPhrase = noWhitesPhrase.toLowerCase();
    let phraseReversed = "";

    for (let i = lowerPhrase.length - 1; i >= 0; i--){
        phraseReversed += lowerPhrase[i];
    }

    let palOrNot;
    if (phraseReversed === lowerPhrase){
        palOrNot = `"${phrase}" è palindroma!`
    } else {
        palOrNot = `"${phrase}" non è palindroma!`
    }

    return palOrNot;
}