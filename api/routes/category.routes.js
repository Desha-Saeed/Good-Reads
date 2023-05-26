const express=require('express');
const Router=express.Router();
const catgoryController =require('../controllers/categoryController');
const { param,check, validationResult } = require('express-validator');


// valditor  ....
const addValidateRules=[
    check('name').isLength({min:4}).withMessage('name > 4 char'),
  
  ]
  
  const idValidatorRules=[
    param('id').isMongoId().withMessage('invalid id')
  ];

// add category

Router.post('/category/add',addValidateRules,catgoryController.addCategory)



// show categorys
Router.get('/category/list',catgoryController.showCategory)

// search categorys 
Router.get('/category/search/:id',idValidatorRules,catgoryController.searchCategory)

// delete category
Router.delete('/category/delete/:id',idValidatorRules,catgoryController.deleteCategory)

// edit category 
Router.put('/category/edit',addValidateRules,catgoryController.editCategory)


module.exports=Router;