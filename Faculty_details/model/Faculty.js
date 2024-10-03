const mongoose=require('mongoose');

const facultySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    designation:{
        type:String,
        required:true,
    },
    salary:{
        type:Number,
        required:true,
    },
    exprience:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    }
})

const Faculty = mongoose.model('Faculty',facultySchema)
module.exports=Faculty;