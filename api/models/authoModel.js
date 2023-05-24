const mongoose=require('mongoose');

const postSchema=mongoose.Schema({
    photo:{
        type:String,
        required:[false,'please enter photo']
    },

    f_name:{
        type:String ,
         required:[true,'please enter title']
         },

    l_name:{
        type:String ,
        required:[true,'please enter title']
        },

    birth_date:{

        type:Date ,
        required:[true,'please enter title']

            },
})

const postModel=mongoose.model('authors',postSchema);



module.exports=postModel;