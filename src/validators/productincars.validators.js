const { check, param } = require("express-validator");
const validateResult = require("../utils/validate");

const createProductinCarValidator = [

check("carId", "Error con el campo carId")
    .exists()
    .withMessage("El campo carId  debe existir")
    .notEmpty()
    .withMessage("El  campo carId no puede estar vacio")
    .isInt()
    .withMessage("El valor debe ser un dato entero"),
check("productId", "Error con el campo productId")
    .exists()
    .withMessage("El campo productId  debe existir")
    .notEmpty()
    .withMessage("El  campo productId no puede estar vacio")
    .isInt()
    .withMessage("El valor debe ser un dato entero"),
check("quantity", "Error con el campo quantity")
    .exists()
    .withMessage("El campo  quantity debe existir, es un dato obligatorio")
    .notEmpty()
    .withMessage("El cxampo quantity no puede estar vacio")
    .isInt()
    .withMessage("El valor debe ser un dato de tipo entero"),
check("price", "Error con el campo precio")
    .exists()
    .withMessage("El campo price debe existir, es un campo obligatorio")
    .notEmpty()
    .withMessage("El campo no puede enviarse vacio")
    .isFloat()
    .withMessage("El campo debe contener datos numeriscos de tipo float"),  
check("status", "Error con el campo status")
    .exists()
    .withMessage("El campo status  debe existir")
    .notEmpty()
    .withMessage("El  campo status no puede estar vacio")
    .isBoolean()
    .withMessage("El valor debe ser un dato boleano, true o false"),

  (req, res, next) => {
    validateResult(req, res, next);
  },
];



module.exports = {
    createProductinCarValidator,
    
};
