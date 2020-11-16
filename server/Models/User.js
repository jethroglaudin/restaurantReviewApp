require("dotenv").config();
const mongoose = require("mongoose");
const Joi = require("joi");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
// const config = require('config');
// dotenv.config({ path: "./config/config.env" })

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 200,
  },
  userName: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 15,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 100,
    unique: true,
  },
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.generateToken = function () {
  return jwt.sign({ id: this._id }, process.env.jwtPrivateKey, {
    expiresIn: Date.now() + 36000,
  });
};

const validateUser = (user) => {
  const schema = Joi.object({
    name: Joi.string().min(1).max(200).required(),
    userName: Joi.string().min(2).max(15).required(),
    email: Joi.string().required().email(),
    password: Joi.string().min(8).max(100).required(),
    password2: Joi.string().min(8).max(100).required(),
  });
  return schema.validate(user);
};

UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("users", UserSchema, "users");

exports.User = User;
exports.validateUser = validateUser;
