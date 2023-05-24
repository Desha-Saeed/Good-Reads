const authorModel=require('../models/authorModel');


// add author
 let addAuthor = async (req,res)=>{
  try {
    const author= await authorModel.create(req.body);
    res.status(200).send(req.file);
    console.log(req.file);
  } catch (error) {
    res.status(401).json(error);
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
   try {

    const {id}= await req.params;
    result=await authorModel.findById(id);
    res.status(200).json(result);
   } catch (error) {

        res.status(500).json(error);
   }
}


// delete author
let deleteAuthor=async(req,res)=>{
  try {
    const {id}= await req.params;
   result=await  authorModel.deleteOne({_id:id})
   res.status(200).json(result);
   } 
   catch (error) {

        res.status(500).json(error);
   }
}


//edit author

let editAuthor=async(req,res)=>{
   
    try {
        const data=await req.body;
      result=await   authorModel.findByIdAndUpdate({_id:data._id},
           {f_name:data.f_name ,l_name:data.l_name,
            birth_date:data.birth_date });
            res.status(200).json(result);
        }
     catch (error) {

            res.status(500).json(error);
       }   
}

module.exports={addAuthor ,showAuthor ,searchAuthor ,deleteAuthor,editAuthor } ;