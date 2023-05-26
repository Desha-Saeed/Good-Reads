const reviewModel=require('../models/reviewModel');
const {  validationResult } = require('express-validator');

// add review
 let addReview =async(req,res)=>{
    let  myerrors=validationResult(req);
    try {
        result=await reviewModel.create(req.body);
        res.status(200).json(result);
      } catch (error) {
        res.status(500).json({
            name:myerrors.array()[0].path,
            message:myerrors.array()[0].msg,
            value:myerrors.array()[0].value
          });
      }
}

// show review 
let showReview =async(req,res)=>{
   try {
     result=await  reviewModel.find({});
     res.status(200).json(result);
      } catch (error) {
        res.status(500).json(error);
      }
}


//search review
let searchReview=async(req,res)=>{
    let  myerrors=validationResult(req);
   try {
    const {id}=await req.params;
    result =await  reviewModel.findById(id);
    res.status(200).json(result);
    } catch (error) {
        res.status(500).json({
            name:myerrors.array()[0].path,
            message:myerrors.array()[0].msg,
            value:myerrors.array()[0].value
          });
    }
}


// delete review
let deleteReview=async(req,res)=>{
    let  myerrors=validationResult(req);
    try {
       const {id}=await req.params;
       result =await reviewModel.deleteOne({_id:id});
       res.status(200).json(result);
    } catch (error) {
        res.status(500).json({
            name:myerrors.array()[0].path,
            message:myerrors.array()[0].msg,
            value:myerrors.array()[0].value
          });
    }
}


//edit review

let editReview=async(req,res)=>{
    let  myerrors=validationResult(req);
   try {
    const data=await req.body;
     result=await reviewModel.findByIdAndUpdate({_id:data._id},
        {review:data.review });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({
            name:myerrors.array()[0].path,
            message:myerrors.array()[0].msg,
            value:myerrors.array()[0].value
          });
    }
       
}

module.exports={addReview ,showReview ,searchReview ,deleteReview,editReview } ;