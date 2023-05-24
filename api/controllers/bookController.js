const bookModel=require('../models/bookModel');
const multer  = require('multer')
const upload = multer({ dest: './public/img/books' })

// add book
 let addBook =async(req,res)=>{

        try {

            upload.single(req.body.photo)
            result= await bookModel.create(req.body)
            res.status(200).json(result);
        } 
        catch (error) {
            res.status(501).json(error)
        }
}

// show book 
let showBook =async(req,res)=>{
   try {
     result=await  bookModel.find({});
     res.status(200).json(result);
    } 
    catch (error) {
        res.status(501).json(error)
    }
}


//search book
let searchBook=async(req,res)=>{
   try {
    const {id}=await req.params;
     result=await bookModel.findById(id);
     res.status(200).json(result);
    } 
    catch (error) {
        res.status(501).json(error)
    }
}


// delete category
let deleteBook=async(req,res)=>{
   try {
    const {id}=await req.params;
    result=await bookModel.deleteOne({_id:id});
    res.status(200).json(result);
    } 
    catch (error) {
        res.status(501).json(error)
    }
}


//edit category

let editBook=async(req,res)=>{
    try {
        const data=await req.body;
         result=await bookModel.findByIdAndUpdate({_id:data._id},{name:data.name });
         res.status(200).json(result);
    } 
    catch (error) {
        res.status(501).json(error)
    }
}

module.exports={addBook ,showBook ,searchBook ,deleteBook,editBook } ;