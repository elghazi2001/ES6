/* 
1. Creare un modulo ES6 che si chiama calcolatrice
2. Esportare due funzioni una per la moltiplicazione e una per l'addizione
3. Le due funzioni esportate devono essere create con le arrow function
4. Creare un file calcola.js e effettuare le seguenti operazioni e stamparle nella console:
    - Sommare 132 e 943
    - Moltiplicare 250 e 243
*/

import { add,mult } from "./lib/calcolatrice.js";
console.log (add(132,943));

console.log (mult(250,243));

const sayhello = () => {
    console.log("tempo di atesa è 2 sec")
}
setTimeout(sayhello,4000);