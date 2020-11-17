require("dotenv").config();
const db = require("../db/index");

// get all restaurants
exports.allRestaurants = async (req, res) => {
  try {
    const restaurantRatingsData = await db.query(
      `select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1)
          as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id;`
    );

    res.status(200).json({
      status: "success",
      results: restaurantRatingsData.rows.length.length,
      data: {
        restaurants: restaurantRatingsData.rows,
      },
    });
  } catch (error) {
    res.status(500).json({ errors: error });
    console.error(error);
  }
};

// Get a restaurant
exports.getRestaurant = async (req, res) => {
  try {
    const restaurant = await db.query(
      "select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id where id = $1",
      [req.params.id]
    );

    const reviews = await db.query(
      "select * from reviews where restaurant_id = $1",
      [req.params.id]
    );

    console.log(reviews);
    res.status(200).json({
      status: "success",
      data: {
        restaurant: restaurant.rows[0],
        reviews: reviews.rows,
      },
    });
  } catch (error) {
    res.status(500).json({ errors: error });
    console.error(error);
  }
};

// Create a restaurant
exports.createRestaurant = async (req, res) => {
  try {
    const { name, location, price_range } = req.body;
    const results = await db.query(
      "INSERT INTO restaurants (name, location, price_range) values ($1, $2, $3) returning *",
      [name, location, price_range]
    );
    console.log(results);
    res.status(201).json({
      status: "success",
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (error) {
    res.status(500).json({ errors: error });
    console.error(error);
  }
};

// update restaurant
exports.updateRestaurant = async (req, res) => {
  try {
    const { name, location, price_range } = req.body;

    const results = await db.query(
      "UPDATE restaurants SET name = $1, location = $2, price_range = $3 where id = $4 returning *",
      [name, location, price_range, req.params.id]
    );

    res.status(200).json({
      status: "success",
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (error) {
    res.status(500).json({ errors: error });
    console.error(error);
  }
};

//delete restaurant

exports.deleteRestaurant = async (req, res) => {
  try {
    const results = await db("DELETE FROM restaurants where id = $1", [
      req.params.id,
    ]);
    res.status(204).json({
      status: "success",
    });
  } catch (error) {
    res.status(500).json({ errors: error });
    console.error(error);
  }
};

// add review
exports.addReview = async (req, res) => {
  try {
    const { name, review, rating } = req.body;
    const newReview = await db.query(
      "INSERT INTO reviews (restaurant_id, name, review, rating) values ($1, $2, $3, $4) returning *;",
      [req.params.id, name, review, rating]
    );
    console.log(newReview);
    res.status(201).json({
      status: "success",
      data: {
        review: newReview.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
};
