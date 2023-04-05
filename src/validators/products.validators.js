const { check, param } = require("express-validator");
const validateResult = require("../utils/validate");

const createProductValidator = [
check("name", "Error con el campo username")
    .exists()
    .withMessage("El name debe existir")
    .notEmpty()
    .withMessage("El name no debe estar vacio")
    .isString()
    .withMessage("El name debe ser un string")
    .isLength({ min: 6, max: 30 })
    .withMessage("El name debe tener entre 6 y 50 caracteres"),
check("description", "Error con el campo description")
    .exists()
    .withMessage("La description debe existir")
    .notEmpty()
    .withMessage("La description no debe estar vacio")
    .isString()
    .withMessage("La description debe ser un string"),
check("price", "Error con el campo precio")
    .exists()
    .withMessage("El campo price debe existir, es un campo obligatorio")
    .notEmpty()
    .withMessage("El campo no puede enviarse vacio")
    .isFloat()
    .withMessage("El campo debe contener datos numeriscos de tipo float"),  
check("avaliableQty", "Error con el campo avaliableQty")
    .exists()
    .withMessage("El campo  avaliableQty debe existir, es un dato obligatorio")
    .notEmpty()
    .withMessage("El cxampo avaliableQty no puede estar vacio")
    .isInt()
    .withMessage("El valor debe ser un dato de tipo entero"),
check("status", "Error con el campo status")
    .exists()
    .withMessage("El campo status  debe existir")
    .notEmpty()
    .withMessage("El  campo status no puede estar vacio")
    .isBoolean()
    .withMessage("El valor debe ser un dato boleano, true o false"),
check("userId", "Error con el campo userId")
    .exists()
    .withMessage("El campo userId  debe existir")
    .notEmpty()
    .withMessage("El  campo userId no puede estar vacio")
    .isInt()
    .withMessage("El valor debe ser un dato entero"),
check("productImage", "error con el campo avatar")
    .exists()
    .withMessage("El campo productImage debe existir")
    .notEmpty()
    .withMessage("El acmpo  productImage no puede estar vacio")
    .isString()
    .withMessage("los datos del productImage deben ser enviados como string"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const updateProductValidator = [
  param("id").isInt().withMessage("El id debe ser un numero entero"),
  check("description")
    .exists()
    .withMessage("Le campo description  debe estar completado para actualizar")
    .notEmpty()
    .withMessage("El campo  description no puede estar vacio")
    .isString()
    .withMessage("los datos de la description  deben ser enviados como string"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = {
    createProductValidator,
    updateProductValidator,
};
