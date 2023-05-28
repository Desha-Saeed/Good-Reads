const mongoose = require('mongoose');

const bookSchema = mongoose.Schema(
  {
    photo: {
      type: String,
      // required: [true, 'please enter photo'],
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
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

bookSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'category_id',
    select: 'name ',
  }).populate({
    path: 'author_id',
    select: 'f_name l_name photo',
  });
  next();
});

//virtual populate for book reviews
bookSchema.virtual('reviews', {
  ref: 'reviews',
  foreignField: 'book_id',
  localField: '_id',
});

const bookModel = mongoose.model('books', bookSchema);

module.exports = bookModel;
