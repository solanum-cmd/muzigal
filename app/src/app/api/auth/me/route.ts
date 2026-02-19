import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import User from '@/models/User';
import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export async function GET() {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get('musigal_session');

        if (!token) {
            return NextResponse.json({ user: null });
        }

        const { payload } = await jwtVerify(token.value, new TextEncoder().encode(JWT_SECRET));
        const userId = payload.sub;

        await dbConnect();
        const user = await User.findById(userId).select('-password'); // No password field but good practice

        if (!user) {
            return NextResponse.json({ user: null });
        }

        return NextResponse.json({ user });
    } catch (error) {
        console.error('Me error:', error);
        return NextResponse.json({ user: null });
    }
}
