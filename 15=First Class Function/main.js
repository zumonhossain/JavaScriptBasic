

//javascript first class function
//function as variable reference
//function as return value
//function as input argument





// function fun(){
//     console.log('zumon hossain');
// }
// fun();



// const fun = function(){
//     console.log('zumon hossain');
// }
// fun();


// function outerFun(){
//     return function innerFun(){
//         console.log('zumon hossain');
//     }
// }
// outerFun()();



function outerFun(innerFun){
    console.log(innerFun());
}

outerFun(function(){
    console.log('Inner function to be called')
});




