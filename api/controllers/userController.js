const { catchAsync } = require('../middlewares/error');
const User = require('../models/userModel');

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find({});

  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users,
    },
  });
});

exports.deleteAllUsers = catchAsync(async (req, res, next) => {
  await User.deleteMany({});

  res.status(200).json({
    status: 'success',

    data: 'All users has been deleted',
  });
});
const userModel=require('../models/userModel');

// add user
 let addUser = async(req,res)=>{
   try {

   result=await userModel.create({...req.body});
   res.status(200).json(result);
    
   } catch (error) {

    res.status(501).json(error)

   }
}

// show users 
let showUsers = async(req,res)=>{
   try {
        result= await  userModel.find({});
        res.status(200).json(result);
    
   } catch (error) {
    res.status(501).json(error);
   }
}


//search users
let searchUser= async(req,res)=>{
   try {

    const {id}=await req.params;
    result=await userModel.findById(id);
    res.status(200).json(result)
    
   } catch (error) {
     res.status(501).json(error);
   }
}


// delete user
let deleteUser=async(req,res)=>{
   try {

    const {id}=await req.params;
    result =await userModel.deleteOne({_id:id});
    res.status(200).json(result)
    
    } catch (error) {
    res.status(501).json(error);
    }
}


//edit post

let editUser=async(req,res)=>{
   try {
    const data=await req.body;
   result=await   userModel.findByIdAndUpdate({_id:data.id},{
      f_name:data.f_name, 
      l_name:data.l_name,
      email:data.email,
      password:data.password
   });
   res.status(200).json(result)
    

    } catch (error) {
    res.status(501).json(error);
    }
}

module.exports={addUser ,showUsers ,searchUser ,deleteUser ,editUser};