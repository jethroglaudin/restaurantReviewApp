require("dotenv").config();
const express = require("express");
const { User, validateUser } = require("../Models/User");
// @route GET api/users/test
// @desc: Test Get route
// @access Public
exports.test = async (req, res) => res.send("Hello World!");

// @route GET api/users/
// @desc: Get logged in user
// @access Private
exports.currentUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

// @route POST api/users/register
// @desc Register User
// @access Public
exports.register = async (req, res) => {
  try {
    const { error } = validateUser(req.body);
    if (error) {
      res.status(400).json({
        errors: {
          msg: error.message,
        },
      });
    }
    // if (error) return res.status(400).send(error.details[0].message);
    const { name, userName, email, password, password2 } = req.body;

    let checkEmail = await User.findOne({ email });
    let checkUserName = await User.findOne({ userName });
    let checkPassword = await User.findOne({ password });
    if (checkEmail) return res.status(400).send("Email already exists.");
    if (checkUserName) return res.status(400).send("Username already exists.");
    if (checkPassword) return res.status(400).send("Password already exists.");
    if (password !== password2)
      return res.status(400).send("Password does not match");

    const user = new User({ name, userName, email, password });
    const newUser = await user.save();
    res.json(newUser);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ errors: error });
  }
};

// @route GET api/users/login
// @desc Login User
// @access Public
exports.login = async (req, res) => {
  try {
    const { error } = req.body;
    if (error) {
      res.status(400).json({
        errors: {
          msg: error.message,
        },
      });
      throw new Error(err);
    }

    const { email, userName, password } = req.body;
    const user = await User.findOne({ $or: [{ email }, { userName }] }).select(
      "+password"
    );
    if (!user)
      return res
        .status(401)
        .send(
          "Invalid email/username or password",
          res.json(errors).details[0].message
        );

    const isValidPassword = await user.matchPassword(password);
    if (!isValidPassword)
      return res
        .status(401)
        .send("Invalid email or password", res.json(errors.details[0].message));
    // console.log(isValidPassword);
    // console.log(user);

    const token = user.generateToken();

    res.header("x-auth-token", token)
    res.json({ token });
    // redirect to main page
  } catch (error) {
    res.status(500).json({ errors: error });
  }
};
