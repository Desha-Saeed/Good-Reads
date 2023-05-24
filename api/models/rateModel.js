const mongoose=require('mongoose');

const postSchema=mongoose.Schema({
    rate:{
        type:Number,
        required:[true,'please enter photo']
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

const postModel=mongoose.model('rates',postSchema);



module.exports=postModel;