const Features = require('../features');
const categoryModel = require('../models/categoryModel');

// add category
let addCategory = async (req, res, next) => {
  try {
    result = await categoryModel.create(req.body);
    console.log(req.body);
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
    const page= feature.page;
    const limit=feature.limit;
    const totalPages=feature.totalPages;

    console.log(page,limit,totalPages);

    res.status(200).json({
        result:result,
        page:page,
        limit:limit
      
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
    console.log(id||'none');
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
