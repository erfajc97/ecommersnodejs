const Cars = require("../models/car.models");
const Orders = require("../models/order.models");
const Products = require("../models/product.models");
const ProductInCars = require("../models/productInCar.models");
const ProductInOrders = require("../models/productInOrder.models");
const Users = require("../models/users.models");

const initModels = () =>{


//! Users - Orders
    Users.hasMany(Orders, {foreignKey:'userId'});
    Orders.belongsTo(Users, {foreignKey: 'userId'});


// //! Users-Cars
    Users.hasOne(Cars, {foreignKey: 'userId'});
    Cars.belongsTo(Users, {foreignKey: 'userId'});

//! Users-Products
    Users.hasMany(Products, {foreignKey: 'userId'});
    Products.belongsTo(Users, {foreignKey: 'userId'});

//! Orders-ProductInOrderd
    Orders.hasMany(ProductInOrders, {foreignKey: 'orderId'});
    ProductInOrders.belongsTo(Orders, {foreignKey: 'orderId'});

//! ProductInOrderd -Products
    Products.hasMany(ProductInOrders, {foreignKey: 'productId'});
    ProductInOrders.belongsTo(Products, {foreignKey: 'productId'});

//! Products -ProductsinCar
    Products.hasMany(ProductInCars, {foreignKey: 'productId'});
    ProductInCars.belongsTo(Products, {foreignKey: 'productId'});


//! Products -ProductsinCar
Cars.hasMany(ProductInCars, {foreignKey: 'carId'});
ProductInCars.belongsTo(Cars, {foreignKey: 'carId'});


}
module.exports = initModels;
