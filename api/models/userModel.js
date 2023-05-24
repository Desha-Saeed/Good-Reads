const mongoose=require('mongoose');
const {isEmail}=require('validator')
const userSchema=mongoose.Schema({
    firstName:{
        type:String , 
        required:[true,'enter email']
     },

    lastName:{
        type:String  ,
        required:[true,'enter email']
        },

    email:{
        type:String ,
        unique:true , 
        lowercase:true,
        required:[true,'Enter  email'],
        validate:[isEmail,'Enter valid email']
    },

    password:{
        type:Number ,
        required:[true,'Enter Password'],
        minlength:[4,'minlength is 4 char']
    }
})

const usersModel=mongoose.model('users',userSchema);



module.exports=usersModel;