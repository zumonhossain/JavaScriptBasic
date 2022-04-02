


// if
// else if
// else


const productPrice = 100;

let freeShipping = false;
let handPicked = false;

switch(productPrice){
    case 100:
        freeShipping = true;
        handPicked = false;
        break;
    case 99:
        freeShipping = true;
        handPicked = false;
    default:
        freeShipping = true;
        handPicked = false;
}

console.log(freeShipping);
console.log(handPicked);