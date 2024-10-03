// Coffee: price_1Q5xXAJpeb3ugLMmcuLTbm8y
// Sunglasses: price_1Q5xZ8Jpeb3ugLMmMZMo2p5M
// Camera: price_1Q5xaBJpeb3ugLMm2lr8lMh5


const productsArray = [
    {
        id: "price_1Q5xXAJpeb3ugLMmcuLTbm8y",
        title: "Coffee",
        price: 4.99
    },
    {
        id: "price_1Q5xZ8Jpeb3ugLMmMZMo2p5M",
        title: "Sunglasses",
        price: 9.99
    },
    {
        id: "price_1Q5xaBJpeb3ugLMm2lr8lMh5",
        title: "Camera",
        price: 39.99
    }
];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };