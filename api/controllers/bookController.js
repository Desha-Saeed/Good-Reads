const bookModel=require('../models/bookModel');
const fs=require('fs');
const path=require('path');
const {  validationResult, body } = require('express-validator');

const imagepathe=path.join(__dirname, 'assets');

// add book
 let addBook =async(req,res)=>{
    let  myerrors=validationResult(req);
        try {
            const name='public/img/books/'+req.body.name+req.file.originalname;
            book= await new bookModel({
                name:req.body.name,
                photo:name,
                category_id:req.body.category_id,
                author_id:req.body.author_id
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
            // console.log(error);
        }
}

// show book 
let showBook =async(req,res)=>{
   try {
      
    const  page=req.query.page || 1;
    const limit=req.query.limit|5;
        

      bookModel.find().skip((page-1)*limit).limit(limit).exec((error,data)=>{
        if(!error){
            bookModel.countDocuments((error,count)=>{
                if(!error){
                    const totalPages=Math.ceil(count/limit);
                    console.log({page:page,limit:limit});
                    res.status(200).json({
                        data:data,
                        page:page,
                        limit:limit,
                        totalPages:totalPages
                    });
                }
            })
        }
     })
    
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
     
     const image=await bookModel.findOne({_id:id});
     fs.unlink(`./assets/${image.photo}`);

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