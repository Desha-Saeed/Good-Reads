const express = require('express');
const {
  getAllUsers,
  deleteAllUsers,
} = require('../controllers/userController');
const { protect, restrictTo } = require('../middlewares/auth');
const router = express.Router();

router
  .route('/')
  .get(getAllUsers)
  .delete(protect, restrictTo('admin'), deleteAllUsers);

module.exports = router;
