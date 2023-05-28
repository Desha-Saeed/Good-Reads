const Features = require('../features');
const categoryModel = require('../models/categoryModel');

// add category
let addCategory = async (req, res, next) => {
  try {
    result = await categoryModel.create(req.body);
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

// show category
let showCategory = async (req, res, next) => {
  try {
    const feature = new Features(categoryModel.find(), req.query).paginate();
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

//search category
let searchCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    result = await categoryModel.findById(id);
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

// delete category
let deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    result = await categoryModel.deleteOne({ _id: id });
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

//edit category

let editCategory = async (req, res, next) => {
  try {
    const { id } = req.params;

    result = await categoryModel.findByIdAndUpdate({ _id: id }, req.body, {});
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
  addCategory,
  showCategory,
  searchCategory,
  deleteCategory,
  editCategory,
};
