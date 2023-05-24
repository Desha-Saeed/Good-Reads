const express=require('express');
const Router=express.Router();
const catgoryController =require('../controllers/categoryController');


// add category

Router.post('/category/add',catgoryController.addCategory)



// show categorys
Router.get('/category/list',catgoryController.showCategory)

// search categorys 
Router.get('/category/search/:id',catgoryController.searchCategory)

// delete category
Router.delete('/category/delete/:id',catgoryController.deleteCategory)

// edit category 
Router.put('/category/edit',catgoryController.editCategory)


module.exports=Router;