const { body, check } = require('express-validator');

const reviewCreateValidationRules = [
  body('review')
    .isString()
    .withMessage('Review must be a string')
    .isLength({ min: 3, max: 100 })
    .withMessage('Review length should be between 3 and 100 characters'),
];

const reviewUpdateValidationRules = [
  check('review')
    .optional()
    .isString()
    .withMessage('Review  must be a string')
    .isLength({ min: 3, max: 100 })
    .withMessage('Review length should be between 3 and 100 characters'),
];

exports.module = { reviewCreateValidationRules, reviewUpdateValidationRules };
