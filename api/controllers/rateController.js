const Mongoose  = require('mongoose');
const rateModel=require('../models/rateModel');
const { validationResult } = require('express-validator');




// add rate ..............................................
 let addRate =async(req,res)=>{
     let  myerrors=validationResult(req);
   try {
     result=await rateModel.create(req.body);
          res.status(200).json(result);
         
    
   } catch (error) {
     res.status(500).json({
          name:myerrors.array()[0].path,
          message:myerrors.array()[0].msg,
          value:myerrors.array()[0].value
        });
      
   }
}


// show rate ...........................................
let showRate =async(req,res)=>{

   try {
      result=await  rateModel.find({});

          //  const  userID="646e172064cfd2d9afd690f2";
     avgrate=await rateModel.aggregate([
          { 
               // $match:{
               //      user_id:Mongoose.Types.ObjectId(userID)
               // }

               $group:{
                     _id:null,
                    Rate:{$avg:"$rate"}
               }
          }
      ]);

      const num =await avgrate[0].Rate;
      const rate = await num.toString().match(/(\d+)\.(\d)/);
   
      res.status(200).json({result:result ,avg:rate[0]});
     
    } catch (error) {
           console.log(error);
         res.status(500).json(error);
    }
}


//search rate ............................................
let searchRate=async(req,res)=>{
     let  myerrors=validationResult(req);
   try {
          const {id}=await req.params;
          result = await rateModel.findById(id);

          const  bookID="646e1c47c68826e6c2718d64";
           avgrate=await rateModel.aggregate([
          { 
               $match:{
                    book_id:Mongoose.Types.ObjectId(bookID)
               },
          },
          {
               $group:{
                     _id:null,
                    Rate:{$avg:"$rate"}
               }
          }
          ]);

      const num =await avgrate[0].Rate;
      const rate = await num.toString().match(/(\d+)\.(\d)/);
   
      res.status(200).json({result:result ,avg:rate[0]});

    } catch (error) {
         
          res.status(500).json({
               name:myerrors.array()[0].path,
               message:myerrors.array()[0].msg,
               value:myerrors.array()[0].value
          });

    }
}


// delete rate ...........................................
let deleteRate=async(req,res)=>{
     let  myerrors=validationResult(req);
   try {
    const {id}=await req.params;
     result=await rateModel.deleteOne({_id:id});
     res.status(200).json(result);
    } catch (error) {
     res.status(500).json({
          name:myerrors.array()[0].path,
          message:myerrors.array()[0].msg,
          value:myerrors.array()[0].value
        });
    }
}


//edit rate ....................................................

let editRate=async(req,res)=>{
     let  myerrors=validationResult(req);
   try {
      
    const data= await req.body;
     result= await  rateModel.findByIdAndUpdate({_id:data._id},
        {rate:data.rate  });
        res.status(200).json(result);
    } catch (error) {
     res.status(500).json({
          name:myerrors.array()[0].path,
          message:myerrors.array()[0].msg,
          value:myerrors.array()[0].value
        });
    }
}

module.exports={addRate ,showRate ,searchRate ,deleteRate,editRate } ;