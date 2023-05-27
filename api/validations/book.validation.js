const { body, check } = require('express-validator');

const bookCreateValidationRules = [
  body('name')
    .isString()
    .withMessage(' name must be a string')
    .isLength({ min: 3, max: 20 })
    .withMessage(' length should be between 3 and 20 characters'),
];

const bookUpdateValidationRules = [
  check('name')
    .optional()
    .isString()
    .withMessage('Full name must be a string')
    .isLength({ min: 3, max: 20 })
    .withMessage('first name length should be between 3 and 20 characters'),
];

module.exports = { bookCreateValidationRules, bookUpdateValidationRules };
