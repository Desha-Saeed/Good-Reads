
const authorModel=require('../models/authoModel');
const fs=require('fs');
const path=require('path');
const {  validationResult } = require('express-validator');


const imagepathe=path.join(__dirname, 'assets');

// add author
 let addAuthor = async (req,res)=>{
  let  myerrors=validationResult(req);
  try {
    const name='public/img/authors/'+req.body.f_name+req.file.originalname;
    const user= await new authorModel({
      f_name:req.body.f_name,
      l_name:req.body.l_name,
      birth_date:req.body.birth_date,
      photo:name
    });

    user.save();
    res.status(200).send(user);
  } catch (error) {

    res.status(500).json({
      name:myerrors.array()[0].path,
      message:myerrors.array()[0].msg,
      value:myerrors.array()[0].value
    });

  }
}

// show author 
let showAuthor =async(req,res)=>{
   try {
    result=await authorModel.find({});
    res.status(200).json(result);
   } catch (error) {
    res.status(500).json(error);
   }
}


//search author
let searchAuthor=async(req,res)=>{
  let  myerrors=validationResult(req);
   try {

    const {id}= await req.params;
    result=await authorModel.findById(id);
    res.status(200).json(result);
   } catch (error) {

    res.status(500).json({
      name:myerrors.array()[0].path,
      message:myerrors.array()[0].msg,
      value:myerrors.array()[0].value
    });
   }
}


// delete author
let deleteAuthor=async(req,res)=>{

  let  myerrors=validationResult(req);
  try {
    const {id}= await req.params;

    author=await authorModel.findById(id);

    fs.unlink(`/${author.photo}`);

   result=await  authorModel.deleteOne({_id:id})
   res.status(200).json(result);
   } 
   catch (error) {
    res.status(500).json({
      name:myerrors.array()[0].path,
      message:myerrors.array()[0].msg,
      value:myerrors.array()[0].value
    });
   }
}


//edit author

let editAuthor=async(req,res)=>{
   let  myerrors=validationResult(req);
    try {
        const data=await req.body;
      result=await   authorModel.findByIdAndUpdate({_id:data._id},
           {f_name:data.f_name ,l_name:data.l_name,
            birth_date:data.birth_date });
            res.status(200).json(result);
        }
     catch (error) {

        res.status(500).json({
          name:myerrors.array()[0].path,
          message:myerrors.array()[0].msg,
          value:myerrors.array()[0].value
     });
       }   
}

module.exports={addAuthor ,showAuthor ,searchAuthor ,deleteAuthor,editAuthor } ;