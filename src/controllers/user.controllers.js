const AuthServices = require("../services/auth.services");
const UserServices = require("../services/user.services");
const transporter = require("../utils/mailer"); 

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
          <p> Es necesario que verifiques tu correo </p>
          <a href="http://localhost:8005/verify?token=${token}" target="_blank"> validar correo </a>
        `,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  module.exports = {
    createUser
  }