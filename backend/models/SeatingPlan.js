import mongoose from "mongoose";

const seatingPlanSchema = new mongoose.Schema({
  examSession: { type: mongoose.Schema.Types.ObjectId, ref: 'ExamSession', required: true },
  date: { type: Date, required: true },
  room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
  seatAssignments: [{
    seatNumber: { type: String, required: true },
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  }],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });
module.exports = mongoose.model('SeatingPlan', seatingPlanSchema);

