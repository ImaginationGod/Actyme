const express = require('express');
const Stripe = require('stripe');
require('dotenv').config();

const router = express.Router();

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const clientUrl = process.env.CLIENT_URL;

if (!stripeSecretKey || !clientUrl) {
  throw new Error("❌ STRIPE_SECRET_KEY or CLIENT_URL is missing in .env.");
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2023-10-16',
});

// POST /api/stripe/create-checkout-session
router.post('/create-checkout-session', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Pilot Program Entry',
            },
            unit_amount: 500, // $5.00 in cents
          },
          quantity: 1,
        },
      ],
      success_url: `${clientUrl}/success`,
      cancel_url: `${clientUrl}/cancel`,
    });

    return res.status(200).json({ id: session.id });
  } catch (err) {
    console.error("❌ Stripe session creation failed:", err.message);
    return res.status(500).json({
      success: false,
      message: 'Failed to create Stripe session. Please try again later.',
    });
  }
});

module.exports = router;
