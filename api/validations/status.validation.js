const { body, check } = require('express-validator');

const statusCreateValidationRules = [
  body('Status')
    .isString()
    .withMessage('Status must be a string')
    .isLength({ min: 3, max: 20 })
    .withMessage('Status length should be between 3 and 100 characters'),
];

const statusUpdateValidationRules = [
  check('Status')
    .optional()
    .isString()
    .withMessage('Status  must be a string')
    .isLength({ min: 3, max: 20 })
    .withMessage('Status length should be between 3 and 100 characters'),
];

exports.module = { statusCreateValidationRules, statusUpdateValidationRules };
