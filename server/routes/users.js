const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const {
  register,
  login,
  test,
  currentUser,
} = require("../controllers/userController");

router.get("/test", auth, test);
router.get("/", auth, currentUser);
router.post("/register", register);
router.post("/login", login);

module.exports = router;
