const statusModel=require('../models/statusModel');


// add status
 let addStatus =async(req,res)=>{
   try {
    result=await statusModel.create(req.body);
    res.status(200).json(result)
   } catch (error) {
     res.status(500).json(error)
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
   try {
    const {id}=await req.params;
     result=await  statusModel.findById(id);
     res.status(200).json(result)
    } catch (error) {
      res.status(500).json(error)
    }
}


// delete status
let deleteStatus=async(req,res)=>{
   try {
    const {id}=await req.params;
     result=await statusModel.deleteOne({_id:id});
     res.status(200).json(result)
    } catch (error) {
      res.status(500).json(error)
    }
}


//edit status

let editStatus=async(req,res)=>{
   try {
    const data=await req.body;
     result=await statusModel.findByIdAndUpdate({_id:data._id},
        {rate:data.rate ,review:data.review,state:data.state });
        res.status(200).json(result)
    } catch (error) {
      res.status(500).json(error)
    }
   
}

module.exports={addStatus ,showStatus ,searchStatus ,deleteStatus ,editStatus } ;