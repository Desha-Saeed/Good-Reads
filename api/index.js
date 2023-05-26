// packages import
const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db_config');

// Routers import
const userRouter = require('./routes/user.routes');
const authorRouter = require('./routes/author.routes');
const bookRouter = require('./routes/book.routes');
const categoryRouter = require('./routes/category.routes');
const rateRouter = require('./routes/rate.routes');
const reviewRouter = require('./routes/review.routes');
const statusRouter = require('./routes/status.routes');
const authRouter = require('./routes/auth.routes');
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

//middleware
app.use(express.json());
app.use(cors({ origin: '*' }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.static('public'));
app.disable('etag');

// use Routers middleware
app.use(userRouter);
app.use(authorRouter);
app.use(bookRouter);
app.use(categoryRouter);
app.use(rateRouter);
app.use(reviewRouter);
app.use(statusRouter);

// body parser
app.use(express.json());

//connect to database
connectDB();

// auth routes
app.use(authRouter);
app.use('/user', userControllers);

//error middlewares
app.use('*', notFoundErrorHandler);
app.use(globalErrorHandler);

//listen to server on the port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
