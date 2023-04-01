const { DataTypes }= require("sequelize");
const db = require("../utils/database");


const Products = db.define(
    "products",
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        name:{
            type: DataTypes.STRING(50),
            allowNull:false,

        },
        description:{
            type: DataTypes.TEXT,
            allowNull:false

        },
        price:{
            type:DataTypes.FLOAT,
            allowNull:false,
            defaultValue: "0,0"
        },
        avaliableQty:{
            type: DataTypes.INTEGER,
            allowNull:false,
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull:false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull:false,
            field:'user_id'
        },
        productImage:{
            type: DataTypes.STRING,
            allowNull:false
        }

    }
)
module.exports = Products;