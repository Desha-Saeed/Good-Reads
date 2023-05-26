const express = require('express');
const Router = express.Router();
const reviewController = require('../controllers/reviewController');
const { protect } = require('../middlewares/auth');

// add review
Router.post('/review', protect, reviewController.addReview);

// show review
Router.get('/review', reviewController.showReview);

// search review
Router.get('/review/:id', reviewController.searchReview);

// delete review
Router.delete('/review/:id', reviewController.deleteReview);

// edit review
Router.put('/review', reviewController.editReview);

module.exports = Router;
