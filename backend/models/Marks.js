import mongoose from "mongoose";

const marksSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  examSession: { type: mongoose.Schema.Types.ObjectId, ref: 'ExamSession', required: true },
  subjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
  unitTestMarks: { type: Number, required: true, min: 0 },
  endSemMarks: { type: Number, required: true, min: 0 },
  termWorkMarks: { type: Number, required: true, min: 0 },
  enteredBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  isVerified: { type: Boolean, default: false }
}, { timestamps: true });
module.exports = mongoose.model('Marks', marksSchema);
