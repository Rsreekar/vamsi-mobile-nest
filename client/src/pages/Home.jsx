import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Smartphone, Wrench, Banknote, ShoppingBag, 
  MessageSquare, PhoneCall, MapPin, Sparkles, ArrowRight, Instagram, CheckCircle2 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ServiceCard from '../components/ServiceCard';
import { DEMO_BRANDS, DEMO_SERVICES } from '../services/demoData';
import { STORE_PHONE, MAPS_URL, INSTAGRAM_URL, getWhatsAppLink } from '../utils/whatsapp';

export default function Home() {
  const { t } = useLanguage();

  const trustCards = [
    { title: 'Mobile Repairs', subtitle: 'Screen & Battery Replacement', icon: Wrench, link: '/services', color: 'bg-emerald-600' },
    { title: 'Sell Your Old Phone', subtitle: 'Instant Valuation & Cash', icon: Banknote, link: '/buy-old-phone', color: 'bg-amber-600' },
    { title: 'Mobile Accessories', subtitle: 'Cases, Tempered Glass & Audio', icon: ShoppingBag, link: '/accessories', color: 'bg-purple-600' },
  ];

  return (
    <div className="space-y-12 pb-24 lg:pb-12">

      {/* 1. Mobile-Optimized Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-blue-600/10 blur-3xl rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="space-y-6 text-center max-w-3xl mx-auto">
            
            {/* Store Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Mangalagiri • Open Today 10:00 AM – 10:00 PM</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
              {t('hero.title')}
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed font-normal">
              {t('hero.subtitle')}
            </p>

            {/* Mobile Primary Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch justify-center gap-3 pt-2 max-w-md mx-auto">
              
              <Link
                to="/buy-old-phone"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 active:scale-98 text-white font-extrabold text-sm py-4 px-6 rounded-2xl shadow-xl shadow-blue-950/50 transition"
              >
                <span>🔄 Sell Your Old Phone</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={getWhatsAppLink("Hi VAMSI MOBILE NEST, I found your store on your mobile website and would like to enquire.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 active:scale-98 text-white font-extrabold text-sm py-4 px-6 rounded-2xl shadow-xl shadow-emerald-950/50 transition"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

            </div>

            {/* Direct Phone & Maps Quick Links */}
            <div className="flex items-center justify-center gap-4 text-xs font-semibold text-slate-300 pt-1">
              <a href={`tel:${STORE_PHONE}`} className="flex items-center gap-1.5 text-blue-400 hover:underline">
                <PhoneCall className="w-3.5 h-3.5" /> Call: {STORE_PHONE}
              </a>
              <span>•</span>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-indigo-400 hover:underline">
                <MapPin className="w-3.5 h-3.5" /> Google Maps
              </a>
            </div>

            {/* Key Value Propositions */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-[11px] text-slate-400">
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Express Display Repair</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Top Cash for Old Phones</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Original Accessories</span>
            </div>

          </div>
        </div>

      </section>

      {/* 2. Mobile Touch Action Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          {trustCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <Link
                key={idx}
                to={card.link}
                className="group bg-white rounded-2xl p-5 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-between active:scale-98"
              >
                <div className="flex items-center gap-3.5">
                  <div className={`w-12 h-12 rounded-2xl ${card.color} text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 group-hover:text-blue-600 transition">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      {card.subtitle}
                    </p>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 3. Supported Smartphone Brands */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
        <div className="text-center max-w-xl mx-auto mb-4">
          <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            Supported Smartphone Brands
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Screen repairs, tempered glass, accessories & trade-ins for all major phone models.
          </p>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 px-4 -mx-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center">
          {DEMO_BRANDS.map((brand) => (
            <div
              key={brand.id}
              className="bg-white text-slate-900 border border-slate-200 px-4 py-2.5 rounded-2xl text-xs font-bold shadow-sm whitespace-nowrap shrink-0"
            >
              {brand.logoText}
            </div>
          ))}
        </div>
      </section>

      {/* 4. Top Core Store Services */}
      <section className="bg-slate-100/80 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">Expert In-Store Solutions</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Mobile Repair & Hardware Specialties
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Fast, reliable mobile screen replacement, tempered glass, device valuation and repair servicing in Mangalagiri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {DEMO_SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center pt-8">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3.5 rounded-xl shadow transition text-xs sm:text-sm"
            >
              <span>View All Repair & Service Offerings</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 5. Mobile-Optimized Store Location Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Details */}
          <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Visit Our Store</span>
              <h2 className="text-2xl font-black text-slate-900 mt-0.5">
                VAMSI MOBILE NEST
              </h2>
              <p className="text-xs text-slate-500">Mangalagiri, Andhra Pradesh</p>

              <div className="space-y-3.5 mt-5 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold">Address:</strong>
                    <span>1-563, Hospitals Road, Near New Bus Stand, Mangalagiri – 522503, AP, India</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <PhoneCall className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold">Phone & WhatsApp:</strong>
                    <span>Call: +91 9948800022</span><br />
                    <span>WhatsApp: +91 9948800033</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2.5 pt-2 border-t border-slate-100">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-blue-600 hover:bg-blue-500 active:scale-98 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-md transition"
              >
                <MapPin className="w-4 h-4" />
                <span>Get Directions on Google Maps</span>
              </a>

              <a
                href={`tel:${STORE_PHONE}`}
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-slate-100 hover:bg-slate-200 active:scale-98 text-slate-800 font-bold text-xs sm:text-sm rounded-xl border border-slate-300 transition"
              >
                <PhoneCall className="w-4 h-4 text-emerald-600" />
                <span>Call Store (+91 9948800022)</span>
              </a>
            </div>

          </div>

          {/* Interactive Map Embed */}
          <div className="lg:col-span-7 bg-slate-100 min-h-[280px] relative">
            <iframe
              title="Vamsi Mobile Nest Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15309.21481977755!2d80.5471!3d16.4419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f013d2c8034b%3A0x867eb3eb795fdf3!2sMangalagiri%2C%20Andhra%20Pradesh%20522503!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full min-h-[280px] sm:min-h-[350px] border-0"
              allowFullScreen=""
              loading="lazy"
            />
          </div>

        </div>
      </section>

      {/* 6. Instagram Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-2">
        <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-rose-50 rounded-3xl p-6 sm:p-8 border border-pink-100 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-500 text-white mx-auto flex items-center justify-center shadow-md">
            <Instagram className="w-5 h-5" />
          </div>
          <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
            Follow Us on Instagram
          </h2>
          <p className="text-xs text-slate-600 max-w-md mx-auto">
            Stay updated with accessory arrivals, screen repair transformations, and daily updates at @mobilenest_mangalagiri.
          </p>
          <div>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow transition"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow @mobilenest_mangalagiri</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
