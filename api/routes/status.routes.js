const express=require('express');
const Router=express.Router();
const statusController =require('../controllers/statusController');
const parser=require('body-parser');


// add status
Router.post('/rate/add',statusController.addStatus)


// show status
Router.get('/show/list',statusController.showStatus)


// search status 
Router.get('/rate/search/:id',statusController.searchStatus)


// delete status
Router.delete('/rate/delete/:id',statusController.deleteStatus)


// edit status 
Router.put('/rate/edit',statusController.editStatus)


module.exports=Router;