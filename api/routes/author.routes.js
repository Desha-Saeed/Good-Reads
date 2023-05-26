const express=require('express');
const Router=express.Router();
const authorConroller =require('../controllers/authorController');
const multer  = require('multer')
const { param,check, validationResult } = require('express-validator');


// store image ...
const storage=multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,'./assets/public/img/authors');
  },
  filename:(req,file,cb)=>{
    console.log(file.originalname);
    cb(null,req.body.f_name+file.originalname);
  }
})

const upload = multer({ storage: storage});


// valditor  ....
const addValidateRules=[
  check('f_name').isLength({min:4}).withMessage('name > 4 char'),
  check('f_name').isString().withMessage(' shoud be string'),
  check('l_name').isLength({min:4}).withMessage('name > 4 char'),
  check('l_name').isString().withMessage(' shoud be string'),
  check('birth_date').isDate().withMessage('shoud be date'),
  check('photo').isString().withMessage(' shoud be string'),
]

const idValidatorRules=[
  param('id').isMongoId().withMessage('invalid id')
];

// add author
Router.post('/author/add',upload.single('photo'),addValidateRules,authorConroller.addAuthor)


// show author
Router.get('/author/list',authorConroller.showAuthor)


// search author 
Router.get('/author/search/:id',idValidatorRules,authorConroller.searchAuthor)


// delete author
Router.delete('/author/delete/:id',idValidatorRules,authorConroller.deleteAuthor)


// edit author 
Router.put('/author/edit',addValidateRules,authorConroller.editAuthor)


module.exports=Router;