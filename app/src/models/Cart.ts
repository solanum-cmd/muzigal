import mongoose from 'mongoose';

const CartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    items: [
        {
            productId: {
                type: Number,
                required: true,
            },
            quantity: {
                type: Number,
                default: 1,
            },
            // Since products are hardcoded in frontend, we might just store ID.
            // But for display in cart without product lookup from DB (if we don't have Product model), 
            // we can snapshot important details.
            name: String,
            price: Number,
            image: String,
        }
    ],
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.Cart || mongoose.model('Cart', CartSchema);
