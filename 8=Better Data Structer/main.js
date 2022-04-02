const product = [
    {
        productName:'Book',
        productPrice: 30,
        productQuantity: 3,
        productIsAvailable: true
    },
    {
        productName:'Laptop',
        productPrice: 50,
        productQuantity: 5,
        productIsAvailable: false
    }
]

function showProductInfo(product){


    const [product1] = product;
    console.log(product1);

    return `
        productName-${product1.productName} productPrice-${product1.productPrice} productQuantity-${product1.productQuantity} productIsAvailable-${product1.productIsAvailable};
    `
}

const productOut = showProductInfo(product);

console.log(productOut);

