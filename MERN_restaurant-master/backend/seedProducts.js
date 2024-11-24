
const productsData = require("./dummy.json")


const seedProducts = async (productModel) => {

    try {
        await productModel.insertMany(productsData);
        console.log('All products added!');

    } catch (error) {
        console.log(error.message);
    }
}

module.exports = seedProducts;