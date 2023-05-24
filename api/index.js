// packages import
const express =require('express');
const morgan = require('morgan')
const cors=require('cors');
const connectDB = require('./config/db_config');

// Routers import
const userRouter=require('./routes/user.routes');


//configure .env variables
// config();


//create app
const app = express();


//middleware
app.use(express.json());
app.use(cors({origin:'*'}));
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));
app.use(express.static('public'));
app.disable('etag');

// use middleware routes
app.use(userRouter);


const PORT = process.env.PORT || 8000;

connectDB();

//listen to server on the port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
