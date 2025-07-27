import mongoose from "mongoose";

const cgpaRecordSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  cgpa: { type: Number, required: true },
  percentage: { type: Number, required: true },
  isOverallPassed: { type: Boolean, required: true },
  generatedAt: { type: Date, default: Date.now }
}, { timestamps: true });
module.exports = mongoose.model('CgpaRecord', cgpaRecordSchema);
