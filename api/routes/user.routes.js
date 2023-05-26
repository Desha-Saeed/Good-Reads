const express = require('express');
const Router = express.Router();
const userRouter = require('../controllers/userController');
const { restrictTo, protect } = require('../middlewares/auth');
const { userUpdateValidationRules } = require('../validations/user.validation');

// show users
Router.get('/user', restrictTo('admin'), userRouter.showUsers);

// search users
Router.get('/user/:id', userRouter.searchUser);

// delete post
Router.delete('/user/:id', restrictTo('admin'), userRouter.deleteUser);

// edit post
Router.put(
  '/user/:id',
  restrictTo('admin'),
  protect,

  userRouter.editUser
);

module.exports = Router;
