
const express = require("express");
const helmet = require("helmet");
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

const users = require("./routes/users");


// const dotenv = require("dotenv").config( { path: "./config/config.env"});
const PORT = process.env.PORT || 4001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

app.use("/api/v1/users/", users);

if(app.get('env' === 'development')){
  app.use(morgan('dev'));
  console.log(`Morgan is enabled`);
}

mongoose.connect("mongodb+srv://jethroglaudin:4534123cC!@yelp.leqzd.mongodb.net/yelp?retryWrites=true&w=majority", {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
.then(console.log("Connected to MongoDB database"))
.catch((err) => console.log(err));


// Get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      restaurants: ["mcdonalds", "wendys"],
    },
  });
});

app.get("/api/v1/restaurants/:restaurantid", async (req, res) => {
    console.log(req.params);
})


const server = app.listen(PORT, () =>
  console.log(`Server is currently running on port ${PORT}!`)
);

process.on("unhandledRejection", (error, promise) => {
  console.log(`Error: ${error.message}`);
  server.close(() => process.exit(1));
})
