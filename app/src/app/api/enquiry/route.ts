import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Enquiry from "@/models/Enquiry";

export async function POST(req: NextRequest) {
    try {
        await dbConnect();
        const body = await req.json();
        const { name, phone, email, message, academyId, academyName, teacherId, teacherName, type } = body;

        if (!name || !phone || !email) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        if (type === 'teacher') {
            if (!teacherId || !teacherName) {
                return NextResponse.json({ error: "Missing teacher details" }, { status: 400 });
            }
        } else if (type === 'franchise') {
            // Franchise enquiry only needs basic fields which are already checked
        } else {
            // Default to academy if type is missing or 'academy'
            if (!academyId || !academyName) {
                return NextResponse.json({ error: "Missing academy details" }, { status: 400 });
            }
        }

        const newEnquiry = new Enquiry({
            name,
            phone,
            email,
            message,
            academyId,
            academyName,
            teacherId,
            teacherName,
            type: type || 'academy',
        });

        await newEnquiry.save();

        return NextResponse.json({ message: "Enquiry submitted successfully", enquiry: newEnquiry }, { status: 201 });
    } catch (error) {
        console.error("Enquiry submission error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
