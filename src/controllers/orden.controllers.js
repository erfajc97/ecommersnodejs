const { json } = require("sequelize");
const  OrdenServices  = require("../services/orden.services");
const ProductsInCarServices = require("../services/productInCar.services");
const ProductInOrders = require("../models/productInOrder.models");
const jwt = require("jsonwebtoken");
const OrderServices = require("../services/orden.services");


const createOrden = async (req, res, next) =>{
    try {
      
      const token = 1; 
    //   const token = req.headers["access-token"]; // como decodificar el token
      console.log(token);
      const car =  await ProductsInCarServices.getAll(token)
      
      const {totalPrice} = car.dataValues
      const newOrder = await OrdenServices.create({
        totalPrice: totalPrice, 
        userId: token,
        status: false
      })
    const products = JSON.stringify(car.dataValues.productIncars)
    console.log(JSON.parse(products));
    for (const product of JSON.parse(products)) {
        const {
            productId,
            quantity,
            price
        } = product
        const orderId = newOrder.id
        const ordercreate = await ProductInOrders.create({
            orderId: orderId,
            productId: productId,
            quantity: quantity,
            price: price,
            status: true,

        })
       
    }
res.json({
    message:"orden creada satisfactoriamente"
    
})
    } catch (error) {
        next(error)
    }
}
const getAllOrdersUsers = async (req, res, next) =>{
    try {
        const {id}= req.params;
        const orderUser = await OrderServices.getAllOrder(id)
        res.json(orderUser)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createOrden,
    getAllOrdersUsers
}