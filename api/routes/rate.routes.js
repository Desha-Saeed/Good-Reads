const express = require('express');
const Router = express.Router();
const rateController = require('../controllers/rateController');
const { protect } = require('../middlewares/auth');

// add rate
Router.post('/rate', protect, rateController.addRate);

// show rate
Router.get('/rate', rateController.showRate);

// search rate
Router.get('/rate/:id', rateController.searchRate);

// delete rate
Router.delete('/rate/:id', rateController.deleteRate);

// edit rate
Router.put('/rate', rateController.editRate);

module.exports = Router;
