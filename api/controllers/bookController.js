const bookModel=require('../models/bookModel');
const fs=require('fs');
const path=require('path');
const {  validationResult, body } = require('express-validator');

const imagepathe=path.join(__dirname, 'assets');

// add book
 let addBook =async(req,res)=>{
    let  myerrors=validationResult(req);
        try {
            const name='public/img/authors/'+req.body.f_name+req.file.originalname;
            book= await new bookModel({
                name:body.name,
                photo:name,
                category_id:body.category_id,
                author_id:body.author_id
            });

            book.save();
            res.status(200).json(book);
        } 
        catch (error) {
            res.status(500).json({
                name:myerrors.array()[0].path,
                message:myerrors.array()[0].msg,
                value:myerrors.array()[0].value
              });
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
    let  myerrors=validationResult(req);
   try {
    const {id}=await req.params;
     result=await bookModel.findById(id);
     res.status(200).json(result);
    } 
    catch (error) {
        res.status(500).json({
            name:myerrors.array()[0].path,
            message:myerrors.array()[0].msg,
            value:myerrors.array()[0].value
          });
    }
}


// delete category
let deleteBook=async(req,res)=>{
    let  myerrors=validationResult(req);
   try {
    const {id}=await req.params;
    result=await bookModel.deleteOne({_id:id});
    res.status(200).json(result);
    } 
    catch (error) {
        res.status(500).json({
            name:myerrors.array()[0].path,
            message:myerrors.array()[0].msg,
            value:myerrors.array()[0].value
          });
    }
}


//edit category

let editBook=async(req,res)=>{
    let  myerrors=validationResult(req);
    try {
        const data=await req.body;
         result=await bookModel.findByIdAndUpdate({_id:data._id},{
            name:data.name, 
            photo:data.photo,
            category_id:data.category_id,
            author_id:data.author_id
        });
         res.status(200).json(result);
    } 
    catch (error) {
        res.status(500).json({
            name:myerrors.array()[0].path,
            message:myerrors.array()[0].msg,
            value:myerrors.array()[0].value
          });
    }
}

module.exports={addBook ,showBook ,searchBook ,deleteBook,editBook } ;