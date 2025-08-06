import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FAQSection from '../components/FAQSection';

// Lucide Icons
import { ClipboardCheck, BadgeDollarSign, Gift, Trophy, Smartphone } from 'lucide-react';

export default function Landing() {
  const { t } = useTranslation();

  return (
    <div className="bg-[#a8dadc]">
      <Navbar />
      <Hero />

      {/* How it Works Section */}
      <section id="how" className="bg-gray-50 py-16 px-6 text-center text-[#1d3557] scroll-mt-16">
        <h2 className="text-3xl font-bold mb-6">{t('howItWorks.title')}</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <ClipboardCheck className="h-12 w-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">{t('howItWorks.steps.0.title')}</h3>
            <p>{t('howItWorks.steps.0.description')}</p>
          </div>
          <div>
            <BadgeDollarSign className="h-12 w-12 mx-auto mb-4 text-green-600" />
            <h3 className="text-xl font-semibold mb-2">{t('howItWorks.steps.1.title')}</h3>
            <p>{t('howItWorks.steps.1.description')}</p>
          </div>
          <div>
            <Gift className="h-12 w-12 mx-auto mb-4 text-purple-600" />
            <h3 className="text-xl font-semibold mb-2">{t('howItWorks.steps.2.title')}</h3>
            <p>{t('howItWorks.steps.2.description')}</p>
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section id="rewards" className="bg-white py-16 px-6 text-center text-[#1d3557] scroll-mt-16">
        <h2 className="text-3xl font-bold mb-8">{t('rewards.title')}</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all hover:scale-105">
            <Trophy className="h-10 w-10 mx-auto mb-4 text-yellow-600" />
            <h3 className="text-xl font-semibold mb-2">{t('rewards.items.0.title')}</h3>
            <p>{t('rewards.items.0.description')}</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all hover:scale-105">
            <Gift className="h-10 w-10 mx-auto mb-4 text-pink-600" />
            <h3 className="text-xl font-semibold mb-2">{t('rewards.items.1.title')}</h3>
            <p>{t('rewards.items.0.description')}</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all hover:scale-105">
            <Smartphone className="h-10 w-10 mx-auto mb-4 text-indigo-600" />
            <h3 className="text-xl font-semibold mb-2">{t('rewards.items.2.title')}</h3>
            <p>{t('rewards.items.0.description')}</p>
          </div>
        </div>
      </section>

      <FAQSection />

      <Footer />
    </div>
  );
}
