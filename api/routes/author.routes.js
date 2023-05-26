const express = require('express');
const Router = express.Router();
const authorConroller = require('../controllers/authorController');
const { restrictTo } = require('../middlewares/auth');

const multer = require('multer');
const upload = multer({ dest: './public/img/authors' });

// add author
Router.post(
  '/author',
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
Router.put('/author', restrictTo('admin'), authorConroller.editAuthor);

module.exports = Router;
