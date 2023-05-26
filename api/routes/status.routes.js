const express = require('express');
const Router = express.Router();
const statusController = require('../controllers/statusController');
const {
  statusCreateValidationRules,
  statusUpdateValidationRules,
} = require('../validations/status.validation');
const { validate } = require('../middlewares/validations');

// add status
Router.post(
  '/status',
  validate(statusCreateValidationRules),
  statusController.addStatus
);

// show status
Router.get('/status', statusController.showStatus);

// search status
Router.get('/status/:id', statusController.searchStatus);

// delete status
Router.delete('/status/:id', statusController.deleteStatus);

// edit status
Router.put(
  '/status/:id',
  validate(statusUpdateValidationRules),
  statusController.editStatus
);

module.exports = Router;
