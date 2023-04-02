const {Router} = require("express");
const { createProduct, updateProduct} = require("../controllers/product.controllers")

const router = Router();

router.post("/api/v1/products", createProduct);
router.put("/api/v1/products/:id", updateProduct);



module.exports = router;