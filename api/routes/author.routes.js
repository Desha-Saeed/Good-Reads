const express = require('express');
const Router = express.Router();
const authorConroller = require('../controllers/authorController');
const { restrictTo, protect } = require('../middlewares/auth');

const multer = require('multer');
const { validate } = require('../middlewares/validations');
const {
  authorCreateValidationRules,
  authorUpdateValidationRules,
} = require('../validations/author.validation');
const upload = multer({ dest: './public/img/authors' });

// add author
Router.post(
  '/author',
  validate(authorCreateValidationRules),
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
  restrictTo('admin'),
  protect,
  authorConroller.editAuthor
);

module.exports = Router;
