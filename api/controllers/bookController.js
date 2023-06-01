const multer = require('multer');
const upload = multer({ dest: './public/img/books' });
const bookModel = require('../models/bookModel');
const { AppError } = require('../middlewares/error');
const Features = require('../features');

// add book
let addBook = async (req, res, next) => {
  try {
    const result = await bookModel.create({
      ...req.body,
      photo: req.file.path,
    });
    res.status(200).json({
      status: 'success',
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

// show book
let showBook = async (req, res, next) => {
  try {
    //execute query

    const features = new Features(bookModel.find({}), req.query)
      .paginate()
      .filter();
    const result = await features.query;
    res.status(200).json({
      status: 'success',
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

//search book
let searchBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await bookModel
      .findById(id)
      .populate('reviews')
      .select('review');

    res.status(200).json({
      status: 'success',
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

// delete book
let deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await bookModel.deleteOne({ _id: id });
    res.status(200).json({
      status: 'success',
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

//edit book

let editBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    result = await bookModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).json({
      status: 'success',
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addBook,
  showBook,
  searchBook,
  deleteBook,
  editBook,
};
