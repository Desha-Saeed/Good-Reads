const express=require('express');
const Router=express.Router();
const authorConroller =require('../controllers/authorController');
const parser=require('body-parser');

const multer  = require('multer')
const upload = multer({ dest: './public/img/authors' })


// add author
Router.post('/author/add',upload.single('file.photo'),authorConroller.addAuthor)


// show author
Router.get('/author/list',authorConroller.showAuthor)


// search author 
Router.get('/author/search/:id',authorConroller.searchAuthor)


// delete author
Router.delete('/author/delete/:id',authorConroller.deleteAuthor)


// edit author 
Router.put('/author/edit',authorConroller.editAuthor)


module.exports=Router;