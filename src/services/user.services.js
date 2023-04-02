const Orders = require("../models/order.models");
const Users = require("../models/users.models");

class UserServices {

  static async getUser(email) {
    try {
      // SELECT * FROM users where email = email
      const user = await Users.findOne({
        where: { email },
      });
      return user;
    } catch (error) {
      throw error;
    }
  }

  static async create(newUser) {
    try {
      const userCreated = await Users.create(newUser);
      return userCreated;
    } catch (error) {
      throw error;
    }
  }

  static async update(id, updateUserData) {
    try {
      const updatedUser = await Users.update(updateUserData, {
        where: { id },
      });
      return updatedUser;
    } catch (error) {
      throw error;
    }
  }

  static async getAllUserOrder(id){
    try {
        const order = await Users.findByPk(id, {attributes:["id", "username", "email"],
            include:{
                model:Orders,
                attributes: ["id", "totalPrice", "status"]
            }
        }) 
        return order
    } catch (error) {
        throw error
    }
}

  

}
module.exports = UserServices;