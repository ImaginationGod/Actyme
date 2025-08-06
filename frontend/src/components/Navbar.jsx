import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem('lang', lang);
    };

    return (
        <nav className="bg-[#f1faee] sticky top-0 z-50 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="font-bold text-2xl text-[#457b9d]">
                    Actyme
                </a>

                {/* Desktop Links */}
                <div className="space-x-8 hidden sm:flex font-semibold text-[#1d3557]">
                    <a href="#how" className="hover:text-[#e63946]">{t('nav1')}</a>
                    <a href="#rewards" className="hover:text-[#e63946]">{t('nav2')}</a>
                    <a href="#faq" className="hover:text-[#e63946]">{t('nav3')}</a>
                </div>

                {/* Language Selector */}
                <select
                    onChange={(e) => changeLanguage(e.target.value)}
                    value={i18n.language}
                    className="bg-white border border-gray-300 text-[#1d3557] text-sm font-semibold rounded-md focus:ring-[#457b9d] focus:border-[#457b9d] px-2 py-1 ml-2"
                >
                    <option value="en">🇺🇸 EN</option>
                    <option value="hi">🇮🇳 HI</option>
                </select>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="sm:hidden ml-4 text-[#1d3557]"
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <div className="sm:hidden bg-[#f1faee] px-4 pb-4 space-y-2 text-[#1d3557] font-semibold">
                    <a href="#how" className="block hover:text-[#e63946]">How it Works</a>
                    <a href="#rewards" className="block hover:text-[#e63946]">Rewards</a>
                    <a href="#faq" className="block hover:text-[#e63946]">FAQ</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
