import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import User from '@/models/User';
import { SignJWT } from 'jose';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export async function POST(req: Request) {
    try {
        await dbConnect();
        const body = await req.json();
        const { phone, firstName, lastName, email } = body;

        let user = await User.findOne({ phone });

        if (user) {
            return NextResponse.json({ error: 'User already exists' }, { status: 400 });
        }

        user = await User.create({
            phone,
            firstName,
            lastName,
            email,
        });

        // Create a session (JWT)
        const token = await new SignJWT({ sub: user._id.toString(), role: user.role })
            .setProtectedHeader({ alg: 'HS256' })
            .setExpirationTime('24h')
            .sign(new TextEncoder().encode(JWT_SECRET));

        // Set cookie
        (await cookies()).set({
            name: 'musigal_session',
            value: token,
            httpOnly: true,
            path: '/',
            maxAge: 60 * 60 * 24, // 1 day
        });

        return NextResponse.json({ success: true, user });
    } catch (error) {
        console.error('Register error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
