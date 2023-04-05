const {Router} = require("express");
const { createProductInCar, getAllProducts} = require("../controllers/productInCar.controllers");
const { createProductinCarValidator } = require("../validators/productincars.validators")

const router = Router();

router.post("/api/v1/productInCart", createProductinCarValidator,  createProductInCar);
router.get("/api/v1/productInCart/:id", getAllProducts);


module.exports = router; 