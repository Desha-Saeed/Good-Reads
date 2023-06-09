const express = require('express');
const Router = express.Router();
const catgoryController = require('../controllers/categoryController');
const {
  categoryCreateValidationRules,
  categoryUpdateValidationRules,
} = require('../validations/category.validation');

const { restrictTo, protect } = require('../middlewares/auth');
const { validate } = require('../middlewares/validations');
//==============================================================================================================

// add category

Router.post(
  '/category',
  validate(categoryCreateValidationRules),



  catgoryController.addCategory
);

// show categorys
Router.get('/category', catgoryController.showCategory);

// search categorys
Router.get('/category/:id', catgoryController.searchCategory);

// delete category
Router.delete(
  '/category/:id',

  catgoryController.deleteCategory
);

// edit category
Router.put(
  '/category/:id',
  validate(categoryUpdateValidationRules),
 

  catgoryController.editCategory
);

module.exports = Router;
