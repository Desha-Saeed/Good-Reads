const authorModel = require('../models/authoModel');

// add author
let addAuthor = async (req, res, next) => {
  try {
    result = await authorModel.create(req.body);
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

// show author
let showAuthor = async (req, res, next) => {
  try {
    result = await authorModel.find({});
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

//search author
let searchAuthor = async (req, res, next) => {
  try {
    const { id } = req.params;
    result = await authorModel.findById(id);
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

// delete author
let deleteAuthor = async (req, res, next) => {
  try {
    const { id } = req.params;
    result = await authorModel.deleteOne({ _id: id });
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

//edit author

let editAuthor = async (req, res, next) => {
  try {
    const data = req.body;
    result = await authorModel.findByIdAndUpdate(
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
  addAuthor,
  showAuthor,
  searchAuthor,
  deleteAuthor,
  editAuthor,
};
