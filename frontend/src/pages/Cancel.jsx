import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Cancel() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-red-50 text-center px-4">
      <h1 className="text-3xl font-bold text-red-700 mb-4">{t('cancel.title')}</h1>
      <p className="text-lg text-gray-700 mb-6">
        {t('cancel.message')}
      </p>
      <Link
        to="/"
        className="mt-4 inline-block bg-red-600 text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition"
      >
        {t('cancel.back')}
      </Link>
    </div>
  );
}
