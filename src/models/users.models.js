const { DataTypes } = require("sequelize");
const db = require("../utils/database");
const bcrypt = require("bcrypt");

const Users = db.define(
 "users",
 {
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false

    },
    username: {
        type: DataTypes.STRING(200),
        allowNull:false,
    },
    email:{
        type: DataTypes.STRING(200),
        unique:true,
        validate:{
            isEmail:true
        },
        allowNull:false
    },
    emailVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    password: {
        type: DataTypes.STRING,
        allowNull:false
    },
    avatar:{
        type: DataTypes.STRING,
        allowNull:false
    },
    rol: {
      type: DataTypes.ENUM,
      values:["Client", "Seller", "Admin"],
      defaultValue: "Client"

    }

 },
 {
    hooks: {
      beforeCreate: async (user) => {
        // user.password
        try {
          const salt = await bcrypt.genSalt(10);
          const passwordHash = await bcrypt.hash(user.password, salt);
          user.password = passwordHash;
        } catch (error) {
          throw error;
        }
      },
    },
  }


);
module.exports = Users;