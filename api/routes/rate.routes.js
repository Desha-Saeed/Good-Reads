const express=require('express');
const Router=express.Router();
const rateController =require('../controllers/rateController');
const parser=require('body-parser');


// add rate
Router.post('/rate/add',rateController.addRate)


// show rate
Router.get('/rate/list',rateController.showRate)


// search rate 
Router.get('/rate/search/:id',rateController.searchRate)


// delete rate
Router.delete('/rate/delete/:id',rateController.deleteRate)


// edit rate 
Router.put('/rate/edit',rateController.editRate)


module.exports=Router;