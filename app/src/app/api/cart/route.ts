import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Cart from '@/models/Cart';
import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

// Helper to get user ID from session
async function getUserId() {
    const cookieStore = await cookies();
    const token = cookieStore.get('musigal_session');
    if (!token) return null;

    try {
        const { payload } = await jwtVerify(token.value, new TextEncoder().encode(JWT_SECRET));
        return payload.sub;
    } catch {
        return null;
    }
}

export async function GET() {
    await dbConnect();
    const userId = await getUserId();
    if (!userId) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    let cart = await Cart.findOne({ userId });
    if (!cart) {
        cart = await Cart.create({ userId, items: [] });
    }

    return NextResponse.json(cart);
}

export async function POST(req: Request) {
    try {
        await dbConnect();
        const userId = await getUserId();
        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const body = await req.json();
        const { productId, quantity, name, price, image } = body;

        let cart = await Cart.findOne({ userId });
        if (!cart) {
            cart = await Cart.create({ userId, items: [] });
        }

        const itemIndex = cart.items.findIndex((item: any) => item.productId === productId);

        if (itemIndex > -1) {
            cart.items[itemIndex].quantity += quantity || 1;
        } else {
            cart.items.push({ productId, quantity: quantity || 1, name, price, image });
        }

        await cart.save();
        return NextResponse.json(cart);
    } catch (error) {
        console.error('Add to cart error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function DELETE(req: Request) {
    try {
        await dbConnect();
        const userId = await getUserId();
        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { searchParams } = new URL(req.url);
        const productId = searchParams.get('productId');

        if (productId) {
            // Remove specific item
            const cart = await Cart.findOne({ userId });
            if (cart) {
                cart.items = cart.items.filter((item: any) => item.productId !== parseInt(productId));
                await cart.save();
                return NextResponse.json(cart);
            }
        } else {
            // Clear cart
            await Cart.findOneAndDelete({ userId });
            return NextResponse.json({ success: true });
        }

        return NextResponse.json({ error: 'Cart not found' }, { status: 404 });

    } catch (error) {
        console.error('Delete cart error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
