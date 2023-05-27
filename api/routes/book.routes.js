const express = require('express');
const Router = express.Router();
const bookController = require('../controllers/bookController');

const {
  bookCreateValidationRules,
  bookUpdateValidationRules,
} = require('../validations/book.validation');

const { restrictTo, protect } = require('../middlewares/auth');
const { validate } = require('../middlewares/validations');
const multer = require('multer');
const { multerFilter, multerStorageBook } = require('../middlewares/multer');
//==============================================================================================================

//multer configuration

const upload = multer({
  storage: multerStorageBook,
  fileFilter: multerFilter,
});

// add book
Router.post(
  '/book',
  upload.single('photo'),
  validate(bookCreateValidationRules),
  protect,
  restrictTo('admin'),

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
  protect,
  restrictTo('admin'),

  bookController.editBook
);

module.exports = Router;
