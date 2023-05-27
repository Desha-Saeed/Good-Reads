const { validationResult } = require('express-validator');
const { catchAsync, AppError } = require('../middlewares/error');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
//=======================================================================================================================//

//function sign and create token
const signToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_KEY, {
    expiresIn: '20d',
  });
};

exports.register = catchAsync(async (req, res, next) => {
  //create user
  const newUser = await User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email.toLowerCase(),
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    role: req.body.role,
  });

  //sign the token
  const token = signToken(newUser._id);

  res.status(201).json({
    token,
    data: {
      user: newUser,
    },
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  //1- check if email and password exists

  if (!email || !password) {
    return next(new AppError('please provide email and password', 400));
  }

  //2- check if user exists and password is correct
  const user = await User.findOne({ email }).select('+password');

  console.log(user);
  //3- if everything is okay send token to the client
  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('Incorrect email'), 401);
  }

  const token = signToken(user._id);

  res.status(201).json({
    status: 'success',
    token,
  });
});
