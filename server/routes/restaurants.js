const express = require("express");
const router = express.Router();
const {
  test,
  allRestaurants,
  getRestaurant,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
  addReview,
} = require("../controllers/restaurantController");

const auth = require("../middleware/auth");

router.get("/test", test);
router.get("/", allRestaurants);
router.get("/:id", getRestaurant);
router.post("/", auth, createRestaurant);
router.put("/:id", auth, updateRestaurant);
router.delete("/:id", auth, deleteRestaurant);
router.post("/:id/addReview", auth, addReview);

module.exports = router;
