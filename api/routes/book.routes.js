const express=require('express');
const Router=express.Router();
const bookController =require('../controllers/bookController');
const multer  = require('multer')
const { param,check, validationResult } = require('express-validator');

// store image ...
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
      cb(null,'./assets/public/img/books');
    },
    filename:(req,file,cb)=>{
      console.log(file.originalname);
      cb(null,req.body.name+file.originalname);
    }
  });

  const upload = multer({ storage: storage});


  // valditor  ....
    const addValidateRules=[
    check('name').isLength({min:4}).withMessage('name > 4 char'),
    check('photo').isString().withMessage(' shoud be string'),
    check('category_id').not().isEmpty().withMessage('category required'),
    check('author_id').not().isEmpty().withMessage('author required')
  ]

  const idValidatorRules=[
    param('id').isMongoId().withMessage('invalid id')
  ];


// add book
Router.post('/book/add',addValidateRules,upload.single('photo'),bookController.addBook)


// show book
Router.get('/book/list/',bookController.showBook)


// search book 
Router.get('/book/search/:id',idValidatorRules,bookController.searchBook)


// delete book
Router.delete('/book/delete/:id',idValidatorRules,bookController.deleteBook)


// edit book 
Router.put('/book/edit',addValidateRules,bookController.editBook)


module.exports=Router;