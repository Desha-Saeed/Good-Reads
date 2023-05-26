const express=require('express');
const Router=express.Router();
const reviewController =require('../controllers/reviewController');
const { param,check, validationResult } = require('express-validator');


// valditor  ...............
const addValidateRules=[
    check('review').isLength({min:4}).withMessage('name > 4 char'),
   
  ]
  
const idValidatorRules=[
param('id').isMongoId().withMessage('invalid id')
];


// add review
Router.post('/review/add',addValidateRules,reviewController.addReview)


// show review
Router.get('/review/list',reviewController.showReview)


// search review 
Router.get('/review/search/:id',idValidatorRules,reviewController.searchReview)


// delete review
Router.delete('/review/delete/:id',idValidatorRules,reviewController.deleteReview)


// edit review 
Router.put('/review/edit',addValidateRules,reviewController.editReview)


module.exports=Router;