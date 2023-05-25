const express=require('express');
const Router=express.Router();
const bookController =require('../controllers/bookController');



// add book
Router.post('/book/add',bookController.addBook)


// show book
Router.get('/book/list',bookController.showBook)


// search book 
Router.get('/book/search/:id',bookController.searchBook)


// delete book
Router.delete('/book/delete/:id',bookController.deleteBook)


// edit book 
Router.put('/book/edit',bookController.editBook)


module.exports=Router;