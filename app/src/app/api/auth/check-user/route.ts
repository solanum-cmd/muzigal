import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import User from '@/models/User';

export async function POST(req: Request) {
    try {
        await dbConnect();
        const { phone } = await req.json();

        const user = await User.findOne({ phone });

        return NextResponse.json({ exists: !!user });
    } catch (error) {
        console.error('Check user error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
