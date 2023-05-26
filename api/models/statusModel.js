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
    ref: 'users',
  },
});

const statusModel = mongoose.model('states', statusSchema);

module.exports = statusModel;
