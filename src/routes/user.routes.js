const {Router} = require("express");
const { createUser } = require("../controllers/user.controllers")

const router = Router();

router.post("/api/v1/users", createUser); 


module.exports = router;