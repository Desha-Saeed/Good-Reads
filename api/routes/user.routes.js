const express=require('express');
const Router=express.Router();
const userRouter=require('../controllers/userController');



// add user
Router.post('/user/add',userRouter.addUser)

// show users
Router.get('/user/list',userRouter.showUsers)

// search users
Router.get('/user/search/:id',userRouter.searchUser)

// delete post
Router.delete('/user/delete/:id',userRouter.deleteUser);

// edit post 
Router.put('/user/edit',userRouter.editUser)



module.exports=Router;