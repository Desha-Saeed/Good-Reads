const mongoose = require('mongoose');

const rateSchema = mongoose.Schema({
  rate: {
    type: Number,
    required: [true, 'please enter rating'],
  },

  book_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'books',
    required: true,
  },

  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

rateSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'book_id',
    select: 'name',
  });
  next();
});

const rateModel = mongoose.model('rates', rateSchema);

module.exports = rateModel;
