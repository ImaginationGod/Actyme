import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import CheckoutButton from '../components/CheckoutButton';

const images = [
  '/Engage.jpg',
  '/Engage2.jpg',
  '/Engage3.jpg',
];

export default function Hero() {
  const { t } = useTranslation();
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 300); // match fade transition duration
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-6 py-20 text-center sm:text-left bg-[#a8dadc]">
      <div className="max-w-4xl mx-auto flex flex-col items-center sm:flex-row gap-8">
        <div className="flex-1">
          <h1 className="text-4xl sm:text-7xl font-extrabold mb-4 flex flex-col gap-6 text-[#1d3557]">
            {t('headline', { returnObjects: true }).map((line, idx) => (
              <div key={idx}>{line}</div>
            ))}
          </h1>
          <p className="text-lg text-[#1d3557] mb-6">
            {t('subtext')}
          </p>

          {/* Stripe Button */}
          <CheckoutButton />
        </div>

        <div className="flex-1">
          <img
            src={images[currentImage]}
            alt="Engagement platform illustration"
            className={`w-full max-w-md mx-auto h-auto rounded-xl transition-opacity duration-500 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
