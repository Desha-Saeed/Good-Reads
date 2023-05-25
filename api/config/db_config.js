const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    const con = await mongoose.connect( "mongodb://127.0.0.1:27017/GoodReads", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected on ${con.connection.host}`);
  } catch (error) {
    console.log(error.message);

    process.exit(1);
  }
};

module.exports = connectDB;
