const statusModel = require('../models/statusModel');
const Features = require('../features');

// add status
let addStatus = async (req, res, next) => {
  try {
    result = await statusModel.create(req.body);
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

// show status
let showStatus = async (req, res, next) => {
  try {
    const feature = new Features(statusModel.find({}, req.query))
      .limitFields()
      .filter();
    const result = await feature.query;
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

//search status
let searchStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    result = await statusModel.findById(id);
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

// delete status
let deleteStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    result = await statusModel.deleteOne({ _id: id });
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

//edit status

let editStatus = async (req, res, next) => {
  try {
    const [id] = req.params;
    result = await statusModel.findByIdAndUpdate({ _id: id }, req.body);
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
  addStatus,
  showStatus,
  searchStatus,
  deleteStatus,
  editStatus,
};
