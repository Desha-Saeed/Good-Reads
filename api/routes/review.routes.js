const express=require('express');
const Router=express.Router();
const reviewController =require('../controllers/reviewController');



// add review
Router.post('/review/add',reviewController.addReview)


// show review
Router.get('/review/list',reviewController.showReview)


// search review 
Router.get('/review/search/:id',reviewController.searchReview)


// delete review
Router.delete('/review/delete/:id',reviewController.deleteReview)


// edit review 
Router.put('/review/edit',reviewController.editReview)


module.exports=Router;