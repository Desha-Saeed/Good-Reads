const express = require('express');
const Router = express.Router();
const reviewController = require('../controllers/reviewController');

const {
  reviewCreateValidationRules,
  reviewUpdateValidationRules,
} = require('../validations/review.validation');
const { protect } = require('../middlewares/auth');
const { validate } = require('../middlewares/validations');

// add review
Router.post(
  '/review',
  validate(reviewCreateValidationRules),
  protect,
  reviewController.addReview
);

// show review
Router.get('/review', reviewController.showReview);

// search review
Router.get('/review/:id', reviewController.searchReview);

// delete review
Router.delete('/review/:id', protect, reviewController.deleteReview);

// edit review
Router.put(
  '/review/:id',
  validate(reviewUpdateValidationRules),
  protect,
  reviewController.editReview
);

module.exports = Router;
