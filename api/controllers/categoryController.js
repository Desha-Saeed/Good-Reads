const categoryModel=require('../models/categoryModel');
const {  validationResult } = require('express-validator');

// add category
 let addCategory =async(req,res)=>{
  let  myerrors=validationResult(req);
  try {
   result=await categoryModel.create(req.body);
   res.status(200).json(result)
  } catch (error) {
    res.status(500).json({
      name:myerrors.array()[0].path,
      message:myerrors.array()[0].msg,
      value:myerrors.array()[0].value
    });
  }
}

// show category 
let showCategory =async(req,res)=>{

    try {
      const  page=parseInt(req.query.page) || 1;
      const limit=parseInt(req.query.limit) || 10;
       categoryModel.find().skip((page-1)*limit).limit(limit).exec((error,data)=>{
        if(!error){
            categoryModel.countDocuments((error,count)=>{
                if(!error){
                    const totalPages=Math.ceil(count/limit);
                    console.log({page:page,limit:limit});
                    res.status(200).json({
                        data:data,
                        page:page,
                        limit:limit,
                        totalPages:totalPages
                    });
                }
            })
        }
     })
      
    } catch (error) {
      res.status(500).json(error);
    }
}


//search category
let searchCategory=async(req,res)=>{
  let  myerrors=validationResult(req);
   try {
    const {id}=await req.params;
     result=await  categoryModel.findById(id);
     res.status(200).json(result)
    } catch (error) {
      res.status(500).json({
        name:myerrors.array()[0].path,
        message:myerrors.array()[0].msg,
        value:myerrors.array()[0].value
      });
    }
}


// delete category
let deleteCategory=async(req,res)=>{
  let  myerrors=validationResult(req);
   try {
    const {id}=await req.params;
    result=await categoryModel.deleteOne({_id:id});
    res.status(200).json(result)
    } catch (error) {
      res.status(500).json({
        name:myerrors.array()[0].path,
        message:myerrors.array()[0].msg,
        value:myerrors.array()[0].value
      });
    }
}


//edit category

let editCategory=async(req,res)=>{
  let  myerrors=validationResult(req);
    try {
      
        const data= await req.body;
        result=await  categoryModel.findByIdAndUpdate({_id:data._id},{name:data.name });
        res.status(200).json(result)
    } catch (error) {
      res.status(500).json({
        name:myerrors.array()[0].path,
        message:myerrors.array()[0].msg,
        value:myerrors.array()[0].value
      });
    }
}

module.exports={addCategory ,showCategory ,searchCategory ,deleteCategory,editCategory};