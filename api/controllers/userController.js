const { catchAsync } = require('../middlewares/error');
const userModel = require('../models/userModel');
//=======================================================================================================================//

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
    const result = await userModel.find({});
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
    const result = await userModel.findById(id);
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
    const result = await userModel.deleteOne({ _id: id });
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
    const data = req.body;
    const result = await userModel.findByIdAndUpdate(
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
