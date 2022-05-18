import {add} from "./lib/addmodule.js";///// we can call the fuction by another name using th as command
import * as modulosottrazione from "./lib/submodule.js" ////// import all ....
import addizione , {sottrazione,log} from "./lib/nuovomodulo.js"


console.log(add(1,2));  //// we are using add function wich we have imported from lib

console.log(modulosottrazione.sub(10,10));
///////////// default//////////
console.log (addizione(1,2));
console.log(sottrazione(10,2));
log("test");



