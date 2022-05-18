console.log(hoisted());//////////ok

function hoisted(){
    return "hoisted";
}


console.log(hoistedExpFunc());////// errorr

const hoistedExpFunc = function() {
    return "hoistedExpFunc";
}

console.log(hoistedExpFunc());////////ok