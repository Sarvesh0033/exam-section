import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
    code:{type:String,required:true,unique:true},
    name:{type:String,required:true,unique:true},
    credits:{type:Number,required:true},
    maxUnitTestMarks: {
    type: Number,
    default: 20
  },
  maxEndSemMarks: {
    type: Number,
    default: 80
  },
  maxTermWorkMarks: {
    type: Number,
    default: 25 
  },
  
  passingMarksPercent: {
    type: Number,
    default: 40 
  }
});

module.exports = mongoose.model("Subject", subjectSchema);


