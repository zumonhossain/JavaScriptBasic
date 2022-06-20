


var myFnd = new Array('Zumon', 'shanto', 'rakib', 'habib', 'shakil', 'sajeeb'); // eta akto kotin tai eta khub kom use kora hoy

console.log(myFnd); //all name show
console.log(myFnd[3]); // 0 index theke array count kore

// --------------------------

var arrayName = ['Rhohim', 'korim', 'jabbar', 'rafiq']; // ei array ta besi use kora hoy

console.log(arrayName); //all name show
console.log(arrayName[3]); // 0 index theke array count kore

// -------------------------------



arrayName[3] = 'potik'; // niddisto kono name abar change korte chaile index er sahajje korte hobe

console.log(arrayName); //all name show
console.log(arrayName[3]); // 0 index theke array count kore


// -----------------------------



// array te kono name sese add korte chaile
arrayName.push('ft shanto');

console.log(arrayName); //all name show
console.log(arrayName[3]); // 0 index theke array count kore


// ----------------------------------



// array te seser dike name remove korte chaile
arrayName.pop();

console.log(arrayName); //all name show
console.log(arrayName[3]); // 0 index theke array count kore


// -------------------------


// array te suror dike name remove korte chaile
arrayName.shift();

console.log(arrayName); //all name show
console.log(arrayName[3]); // 0 index theke array count kore


// ----------------------------------



// array te suror dike name korte chaile
arrayName.unshift('khaled');

console.log(arrayName); //all name show
console.log(arrayName[3]); // 0 index theke array count kore



// -------------------------------



// niddisto kono item er index number jante chaile
arrayName.indexOf('korim');

console.log(arrayName); //all name show
console.log(arrayName[3]); // 0 index theke array count kore



// -------------------------------



// index nuber die kono item remove korte chaile
arrayName.splice(3);

console.log(arrayName); //all name show
console.log(arrayName[3]); // 0 index theke array count kore



// -------------------------------------


// array er maddome loop chalano
for( var i = 0; i < arrayName.length; i++ ){
    console.log(arrayName[i]);
}


// ------------------------