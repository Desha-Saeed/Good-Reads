const mongoose=require('mongoose');

const categorySchema=mongoose.Schema({
    name:{
        type:String ,
         required:[true,'please enter name']
         },
})

const categoryModel=mongoose.model('categories',categorySchema);



module.exports=categoryModel;