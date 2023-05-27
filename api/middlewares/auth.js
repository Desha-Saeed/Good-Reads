const { catchAsync, AppError } = require('./error');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.protect = catchAsync(async (req, res, next) => {
  // 1- get token and check if its there
  let token;

  if (req.headers.authorization) {
    // console.log(req.headers.authorization);
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(new AppError('You are not logged in! please log in'), 401);
  }

  // 2- verify token

  const decoded = jwt.verify(token, process.env.TOKEN_KEY);

  if (!decoded) return next(new AppError('Invalid signature token', 401));

  // 3-  check if user already exists
  const currentUser = await User.findById(decoded.id);

  if (!currentUser) {
    return next(new AppError('no user exists for this token', 401));
  }

  req.user = currentUser;

  next();
});

//authorization middleware
exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    console.log(req.user.role);
    console.log(roles);
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError("You don't have permission to perform this action"),
        403
      );
    }

    next();
  };
};
