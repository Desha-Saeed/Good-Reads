const express = require('express');
const { login, register } = require('../controllers/authController');
const router = express.Router();
const { userCreateValidationRules } = require('../validations/user.validation');
const { validate } = require('../middlewares/validations');
//==============================================================================================================

router.post('/login', login);

router.post('/register', validate(userCreateValidationRules), register);

module.exports = router;
