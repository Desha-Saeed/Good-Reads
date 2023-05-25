const express=require('express');
const Router=express.Router();
const catgoryController =require('../controllers/categoryController');
const {restrictTo} = require('../middlewares/auth')


// add category

Router.post('/category/add',restrictTo('admin'),catgoryController.addCategory)



// show categorys
Router.get('/category/list',catgoryController.showCategory)

// search categorys 
Router.get('/category/search/:id',catgoryController.searchCategory)

// delete category
Router.delete('/category/delete/:id',restrictTo('admin'),catgoryController.deleteCategory)

// edit category 
Router.put('/category/edit',restrictTo('admin'),catgoryController.editCategory)


module.exports=Router;