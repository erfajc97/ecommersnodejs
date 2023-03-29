const { DataTypes }= require("sequelize");
const db = require("../utils/database");


const ProductInCars = db.define(
    "productIncar",
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        
        carId: {
            type: DataTypes.INTEGER,
            allowNull:false,
            field:'car_id'
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull:false,
            field:'product_id'
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull:false
        },
        price:{
            type:DataTypes.FLOAT,
            allowNull:false
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull:false,
        },

    }
)
module.exports = ProductInCars;