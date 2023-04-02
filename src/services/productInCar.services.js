const Cars = require("../models/car.models");
const Products = require("../models/product.models");
const ProductInCars = require("../models/productInCar.models");



class ProductsInCarServices {
    static async create(newProduct){
        try {
            const NewProductInCar = await ProductInCars.create(newProduct)
            return NewProductInCar
        } catch (error) {
            throw error
        }
    }

    static async getAll(id){
        try {
            const product = await Cars.findByPk(id, {
                include:{
                    model: ProductInCars,
                    attributes: {exclude: ['userId', "createAt", "updateAt",]},
                include: {
                    model: Cars,
                    attributes: ["totalPrice"]
                }
                }
            })
            return product
            
        } catch (error) {
            throw error
        }
    }
}

module.exports = ProductsInCarServices;