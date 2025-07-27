import mongoose from "mongoose";

const supervisorAssignmentSchema = new mongoose.Schema({
  examSession: { type: mongoose.Schema.Types.ObjectId, ref: 'ExamSession', required: true },
  date: { type: Date, required: true },
  room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
  facultyId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  shift: { type: String, enum: ['Morning', 'Afternoon'], required: true }
}, { timestamps: true });
module.exports = mongoose.model('SupervisorAssignment', supervisorAssignmentSchema);

