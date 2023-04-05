const { check, param } = require("express-validator");
const validateResult = require("../utils/validate");

const createUserValidator = [
  check("username", "Error con el campo username")
    .exists()
    .withMessage("El username debe existir")
    .notEmpty()
    .withMessage("El username no debe estar vacio")
    .isString()
    .withMessage("El username debe ser un string")
    .isLength({ min: 6, max: 30 })
    .withMessage("El username debe tener entre 6 y 30 caracteres"),
  check("email", "Error con el correo electronico")
    .exists()
    .withMessage("No se encontro la propiedad email")
    .notEmpty()
    .withMessage("No se encontro un valor para el email")
    .isString()
    .isLength({ min: 7, max: 50 })
    .withMessage("EL correo debe tener una longitud entre 7 y 50 caracteres")
    .isEmail()
    .withMessage("El correo no tiene un formato correcto"),
  check("password", "Error con la contraseña")
    .exists()
    .withMessage("el password debe existir")
    .notEmpty()
    .withMessage("El password no puede estar vacio")
    .isString()
    .withMessage("los datos del password deben ser enviados como string")
    .isLength({ min: 8 })
    .withMessage("el password debe contener como minimo 8 caracteres"),
  check("avatar", "error con el campo avatar")
    .exists()
    .withMessage("el avatar debe existir")
    .notEmpty()
    .withMessage("El avatar no puede estar vacio")
    .isString()
    .withMessage("los datos del avatar deben ser enviados como string"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const updateUserValidator = [
  param("id").isInt().withMessage("El id debe ser un numero entero"),
  check("username")
    .isString()
    .withMessage("los datos del Username deben ser de tipo texto")
    .exists()
    .withMessage("El campo debe existir, no se puede actualizar sin este campo")
    .notEmpty()
    .withMessage("El campo no se puede enviar vacio"),
  check("avatar", "error con el campo avatar")
    .exists()
    .withMessage("el avatar debe existir")
    .notEmpty()
    .withMessage("El avatar no puede estar vacio")
    .isString()
    .withMessage("los datos del avatar deben ser enviados como string"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = {
  createUserValidator,
  updateUserValidator,
};
