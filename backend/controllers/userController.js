const User = require('../models/userModel');

//login user
const loginUser = async (req, res) => {
  res.json({ mssg: 'Login User' });
};

//sign up user

const signupUser = async (req, res) => {
  res.json({ mssg: 'signup User' });
};

module.exports = { signupUser, loginUser };
