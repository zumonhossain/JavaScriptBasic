


// const product = {
//     productName: 'wheat',
//     productPrice:50,
//     productQuantity:6,
//     productIsAvailable:false,
// }

function Product(productName, productPrice, productQuantity, productIsAvailable){
    this.productName = productName
    this.productPrice = productPrice
    this.productQuantity = productQuantity
    this.productIsAvailable = productIsAvailable
}

const product = new Product('wheat', 50, 6, false)

console.log(product)
