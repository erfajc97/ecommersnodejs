const Cars = require("../models/car.models");
const  ProductsInCarServices  = require("../services/productInCar.services");

const createProductInCar = async (req, res, next) =>{
    try {
      const newProduct = req.body;
      const { price, carId } = newProduct;
      const updatePrice = await Cars.increment({
        totalPrice: price,
        
      }, {
        where: {
            id: carId
        }
      })
      const product = await ProductsInCarServices.create(newProduct)
      res.status(201).json(product)
    } catch (error) {
        next(error)
    }
}

const  getAllProducts = async (req, res, next) =>{
    try {
        const {id} = req.params;
        const productsIncar = await ProductsInCarServices.getAll(id);
        res.json(productsIncar);
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createProductInCar,
    getAllProducts
}