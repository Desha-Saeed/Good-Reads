const express=require('express');
const Router=express.Router();
const authorConroller =require('../controllers/authorController');
const {restrictTo} = require('../middlewares/auth')


const multer  = require('multer')
const upload = multer({ dest: './public/img/authors' })


// add author
Router.post('/author/add',restrictTo('admin'),upload.single('file.photo'),authorConroller.addAuthor)


// show author
Router.get('/author/list',authorConroller.showAuthor)


// search author 
Router.get('/author/search/:id',authorConroller.searchAuthor)


// delete author
Router.delete('/author/delete/:id',restrictTo('admin'),authorConroller.deleteAuthor)


// edit author 
Router.put('/author/edit',restrictTo('admin'),authorConroller.editAuthor)


module.exports=Router;