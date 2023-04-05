const { json } = require("sequelize");
const ProductsInCarServices = require("../services/productInCar.services");
const ProductInOrders = require("../models/productInOrder.models");
const jwt = require("jsonwebtoken");
const OrderServices = require("../services/orden.services");
const  transporter  = require("../utils/mailer");


const createOrden = async (req, res, next) =>{
   
    try {
      const {id, email, username} = req.user
      const car =  await ProductsInCarServices.getAll(id)
        
      const newOrder = await OrderServices.create({
        totalPrice: car.totalPrice, 
        userId: id,
        status: false
      })
    const products = JSON.stringify(car.dataValues.productIncars)
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

        await transporter.sendMail({
            from: process.env.MAILER_CONFIG_USER,
            to: email,
            subject: "Confirmacion de Orden en MarketPlace.com",
            html: `
                <p>Hola ${username} eCommerce.com  ha regitsrdao un compra y esta ha sido aprobada, felicidades, !disfrute su Producto!.</p>
                <a href="paypal.com">La orden de compra se efectuo por el siguiente valor:$${car.totalPrice}</a>
                `
        });
       
    }
res.json({message:"orden creada satisfactoriamente"
    
})
    } catch (error) {
        next(error)
    }
}


module.exports = {
    createOrden,
    
}
