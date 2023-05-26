const express=require('express');
const Router=express.Router();
const rateController =require('../controllers/rateController');

const { param,check } = require('express-validator');



const addValidateRules=[
    
     check('rate').isInt().withMessage('rate shoud be number between 1 and 10'),
]

const idValidateRules=[
     param('id').isMongoId().withMessage('in valid id')
]
// add rate
Router.post('/rate/add',addValidateRules,rateController.addRate)


// show rate
Router.get('/rate/list',rateController.showRate)


// search rate 
Router.get('/rate/search/:id',idValidateRules,rateController.searchRate)


// delete rate
Router.delete('/rate/delete/:id',idValidateRules,rateController.deleteRate)


// edit rate 
Router.put('/rate/edit',addValidateRules,rateController.editRate)


module.exports=Router;