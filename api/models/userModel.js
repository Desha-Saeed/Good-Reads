const mongoose=require('mongoose');
// const {isEmail}=require('validator');
const { isEmail } = require('express-validator');
const userSchema=mongoose.Schema({
    f_name:{
        type:String , 
        required:[true,'enter email'],
      
     },

    l_name:{
        type:String  ,
        required:[true,'enter email']
        },

    email:{
        type:String ,
        unique:true , 
        lowercase:true,
        required:[true,'Enter  email'],
      
    },

    password:{
        type:Number ,
        required:[true,'Enter Password'],
        minlength:[4,'minlength is 4 char']
    }
})

const usersModel=mongoose.model('users',userSchema);



module.exports=usersModel;