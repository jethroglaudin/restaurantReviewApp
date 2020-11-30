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
router.post("/", createRestaurant);
router.put("/:id", updateRestaurant);
router.delete("/:id", deleteRestaurant);
router.post("/:id/addReview", addReview);

module.exports = router;
