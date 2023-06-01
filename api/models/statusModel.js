const mongoose = require('mongoose');

const statusSchema = mongoose.Schema({
  state: {
    type: String,
    enum: ['read', 'wanttoread', 'reading'],
    required: [true, 'please enter title'],
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

statusSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'book_id',
    select: 'name',
  }).populate({
    path: 'user_id',
    select: 'firstName lastName email',
  });
  next();
});

const statusModel = mongoose.model('states', statusSchema);

module.exports = statusModel;
