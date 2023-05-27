const { body, check } = require('express-validator');

const userCreateValidationRules = [
  body('firstName').isString().withMessage('Full name must be a string'),
  body('lastName').isString().withMessage('First name must be a string'),

  body('email').isEmail().withMessage('Invalid email address'),

  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters.')
    .isStrongPassword()
    .withMessage('Password is not strong enough'),
];

const userUpdateValidationRules = [
  check('firstName')
    .optional()
    .isString()
    .withMessage('First name must be a string'),
  check('lastName')
    .optional()
    .isString()
    .withMessage('First name must be a string'),
  check('email').optional().isEmail().withMessage('Invalid email address'),
  check('password')
    .optional()
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters.')
    .isStrongPassword()
    .withMessage('password is not strong enough'),
];

module.exports = { userCreateValidationRules, userUpdateValidationRules };
