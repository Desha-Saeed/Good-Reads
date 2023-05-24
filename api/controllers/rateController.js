const rateModel=require('../models/rateModel');


// add rate
 let addRate =async(req,res)=>{
   try {
     result=await rateModel.create(req.body);
     res.status(200).json(result);
   } catch (error) {
        res.status(500).json(result);
   }
}

// show rate 
let showRate =async(req,res)=>{
   try {
      result=await  rateModel.find({});
      res.status(200).json(result);
    } catch (error) {
         res.status(500).json(result);
    }
}


//search rate
let searchRate=async(req,res)=>{
   try {
    const {id}=await req.params;
      result = await rateModel.findById(id);
      res.status(200).json(result);
    } catch (error) {
         res.status(500).json(result);
    }
}


// delete rate
let deleteRate=async(req,res)=>{
   try {
    const {id}=await req.params;
     result=await rateModel.deleteOne({_id:id});
     res.status(200).json(result);
    } catch (error) {
         res.status(500).json(result);
    }
}


//edit rate

let editRate=async(req,res)=>{
   try {
      
    const data= await req.body;
     result= await  rateModel.findByIdAndUpdate({_id:data._id},
        {rate:data.rate ,review:data.review,state:data.state });
        res.status(200).json(result);
    } catch (error) {
         res.status(500).json(result);
    }
}

module.exports={addRate ,showRate ,searchRate ,deleteRate,editRate } ;