const mongoose=require('mongoose');

const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    programe:{
        type:String,
        required:true,
    },
    enr_no:{
        type:Number,
        required:true,
    },
    dob:{
        type:Date,
        required:true,
    },
    bloodgroup:{
        type:String,
        required:true,
    },
    mobile:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
  


})

const Student = mongoose.model('Student',studentSchema)
module.exports=Student;