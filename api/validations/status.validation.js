const { body, check } = require('express-validator');

const statusCreateValidationRules = [
  body('state').isString().withMessage('Status must be a string'),
];

const statusUpdateValidationRules = [
  check('state')
    .optional()
    .isString()
    .withMessage('Status  must be a string')
    .isLength({ min: 3, max: 20 })
    .withMessage('Status length should be between 3 and 100 characters'),
];

module.exports = { statusCreateValidationRules, statusUpdateValidationRules };
