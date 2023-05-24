const express=require('express');
const Router=express.Router();
const reviewController =require('../controllers/rateController');



// add review
Router.post('/rate/add',reviewController.addRate)


// show review
Router.get('/show/list',reviewController.showRate)


// search review 
Router.get('/rate/search/:id',reviewController.searchRate)


// delete review
Router.delete('/rate/delete/:id',reviewController.deleteRate)


// edit review 
Router.put('/rate/edit',reviewController.editRate)


module.exports=Router;