const {Router} = require("express");
const { createUser, updateUser, getAllUsersOrder} = require("../controllers/user.controllers")

const router = Router();

router.post("/api/v1/users", createUser);
router.put("/api/v1/users/:id", updateUser);
router.get("/api/v1/users/:id", getAllUsersOrder);





module.exports = router;