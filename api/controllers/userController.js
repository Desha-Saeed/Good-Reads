const { catchAsync } = require('../middlewares/error');
const User = require('../models/userModel');

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find({});

  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users,
    },
  });
});

exports.deleteAllUsers = catchAsync(async (req, res, next) => {
  await User.deleteMany({});

  res.status(200).json({
    status: 'success',

    data: 'All users has been deleted',
  });
});
