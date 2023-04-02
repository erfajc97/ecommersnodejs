const {Router} = require("express");
const { createOrden} = require("../controllers/orden.controllers")

const router = Router();

router.post("/api/v1/orden", createOrden);



module.exports = router; 