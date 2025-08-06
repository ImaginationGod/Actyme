import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export default function CheckoutButton() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/stripe/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await res.json();

      if (!data?.id) throw new Error('Invalid session ID');

      const stripe = await stripePromise;
      await stripe.redirectToCheckout({ sessionId: data.id });
    } catch (err) {
      alert('Checkout failed. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className="rounded-md bg-[#e63946] text-white px-6 py-3 font-medium hover:bg-[#c9303c] focus:ring-2 focus:ring-offset-2 focus:ring-[#457b9d]"
    >
      {loading ? t('btn1') : t('btn2')}
    </button>
  );
}
