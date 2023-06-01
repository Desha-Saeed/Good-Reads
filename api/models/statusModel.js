const mongoose = require('mongoose');

const statusSchema = mongoose.Schema({
  state: {
    type: String,

    required: [true, 'please enter state'],
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
    select: 'title',
  });
  next();
});

const statusModel = mongoose.model('states', statusSchema);

module.exports = statusModel;
