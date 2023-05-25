const express=require('express');
const Router=express.Router();
const bookController =require('../controllers/bookController');

const {restrictTo} = require('../middlewares/auth')


// add book
Router.post('/book/add',restrictTo('admin'),bookController.addBook)


// show book
Router.get('/book/list',bookController.showBook)


// search book 
Router.get('/book/search/:id',bookController.searchBook)


// delete book
Router.delete('/book/delete/:id' ,restrictTo('admin'),bookController.deleteBook)


// edit book 
Router.put('/book/edit',restrictTo('admin'),bookController.editBook)


module.exports=Router;