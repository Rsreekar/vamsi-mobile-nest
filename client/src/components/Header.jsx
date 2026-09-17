import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Smartphone, Menu, X, MessageSquare, PhoneCall, Globe, ChevronDown, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { STORE_PHONE, MAPS_URL, getWhatsAppLink } from '../utils/whatsapp';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/buy-old-phone', label: t('nav.sellOldPhone') },
    { path: '/accessories', label: t('nav.accessories') },
    { path: '/services', label: t('nav.services') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'te', label: 'తెలుగు (Telugu)', flag: '🇮🇳' },
    { code: 'hi', label: 'हिंदी (Hindi)', flag: '🇮🇳' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md text-white border-b border-slate-800 shadow-xl">
      
      {/* Top Banner Notice - Optimized for Mobile */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 text-[11px] sm:text-xs py-1.5 px-3 text-center font-medium tracking-wide flex justify-between sm:justify-center items-center gap-2">
        <span className="truncate">📍 Near New Bus Stand, Mangalagiri</span>
        <a href={`tel:${STORE_PHONE}`} className="flex items-center gap-1 font-bold text-emerald-300 hover:underline shrink-0">
          <PhoneCall className="w-3 h-3" /> Call: {STORE_PHONE}
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Mobile Store Wordmark / Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-blue-500/30 group-hover:scale-105 transition-transform">
              <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <span className="text-base sm:text-xl font-black tracking-tight text-white block">
                VAMSI MOBILE NEST
              </span>
              <span className="block text-[9px] sm:text-[10px] font-bold text-blue-400 tracking-wider uppercase -mt-0.5">
                Mangalagiri • AP
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                  isActive(link.path)
                    ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Controls */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-2 rounded-xl border border-slate-700 transition"
              >
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                <span>{lang.toUpperCase()}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-slate-900 rounded-xl shadow-2xl border border-slate-800 py-1 z-50">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 text-xs flex items-center justify-between hover:bg-slate-800 ${
                        lang === l.code ? 'text-blue-400 font-bold bg-slate-800/80' : 'text-slate-300'
                      }`}
                    >
                      <span>{l.label}</span>
                      <span>{l.flag}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* WhatsApp Header CTA */}
            <a
              href={getWhatsAppLink("Hi VAMSI MOBILE NEST, I am contacting you from your website.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-md transition"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Right Controls: Lang Pill & Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => {
                const nextLang = lang === 'en' ? 'te' : lang === 'te' ? 'hi' : 'en';
                setLang(nextLang);
              }}
              className="flex items-center gap-1 text-[11px] font-bold bg-slate-800 text-blue-400 border border-slate-700 px-2.5 py-1.5 rounded-lg active:bg-slate-700"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang.toUpperCase()}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-white focus:outline-none bg-slate-800/80 rounded-lg border border-slate-700/80"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Animated Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-t border-slate-800 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-4 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-bold transition ${
                isActive(link.path)
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-300 hover:bg-slate-900 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <a
              href={getWhatsAppLink("Hi VAMSI MOBILE NEST, I am contacting you directly from your mobile website.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-600 text-white font-extrabold text-sm py-3.5 rounded-xl shadow-lg"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Chat on WhatsApp (9948800033)</span>
            </a>
            
            <a
              href={`tel:${STORE_PHONE}`}
              className="flex items-center justify-center gap-2 bg-slate-900 text-slate-200 font-bold text-sm py-3.5 rounded-xl border border-slate-800"
            >
              <PhoneCall className="w-5 h-5 text-blue-400" />
              <span>Call Store (9948800022)</span>
            </a>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-slate-900 text-slate-200 font-bold text-sm py-3.5 rounded-xl border border-slate-800"
            >
              <MapPin className="w-5 h-5 text-indigo-400" />
              <span>Get Store Directions</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
