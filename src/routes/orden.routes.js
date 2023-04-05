const {Router} = require("express");
const { createOrden} = require("../controllers/orden.controllers");
const authenticate = require("../middlewares/auth.middleware")


const router = Router();

router.post("/api/v1/orden", authenticate,  createOrden);



module.exports = router; 