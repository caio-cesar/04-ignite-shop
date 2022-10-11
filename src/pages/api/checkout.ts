import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { cartItems } = req.body;

    if (req.method !== 'POST') {
        return res.status(405).json({ error : 'Method not allowed.'});
    }

    if (!cartItems) {
        return res.status(400).json({ error: 'Price not found.'});
    }

    const lineItems = cartItems.map((cartItem) => {
        return {
            price: cartItem.item.priceId,
            quantity: cartItem.quantity
        }
    });

    const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${process.env.NEXT_URL}/`;

    const checkoutSession = await stripe.checkout.sessions.create({
        success_url: successUrl,
        cancel_url: cancelUrl,
        mode: 'subscription',
        line_items: lineItems
    })

    return res.status(201).json({
        checkoutUrl: checkoutSession.url
    })
}