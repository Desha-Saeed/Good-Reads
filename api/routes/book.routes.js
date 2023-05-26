const express = require('express');
const Router = express.Router();
const bookController = require('../controllers/bookController');

const { restrictTo } = require('../middlewares/auth');

// add book
Router.post('/book', restrictTo('admin'), bookController.addBook);

// show book
Router.get('/book', bookController.showBook);

// search book
Router.get('/book/:id', bookController.searchBook);

// delete book
Router.delete('/book/:id', restrictTo('admin'), bookController.deleteBook);

// edit book
Router.put('/book/:id', restrictTo('admin'), bookController.editBook);

module.exports = Router;
