const {Router} = require("express");
const { createUser, updateUser, getAllUsersOrder} = require("../controllers/user.controllers");
const { createUserValidator, updateUserValidator} = require("../validators/users.validators")

const router = Router();

router.post("/api/v1/users", createUserValidator,  createUser);
router.put("/api/v1/users/Update/:id",updateUserValidator, updateUser);
router.get("/api/v1/users/:id", getAllUsersOrder);





module.exports = router;