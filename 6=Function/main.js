



const productInfoObj1 = {
    productName:'Book',
    productPrice: 30,
    productQuantity: 3,
    productIsAvailable: true
}

const productInfoObj2 = {
    productName:'Laptop',
    productPrice: 50,
    productQuantity: 5,
    productIsAvailable: false
}


function showProductInfo(productObj){

    return`
        Product Name=${productObj.productName} Product Price=${productObj.productPrice} Product Quantity=${productObj.productQuantity} Product is Available=${productObj.productIsAvailable}
    `;
}

const product1 = showProductInfo(productInfoObj1);
const product2 = showProductInfo(productInfoObj2);

console.log(product1)
console.log(product2)

