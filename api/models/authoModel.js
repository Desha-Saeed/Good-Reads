const mongoose = require('mongoose');

const authorSchema = mongoose.Schema({
  photo: {
    type: String,
  },

  f_name: {
    type: String,
    required: [true, 'please enter first name'],
  },

  l_name: {
    type: String,
    required: [true, 'please enter last name'],
  },

  birth_date: {
    type: Date,
    required: [true, 'please enter date of birth'],
  },
});

const authorModel = mongoose.model('authors', authorSchema);

module.exports = authorModel;
