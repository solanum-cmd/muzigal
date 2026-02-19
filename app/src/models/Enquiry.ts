import mongoose from "mongoose";

const EnquirySchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String },
    academyId: { type: Number },
    academyName: { type: String },
    teacherId: { type: Number },
    teacherName: { type: String },
    type: { type: String, enum: ['academy', 'teacher', 'franchise', 'teacher_join'], default: 'academy' },
    createdAt: { type: Date, default: Date.now },
});

// Prevent model caching issues in development
if (process.env.NODE_ENV === "development") {
    delete mongoose.models.Enquiry;
}

const Enquiry = mongoose.models.Enquiry || mongoose.model("Enquiry", EnquirySchema);
export default Enquiry;
