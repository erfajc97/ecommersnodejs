const Products = require("../models/product.models");

class ProductServices {
    static async create(newProduct){
        try {
            const createdProduct = await Products.create(newProduct);
            return createdProduct;
        } catch (error) {
            throw error
        }
    }
    static async update( id, data){
        try {
            const productUpdate = await Products.update(data, {
                where: { id },
            });
            return productUpdate;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = ProductServices;