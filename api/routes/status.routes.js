const express = require('express');
const Router = express.Router();
const statusController = require('../controllers/statusController');
const parser = require('body-parser');

// add status
Router.post('/status', statusController.addStatus);

// show status
Router.get('/status', statusController.showStatus);

// search status
Router.get('/status/:id', statusController.searchStatus);

// delete status
Router.delete('/status/:id', statusController.deleteStatus);

// edit status
Router.put('/status/:id', statusController.editStatus);

module.exports = Router;
