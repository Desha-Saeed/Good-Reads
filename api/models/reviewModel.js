const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
  review: {
    type: String,
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

// reviewSchema.pre(/^find/, function (next) {
//   this.populate({
//     path: 'book_id',
//     select: 'title',
//   }).populate({
//     path: 'user_id',
//     select: 'firstName lastName email',
//   });
//   next();
// });

const reviewModel = mongoose.model('reviews', reviewSchema);

module.exports = reviewModel;
