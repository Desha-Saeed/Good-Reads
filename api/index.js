// packages import
const express = require('express');

const connectDB = require('./config/db_config');
//configure .env variables
config();

//create app
const app = express();

const PORT = process.env.PORT || 8000;

connectDB();

//listen to server on the port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
