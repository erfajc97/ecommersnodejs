const {Router} = require("express");
const { createProductInCar, getAllProducts} = require("../controllers/productInCar.controllers")

const router = Router();

router.post("/api/v1/productInCart", createProductInCar);
router.get("/api/v1/productInCart/:id", getAllProducts);


module.exports = router; 