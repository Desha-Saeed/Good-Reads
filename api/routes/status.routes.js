const express=require('express');
const Router=express.Router();
const statusController =require('../controllers/statusController');
const { param,check } = require('express-validator');


// valditor  ....
const addValidateRules=[
    check('state').isLength({min:4}).withMessage('name > 4 char'),
   
  ]
  
  const idValidatorRules=[
    param('id').isMongoId().withMessage('invalid id')
  ];

// add status
Router.post('/status/add',addValidateRules,statusController.addStatus)


// show status
Router.get('/status/list',statusController.showStatus)


// search status 
Router.get('/status/search/:id',idValidatorRules,statusController.searchStatus)


// delete status
Router.delete('/status/delete/:id',idValidatorRules,statusController.deleteStatus)


// edit status 
Router.put('/status/edit',addValidateRules,statusController.editStatus)


module.exports=Router;