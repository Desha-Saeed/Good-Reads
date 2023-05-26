const express = require('express');
const Router = express.Router();
const catgoryController = require('../controllers/categoryController');
const { restrictTo } = require('../middlewares/auth');

// add category

Router.post('/category', restrictTo('admin'), catgoryController.addCategory);

// show categorys
Router.get('/category', catgoryController.showCategory);

// search categorys
Router.get('/category/:id', catgoryController.searchCategory);

// delete category
Router.delete(
  '/category/:id',
  restrictTo('admin'),
  catgoryController.deleteCategory
);

// edit category
Router.put('/category', restrictTo('admin'), catgoryController.editCategory);

module.exports = Router;
