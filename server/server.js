require("dotenv").config();
const express = require("express");
const helmet = require('helmet');
const app = express();
const PORT = process.env.PORT || 4001;

app.use(helmet());
app.use(express.json());


app.get("/getRestaurants", async (req, res) => {
    console.log('get all restaurants');
  res.json("get all restaurants");
});

app.listen(PORT, () =>
  console.log(`Server is currently running on port ${PORT}!`)
);
