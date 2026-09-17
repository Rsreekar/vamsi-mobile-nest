import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageSquare, Clock, Instagram, ShieldCheck, ChevronRight, Lock, Heart } from 'lucide-react';
import { STORE_PHONE, WHATSAPP_NUMBER, MAPS_URL, INSTAGRAM_URL, getWhatsAppLink } from '../utils/whatsapp';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-24 md:pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Store Branding & Address */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-xl font-extrabold text-white tracking-tight">
                VAMSI MOBILE NEST
              </span>
              <span className="block text-xs text-blue-400 font-medium">Mangalagiri's Mobile Destination</span>
            </Link>
            
            <p className="text-sm text-slate-400 leading-relaxed">
              Your trusted store for original mobile accessories, expert hardware repairs, screen replacements, and top cash value for your old phone in Mangalagiri.
            </p>

            <div className="space-y-2 text-xs pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>1-563, Hospitals Road, Near New Bus Stand, Mangalagiri – 522503, AP, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${STORE_PHONE}`} className="hover:text-white transition">Phone: +91 {STORE_PHONE}</a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={getWhatsAppLink()} target="_blank" rel="noreferrer" className="hover:text-white transition">WhatsApp: +91 {WHATSAPP_NUMBER}</a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Quick Navigation</h3>
            <ul className="space-y-2 text-sm">
              {[
                { to: '/', label: 'Home' },
                { to: '/buy-old-phone', label: 'Sell Your Old Phone' },
                { to: '/accessories', label: 'Mobile Accessories' },
                { to: '/services', label: 'Screen & Repair Services' },
                { to: '/about', label: 'About Our Store' },
                { to: '/contact', label: 'Contact & Directions' },
                { to: '/owner-login', label: 'Owner Portal Login' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className={`flex items-center gap-1.5 hover:text-white transition text-xs sm:text-sm ${
                    link.to === '/owner-login' ? 'text-blue-400 font-bold' : ''
                  }`}>
                    {link.to === '/owner-login' ? (
                      <Lock className="w-3.5 h-3.5 text-blue-400" />
                    ) : (
                      <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
                    )}
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Business Hours & Social */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Store Timings</h3>
            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300 font-semibold">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>Opening Hours</span>
              </div>
              <div className="space-y-1 text-slate-400 pl-6">
                <p><strong className="text-slate-200">Monday – Saturday:</strong> 10:00 AM – 10:00 PM</p>
                <p><strong className="text-slate-200">Sunday:</strong> 11:00 AM – 1:00 PM</p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 text-white font-semibold text-xs px-4 py-2.5 rounded-lg shadow-md hover:opacity-90 transition"
              >
                <Instagram className="w-4 h-4" />
                <span>Follow @mobilenest_mangalagiri</span>
              </a>
            </div>
          </div>

          {/* Col 4: Store Guarantee & Directions */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Visit Store</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Located conveniently near Mangalagiri New Bus Stand. Drop by for instant screen protectors, repair estimates, or phone trade-in evaluations.
            </p>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs py-2.5 px-4 rounded-lg shadow-md transition"
            >
              <MapPin className="w-4 h-4" />
              <span>Get Google Maps Directions</span>
            </a>

            <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Genuine Products & Trusted In-Person Servicing</span>
            </div>
          </div>

        </div>

        {/* Bottom copyright & developer credit */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <p>© {new Date().getFullYear()} VAMSI MOBILE NEST, Mangalagiri. All rights reserved.</p>
            <p className="text-xs text-slate-300 font-semibold flex flex-wrap items-center justify-center sm:justify-start gap-1.5">
              <span>Made with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" /> in India by Rangisetti Sreekar</span>
              <span className="hidden sm:inline text-slate-600">•</span>
              <span className="text-blue-400">
                For Websites contact: <a href="tel:9494226030" className="underline hover:text-blue-300 font-bold">+91 9494226030</a>
              </span>
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-slate-300 transition">Privacy Policy</Link>
            <Link to="/terms-conditions" className="hover:text-slate-300 transition">Terms & Conditions</Link>
            <Link to="/owner-login" className="text-blue-400 font-semibold hover:underline">Owner Portal</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
