const {Router} = require("express");
const { createProduct, updateProduct} = require("../controllers/product.controllers")
const { createProductValidator,updateProductValidator } = require("../validators/products.validators")

const router = Router();

router.post("/api/v1/products", createProductValidator, createProduct);
router.put("/api/v1/products/:id", updateProductValidator, updateProduct);



module.exports = router;