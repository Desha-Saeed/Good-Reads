const { body, check } = require('express-validator');

const rateCreateValidationRules = [
  body('rate')
    .isNumeric({ no_symbols: true })
    .withMessage('rate must be a number'),
];

const rateUpdateValidationRules = [
  check('rate')
    .optional()
    .isNumeric({ no_symbols: true })
    .withMessage('rate must be a number'),
];

exports.module = { rateCreateValidationRules, rateUpdateValidationRules };
