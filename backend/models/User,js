import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    gender:{type:String,enum:['male','female'],required:true},
    role:{type:String,enum:['admin','faculty','student'],required:true},

    branch:{type:String,required:function(){
        return this.role==='student';

    }},
    rollNumber:{type:String,unique:true,sparse:true,required:function(){
        return this.role==='student';
        
    }},
    department: {
    type: String,
    required: true
  },
    assignedSupervisorDates: {
    type: [Date],
    default: [],
    required: function () {
      return this.role === "faculty";
    }
  },
   createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: Date

});
const User = mongoose.model('User',userSchema);
export default User;