const {Router} = require("express");
const { createProduct } = require("../controllers/product.controllers")

const router = Router();

router.post("/api/v1/products", createProduct);


module.exports = router;