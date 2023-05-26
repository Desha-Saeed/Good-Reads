const rateModel = require('../models/rateModel');

// add rate
let addRate = async (req, res, next) => {
  try {
    result = await rateModel.create(req.body);
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

// show rate
let showRate = async (req, res, next) => {
  try {
    result = await rateModel.find({});
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

//search rate
let searchRate = async (req, res, next) => {
  try {
    const { id } = req.params;
    result = await rateModel.findById(id);
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

// delete rate
let deleteRate = async (req, res, next) => {
  try {
    const { id } = req.params;
    result = await rateModel.deleteOne({ _id: id });
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

//edit rate

let editRate = async (req, res, next) => {
  try {
    const data = req.body;
    result = await rateModel.findByIdAndUpdate(
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
  addRate,
  showRate,
  searchRate,
  deleteRate,
  editRate,
};