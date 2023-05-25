const categoryModel=require('../models/categoryModel');


// add category
 let addCategory =async(req,res)=>{

  try {
   result=await categoryModel.create(req.body);
   res.status(200).json(result)
  } catch (error) {
    res.status(500).json(error)
  }
}

// show category 
let showCategory =async(req,res)=>{
    try {
        result =await categoryModel.find({});
        res.status(200).json(result)
    } catch (error) {
      res.status(500).json(error)
    }
}


//search category
let searchCategory=async(req,res)=>{
   try {
    const {id}=await req.params;
     result=await  categoryModel.findById(id);
     res.status(200).json(result)
    } catch (error) {
      res.status(500).json(error)
    }
}


// delete category
let deleteCategory=async(req,res)=>{
   try {
    const {id}=await req.params;
    result=await categoryModel.deleteOne({_id:id});
    res.status(200).json(result)
    } catch (error) {
    res.status(500).json(error)
    }
}


//edit category

let editCategory=async(req,res)=>{
    try {
        const data= await req.body;
        result=await  categoryModel.findByIdAndUpdate({_id:data._id},{name:data.name });
        res.status(200).json(result)
    } catch (error) {
    res.status(500).json(error)
    }
}

module.exports={addCategory ,showCategory ,searchCategory ,deleteCategory,editCategory};