const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const users = require("./routes/users");
const restaurants = require("./routes/restaurants");

// const dotenv = require("dotenv").config( { path: "./config/config.env"});
const PORT = process.env.PORT || 4001;

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/users/", users);
app.use("/api/v1/restaurants/", restaurants);

if (app.get("env" === "development")) {
  app.use(morgan("dev"));
  console.log(`Morgan is enabled`);
}

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(console.log("Connected to MongoDB database"))
  .catch((err) => console.log(err));

const server = app.listen(PORT, () =>
  console.log(`Server is currently running on port ${PORT}!`)
);

process.on("unhandledRejection", (error, promise) => {
  console.log(`Error: ${error.message}`);
  server.close(() => process.exit(1));
});
