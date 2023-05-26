const statusModel=require('../models/statusModel');
const {  validationResult } = require('express-validator');

// add status
 let addStatus =async(req,res)=>{
  let  myerrors=validationResult(req);
   try {
    result=await statusModel.create(req.body);
    res.status(200).json(result)
   } catch (error) {
    res.status(500).json({
      name:myerrors.array()[0].path,
      message:myerrors.array()[0].msg,
      value:myerrors.array()[0].value
    });
   }
}

// show status 
let showStatus =async(req,res)=>{
  try {
     result=await   statusModel.find({});
     res.status(200).json(result)
    } catch (error) {
      res.status(500).json(error)
    }
}


//search status
let searchStatus=async(req,res)=>{
  let  myerrors=validationResult(req);
   try {
    const {id}=await req.params;
     result=await  statusModel.findById(id);
     res.status(200).json(result)
    } catch (error) {
      res.status(500).json({
        name:myerrors.array()[0].path,
        message:myerrors.array()[0].msg,
        value:myerrors.array()[0].value
      });
    }
}


// delete status
let deleteStatus=async(req,res)=>{
  let  myerrors=validationResult(req);
   try {
    const {id}=await req.params;
     result=await statusModel.deleteOne({_id:id});
     res.status(200).json(result)
    } catch (error) {
      res.status(500).json({
        name:myerrors.array()[0].path,
        message:myerrors.array()[0].msg,
        value:myerrors.array()[0].value
      });
    }
}


//edit status

let editStatus=async(req,res)=>{
  let  myerrors=validationResult(req);
   try {
    const data=await req.body;
     result=await statusModel.findByIdAndUpdate({_id:data._id},
        {state:data.state });
        res.status(200).json(result)
    } catch (error) {
      res.status(500).json({
        name:myerrors.array()[0].path,
        message:myerrors.array()[0].msg,
        value:myerrors.array()[0].value
      });
    }
   
}

module.exports={addStatus ,showStatus ,searchStatus ,deleteStatus ,editStatus } ;