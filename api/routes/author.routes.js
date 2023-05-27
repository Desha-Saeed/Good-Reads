const express = require('express');
const Router = express.Router();
const authorConroller = require('../controllers/authorController');
const { restrictTo, protect } = require('../middlewares/auth');
const { validate } = require('../middlewares/validations');
const {
  authorCreateValidationRules,
  authorUpdateValidationRules,
} = require('../validations/author.validation');
const multer = require('multer');
const { multerFilter, multerStorageAuthor } = require('../middlewares/multer');

//multer configuration

const upload = multer({
  storage: multerStorageAuthor,
  fileFilter: multerFilter,
});

// add author
Router.post(
  '/author',
  upload.single('photo'),
  validate(authorCreateValidationRules),
  protect,
  restrictTo('admin'),
  upload.single('file.photo'),
  authorConroller.addAuthor
);

// show author
Router.get('/author', authorConroller.showAuthor);

// search author
Router.get('/author/:id', authorConroller.searchAuthor);

// delete author
Router.delete('/author/:id', restrictTo('admin'), authorConroller.deleteAuthor);

// edit author
Router.put(
  '/author',
  validate(authorUpdateValidationRules),
  protect,
  restrictTo('admin'),

  authorConroller.editAuthor
);

module.exports = Router;
