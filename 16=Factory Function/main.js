


// const product = {
//     productName: 'wheat',
//     productPrice:50,
//     productQuantity:6,
//     productIsAvailable:false,
// }

function showProductInfo(productName, productPrice, productQuantity, productIsAvailable){
    return{
        productName,
        productPrice,
        productQuantity,
        productIsAvailable
    }
}

console.log(showProductInfo('wheat', 50, 6, false))
