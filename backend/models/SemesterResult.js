import mongoose from "mongoose";

const semesterResultSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  examSession: { type: mongoose.Schema.Types.ObjectId, ref: 'ExamSession', required: true },
  subjectResults: [{
    subjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
    totalMarks: { type: Number, required: true },
    percentage: { type: Number, required: true },
    status: { type: String, enum: ['Pass', 'Fail'], required: true },
    gradePoint: { type: Number, required: true }
  }],
  sgpa: { type: Number, required: true },
  isSemesterPassed: { type: Boolean, required: true },
  generatedAt: { type: Date, default: Date.now }
}, { timestamps: true });
module.exports = mongoose.model('SemesterResult', semesterResultSchema);

