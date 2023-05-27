const multer = require('multer');
const upload = multer({ dest: './public/img/books' });
const bookModel = require('../models/bookModel');

// add book
let addBook = async (req, res, next) => {
  try {
    const bookPath = 'public/img/book/' + req.body.name + req.file.originalname;

    console.log(req.file);
    result = await bookModel.create(req.body);
    res.status(200).json({
      status: 'success',
      data: {
        name: req.body.name,
        photo: bookPath,
      },
    });
  } catch (error) {
    next(error);
  }
};

// show book
let showBook = async (req, res, next) => {
  try {
    result = await bookModel.find({});
    res.status(200).json({
      result: 'success',
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
    result = await bookModel.findById(id);
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
    result = await bookModel.deleteOne({ _id: id });
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
    const data = req.body;
    result = await bookModel.findByIdAndUpdate(
      { _id: data._id },
      { state: data.state }
    );
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
