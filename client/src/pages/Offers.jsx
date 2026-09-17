import React from 'react';
import { DEMO_OFFERS } from '../services/demoData';
import { Sparkles, MessageSquare } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

export default function Offers() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold text-rose-600 bg-rose-50 border border-rose-200 px-3 py-1 rounded-full uppercase">
          Special Store Deals
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Current Offers & Discounts
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Exclusive exchange bonuses, screen repair bundles, and accessory offers at VAMSI MOBILE NEST.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {DEMO_OFFERS.map(offer => (
          <div key={offer.id} className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col justify-between">
            <div className="h-56 overflow-hidden relative">
              <img src={offer.image} alt={offer.title} className="w-full h-full object-cover" />
              <div className="absolute top-3 right-3 bg-rose-600 text-white font-black text-xs px-3 py-1 rounded-full">
                {offer.discount}
              </div>
            </div>

            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{offer.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{offer.description}</p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400">{offer.validity}</span>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow flex items-center gap-1.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Claim Offer</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
