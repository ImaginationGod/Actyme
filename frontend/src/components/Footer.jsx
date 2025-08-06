import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#457b9d] border-t text-center py-6 text-sm text-[#f1faee]">
      &copy; {new Date().getFullYear()} Actyme. {t('footer.copyright')}
    </footer>
  );
};

export default Footer;
