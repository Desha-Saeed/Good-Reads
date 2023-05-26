const { body, check } = require('express-validator');

const authorCreateValidationRules = [
  body('f_name')
    .isString()
    .withMessage('Full name must be a string')
    .isLength({ min: 3, max: 20 })
    .withMessage('first name length should be between 3 and 20 characters'),

  body('l_name')
    .isString()
    .withMessage('Full name must be a string')
    .isLength({ min: 3, max: 20 })
    .withMessage('first name length should be between 3 and 20 characters'),

  body('birth_date').isDate().withMessage('Invalid Date'),
];

const authorUpdateValidationRules = [
  check('f_name')
    .optional()
    .isString()
    .withMessage('Full name must be a string')
    .isLength({ min: 3, max: 20 })
    .withMessage('first name length should be between 3 and 20 characters'),

  check('l_name')
    .optional()
    .isString()
    .withMessage('Full name must be a string')
    .isLength({ min: 3, max: 20 })
    .withMessage('first name length should be between 3 and 20 characters'),

  check('birth_date').optional().isDate().withMessage('Invalid Date'),
];

exports.module = { authorCreateValidationRules, authorUpdateValidationRules };
