const reviewModel = require('../models/reviewModel');

// add review
let addReview = async (req, res, next) => {
  try {
    result = await reviewModel.create(req.body);
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

// show review
let showReview = async (req, res, next) => {
  try {
    result = await reviewModel.find({});
    res.status(200).json({
      review: 'success',
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

//search review
let searchReview = async (req, res, next) => {
  try {
    const { id } = req.params;
    result = await reviewModel.findById(id);
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

// delete review
let deleteReview = async (req, res, next) => {
  try {
    const { id } = req.params;
    result = await reviewModel.deleteOne({ _id: id });
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

//edit review

let editReview = async (req, res, next) => {
  try {
    const { id } = req.params;
    result = await reviewModel.findByIdAndUpdate({ _id: id }, req.body);
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
  addReview,
  showReview,
  searchReview,
  deleteReview,
  editReview,
};
