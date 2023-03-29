const Users = require("../models/users.models");

class UserServices {

    static async create(newUser) {
        try {
          const userCreated = await Users.create(newUser);
          return userCreated;
        } catch (error) {
          throw error;
        }
      }
    
}
module.exports = UserServices;