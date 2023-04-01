const {Router} = require("express");
const { createUser, updateUser } = require("../controllers/user.controllers")

const router = Router();

router.post("/api/v1/users", createUser);
router.put("/api/v1/users/:id", updateUser);



module.exports = router;