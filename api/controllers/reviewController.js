const reviewModel=require('../models/reviewModel');


// add review
 let addReview =async(req,res)=>{
    try {
        result=await reviewModel.create(req.body);
        res.status(200).json(result);
      } catch (error) {
           res.status(500).json(result);
      }
}

// show review 
let showReview =async(req,res)=>{
   try {
     result=await  reviewModel.find({});
     res.status(200).json(result);
      } catch (error) {
           res.status(500).json(result);
      }
}


//search review
let searchReview=async(req,res)=>{
   try {
    const {id}=await req.params;
    result =await  reviewModel.findById(id);
    res.status(200).json(result);
    } catch (error) {
        res.status(500).json(result);
    }
}


// delete review
let deleteReview=async(req,res)=>{
    try {
       const {id}=await req.params;
       result =await reviewModel.deleteOne({_id:id});
       res.status(200).json(result);
    } catch (error) {
        res.status(500).json(result);
    }
}


//edit review

let editReview=async(req,res)=>{
   try {
    const data=await req.body;
     result=await reviewModel.findByIdAndUpdate({_id:data._id},
        {rate:data.rate ,review:data.review,state:data.state });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(result);
    }
       
}

module.exports={addReview ,showReview ,searchReview ,deleteReview,editReview } ;