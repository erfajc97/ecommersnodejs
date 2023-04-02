const  Orders = require("../models/order.models");


class OrderServices {
    static async create(newOrden){
        try {
            const orden = await Orders.create(newOrden)
            return orden
        } catch (error) {
            throw error
        }
    }
   
}

module.exports = OrderServices;