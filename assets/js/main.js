// Istruzioni

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).







//  il numero di chilometri che vuole percorrere


 
 const chilometriDaPercorrere = prompt (`Qaunti chilometri vuoi percorere?`);
 console.log(chilometriDaPercorrere);



// e l'età del passeggero.


const currentAge = prompt (`Quanti anni hai?`);
console.log(currentAge);


// il prezzo del biglietto è definito in base ai km (0.21 € al km)


const tariffaInBaseAiKm = 0.21;
console.log(tariffaInBaseAiKm);

const prezzoInBaseAiKmPercorsi = chilometriDaPercorrere * tariffaInBaseAiKm;
console.log(prezzoInBaseAiKmPercorsi);


// va applicato uno sconto del 20% per i minorenni


const percentualeMinima = 20;
console.log(percentualeMinima);

const totaleMinimo = (prezzoInBaseAiKmPercorsi / 100) * percentualeMinima;
console.log(totaleMinimo);


// va applicato uno sconto del 40% per gli over 65.


const percentualeMassima = 40;
console.log(percentualeMassima);

const totaleMassimo = (prezzoInBaseAiKmPercorsi / 100) * percentualeMassima;
console.log(totaleMassimo);


// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio

if (currentAge < 18) {
    console.log(totaleMinimo);
} else if (currentAge > 65) {
    console.log(totaleMassimo);
} else {
    console.log(prezzoInBaseAiKmPercorsi);
}