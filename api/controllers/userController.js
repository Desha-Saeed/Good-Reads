const { catchAsync } = require('../middlewares/error');
const userModel = require('../models/userModel');
const { validationResult } = require('express-validator');
//=======================================================================================================================//

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await userModel.find({});

  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users,
    },
  });
});

exports.deleteAllUsers = catchAsync(async (req, res, next) => {
  await userModel.deleteMany({});

  res.status(200).json({
    status: 'success',

    data: 'All users has been deleted',
  });
});

// show users
let showUsers = async (req, res, next) => {
  try {
    result = await userModel.find({});
    res.status(200).json({
      status: 'success',
      length: result.length,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

//search users
let searchUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    result = await userModel.findById(id);
    res.status(200).json({
      status: 'success',
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

// delete user
let deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    result = await userModel.deleteOne({ _id: id });
    res.status(200).json({
      status: 'success',
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

//edit post

let editUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    // if there is error then return Error
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    const data = req.body;
    result = await userModel.findByIdAndUpdate(
      { _id: data.id },
      {
        f_name: data.f_name,
        l_name: data.l_name,
        email: data.email,
        password: data.password,
      }
    );
    res.status(200).json({
      status: 'success',
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { showUsers, searchUser, deleteUser, editUser };
