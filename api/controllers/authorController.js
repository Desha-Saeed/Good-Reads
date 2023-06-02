const Features = require('../features');
const authorModel = require('../models/authoModel');

// add author
let addAuthor = async (req, res, next) => {
  try {
    result = await authorModel.create({
      f_name: req.body.f_name,
      l_name: req.body.l_name,
      birth_date: req.body.birth_date,
      photo: req.file.path,
    });
    res.status(200).json({
      status: 'success',
      data: {
        result,
        photo: req.file.path,
      },
    });
  } catch (error) {
    next(error);
  }
};

// show author
let showAuthor = async (req, res, next) => {
  try {
    console.log(req.query);
    const feature = new Features(authorModel.find({}), req.query).paginate();
    result = await feature.query;
    console.log(result);
    res.status(200).json({
      result: result,
    });
  } catch (error) {
    next(error);
  }
};

//search author
let searchAuthor = async (req, res, next) => {
  try {
    const { id } = req.params;
    result = await authorModel.findOne({ _id: id });
    console.log(result);
    res.status(200).json({
      result: result,
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
    console.log(data);
    result = await authorModel.findByIdAndUpdate(
      { _id: data.id },
      {
        f_name: data.f_name,
        l_name: data.l_name,
        birth_date: data.birth_date,
        photo: data.birth_date,
      }
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
