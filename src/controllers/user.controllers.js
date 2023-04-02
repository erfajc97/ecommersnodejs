const AuthServices = require("../services/auth.services");
const UserServices = require("../services/user.services");
const transporter = require("../utils/mailer"); 
const Cars = require("../models/car.models")


const createUser = async (req, res, next) => {
    try {
      const newUser = req.body;
  
      const result = await UserServices.create(newUser);
      res.status(201).json(result);
     
      const { id, email, username } = result;
      const token = await AuthServices.genToken({
        id,
        email,
        username,
      });
    
      
      await transporter.sendMail({
        from: "jotik1989@gmail.com",
        to: result.email,
        subject: "Verifica tu correo electronico",
        html: `
          <p>Hola ${result.username} Bienvenido a tu eCommerce favorito</p>
          <p> Es necesario que verifiques tu correo para poder acceder y realizar tus compras </p>
          <a href="http://localhost:8000/verify?token=${token}" target="_blank"> validar correo </a>
        `,
      });
      if (!result) {
        next(error)
      }
      const Car = await Cars.create({userId: result.id,totalPrice: 0.0})
      return Car;
     
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
  const updateUser = async (req, res) => {
    try {
      // necesitamos el id del usuario
      const { id } = req.params;
      // la información a actualizar
      const { username, avatar } = req.body;
      // tengo que ir al modelo para consultar la informacion
      await UserServices.update(id, { username, avatar });
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  };

  const getAllUsersOrder = async (req, res, next) =>{
    try {
        const {id}= req.params;
        const orderUser = await UserServices.getAllUserOrder(id)
        res.json(orderUser)
    } catch (error) {
        next(error)
    }
}

  

  module.exports = {
    createUser, updateUser,
    getAllUsersOrder
  }