const express = require('express');
const Router = express.Router();
const bookController = require('../controllers/bookController');

const {
  bookCreateValidationRules,
  bookUpdateValidationRules,
} = require('../validations/book.validation');

const { restrictTo, protect } = require('../middlewares/auth');
const { validate } = require('../middlewares/validations');

// add book
Router.post(
  '/book',
  validate(bookCreateValidationRules),
  restrictTo('admin'),
  protect,
  bookController.addBook
);

// show book
Router.get('/book', bookController.showBook);

// search book
Router.get('/book/:id', bookController.searchBook);

// delete book
Router.delete(
  '/book/:id',
  restrictTo('admin'),
  protect,
  bookController.deleteBook
);

// edit book
Router.put(
  '/book/:id',
  validate(bookUpdateValidationRules),
  restrictTo('admin'),
  protect,
  bookController.editBook
);

module.exports = Router;
