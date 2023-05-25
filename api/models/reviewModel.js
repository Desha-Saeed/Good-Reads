const mongoose=require('mongoose');

const postSchema=mongoose.Schema({

    review:{
        type:String ,
         required:[true,'please enter title']
     },


    book_id:{
        type:mongoose.Schema.Types.ObjectId , 
        ref:"books",
        required:true 
    },

     user_id:{
        type:mongoose.Schema.Types.ObjectId ,
        ref:"users",
    }
})

const postModel=mongoose.model('reviews',postSchema);



module.exports=postModel;