require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 4001;

app.use(express.json());


app.get("/getRestaurants", async (req, res, next) => {

  res.json("get all restaurants");
});

app.listen(PORT, () =>
  console.log(`Server is currently running on port ${PORT}!`)
);
