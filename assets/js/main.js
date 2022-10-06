// Istruzioni

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca, oltre alla ricerca da fare per ricordarsi come calcolare uno sconto (Googlate qulcosa del tipo: come si calcola lo sconto? e cercate una risorsa che vi possa aiutare a capire cosa fare)







//  il numero di chilometri che vuole percorrere
 
 const chilometriDaPercorrere = prompt(`Qaunti chilometri vuoi percorere?`);
 console.log(chilometriDaPercorrere);

// e l'età del passeggero.

const currentAge = prompt(`Quanti anni hai?`);
console.log(currentAge);



// il prezzo del biglietto è definito in base ai km (0.21 € al km)

const tariffaInBaseAiKm = (`0.21`);
console.log(tariffaInBaseAiKm);

const prezzoInBaseAiKmPercorsi = `chilometriDaPercorrere` + `tariffaInBaseAiKm`;
console.log(prezzoInBaseAiKmPercorsi);


// va applicato uno sconto del 20% per i minorenni

const under18 = (`< 18`);
console.log(under18);

// va applicato uno sconto del 40% per gli over 65.

const over65 = (`> 65`);
console.log(over65);

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio
