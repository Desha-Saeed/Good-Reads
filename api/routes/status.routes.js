const express=require('express');
const Router=express.Router();
const statusController =require('../controllers/statusController');
const parser=require('body-parser');


// add status
Router.post('/status/add',statusController.addStatus)


// show status
Router.get('/status/list',statusController.showStatus)


// search status 
Router.get('/status/search/:id',statusController.searchStatus)


// delete status
Router.delete('/status/delete/:id',statusController.deleteStatus)


// edit status 
Router.put('/status/edit',statusController.editStatus)


module.exports=Router;