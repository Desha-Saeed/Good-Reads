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

let editUser=async(req,post)=>{
   try {
    const data=await req.body;
   result=await   userModel.findByIdAndUpdate({_id:data.id});
   res.status(200).json(result)
    
    } catch (error) {
    res.status(501).json(error);
    }
}

module.exports={addUser ,showUsers ,searchUser ,deleteUser ,editUser};