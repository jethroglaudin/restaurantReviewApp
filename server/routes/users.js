const express = require("express");
const router = express.Router();

const { register, login, test } = require("../controllers/userController");


router.get("/test", test);
router.post("/register", register);
router.post("/login", login);


module.exports = router;