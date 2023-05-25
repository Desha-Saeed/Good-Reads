// packages import
const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db_config');
const { body } = require('express-validator');
const cors = require('cors');

//routes
const { login, register } = require('./controllers/authController');
const userControllers = require('./routes/user.routes');

//middleware imports
const {
  notFoundErrorHandler,
  globalErrorHandler,
} = require('./middlewares/error');
//========================================================================================================

//create app
const app = express();

const PORT = process.env.PORT || 8000;

// body parser
app.use(express.json());

//Cross access origin options
app.use(cors());

//connect to database
connectDB();

// auth routes
app.post('/login', login);
app.post(
  '/register',
  body('email').isEmail(),
  body('password').isStrongPassword(),
  body('firstName').notEmpty(),
  body('lastName').notEmpty(),
  register
);
app.use('/user', userControllers);

//error middlewares
app.use('*', notFoundErrorHandler);
app.use(globalErrorHandler);

//listen to server on the port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
