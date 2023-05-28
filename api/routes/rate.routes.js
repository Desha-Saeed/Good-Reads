const express = require('express');
const Router = express.Router();
const rateController = require('../controllers/rateController');
const {
  rateCreateValidationRules,
  rateUpdateValidationRules,
} = require('../validations/rate.validation');

const { protect } = require('../middlewares/auth');
const { validate } = require('../middlewares/validations');
//==============================================================================================================

// add rate
Router.post('/rate', protect, rateController.addRate);

// show rate
Router.get('/rate', rateController.showRate);

// search rate
Router.get('/rate/:id', rateController.searchRate);

// delete rate
Router.delete('/rate/:id', protect, rateController.deleteRate);

// edit rate
Router.put(
  '/rate/:id',
  validate(rateUpdateValidationRules),
  protect,
  rateController.editRate
);

module.exports = Router;
