import mongoose from "mongoose";

const examSchema = new mongoose.Schema({
    name: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  semester: { type: Number, required: true },
  branches: { type: [String], required: true },
  subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true }],
  isActive: { type: Boolean, default: true }}, { timestamps: true }
);
module.exports = mongoose.model('ExamSession', examSessionSchema);
