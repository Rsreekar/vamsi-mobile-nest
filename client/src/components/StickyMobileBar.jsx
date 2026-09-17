import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Repeat, Headphones, MessageSquare, PhoneCall, ShieldCheck } from 'lucide-react';
import { STORE_PHONE, getWhatsAppLink } from '../utils/whatsapp';

export default function StickyMobileBar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/buy-old-phone', label: 'Sell Phone', icon: Repeat, badge: 'Cash' },
    { path: '/accessories', label: 'Accessories', icon: Headphones },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-2xl border-t border-slate-800/90 shadow-[0_-10px_30px_rgba(0,0,0,0.6)] px-2 py-2">
      <div className="flex items-center justify-around max-w-md mx-auto relative">
        
        {/* Nav Items */}
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-2xl transition-all duration-200 relative ${
                active
                  ? 'text-blue-400 font-black scale-105'
                  : 'text-slate-400 hover:text-slate-200 active:scale-95'
              }`}
            >
              {item.badge && (
                <span className="absolute -top-1.5 right-1 px-1.5 py-0.2 text-[9px] font-extrabold bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 rounded-full shadow-sm animate-pulse">
                  {item.badge}
                </span>
              )}
              <div className={`p-1.5 rounded-xl transition-all ${active ? 'bg-blue-600/20 ring-1 ring-blue-500/40' : ''}`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold tracking-tight mt-0.5">{item.label}</span>
            </Link>
          );
        })}

        {/* WhatsApp Mobile Quick Button */}
        <a
          href={getWhatsAppLink("Hi VAMSI MOBILE NEST, I am contacting you directly from your mobile website.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 px-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl shadow-lg shadow-emerald-950/60 active:scale-95 transition-all"
        >
          <div className="p-1.5">
            <MessageSquare className="w-5 h-5 text-white" />
          </div>
          <span className="text-[10px] font-black tracking-tight text-white">WhatsApp</span>
        </a>

        {/* Call Quick Button */}
        <a
          href={`tel:${STORE_PHONE}`}
          className="flex flex-col items-center justify-center py-1 px-3 text-slate-400 hover:text-slate-200 active:scale-95 transition-all"
        >
          <div className="p-1.5 rounded-xl bg-slate-900 border border-slate-800">
            <PhoneCall className="w-5 h-5 text-blue-400" />
          </div>
          <span className="text-[10px] font-bold tracking-tight mt-0.5">Call</span>
        </a>

      </div>
    </div>
  );
}
