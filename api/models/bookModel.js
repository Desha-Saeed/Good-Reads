const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  photo: {
    type: String,
    required: [true, 'please enter photo'],
  },
  name: {
    type: String,
    required: [true, 'please enter title'],
  },

  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'categories',
    required: true,
  },

  author_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'authors',
  },
});

const bookModel = mongoose.model('books', bookSchema);

module.exports = bookModel;
