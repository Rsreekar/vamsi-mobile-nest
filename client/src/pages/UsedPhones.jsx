import React from 'react';
import { DEMO_PRODUCTS } from '../services/demoData';
import ProductCard from '../components/ProductCard';
import { ShieldCheck, Repeat, PhoneCall } from 'lucide-react';
import { STORE_PHONE, getWhatsAppLink } from '../utils/whatsapp';

export default function UsedPhones() {
  const usedPhones = DEMO_PRODUCTS.filter(p => p.category === 'used-phones');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full uppercase">
          Pre-Owned & Refurbished Devices
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Verified Used Smartphones
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Every pre-owned phone undergoes 50+ hardware inspections, camera testing, display verification, and battery health checks before sale.
        </p>
      </div>

      {/* Trust Badges Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
          <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center font-bold mb-2">
            ✓
          </div>
          <h3 className="font-bold text-slate-900 text-sm">Tested Hardware</h3>
          <p className="text-xs text-slate-500">Displays, cameras, speakers & sensors 100% verified</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
          <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 mx-auto flex items-center justify-center font-bold mb-2">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-sm">Store Warranty</h3>
          <p className="text-xs text-slate-500">Up to 3 months store warranty on pre-owned devices</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
          <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 mx-auto flex items-center justify-center font-bold mb-2">
            <Repeat className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-sm">Easy Exchange</h3>
          <p className="text-xs text-slate-500">Trade in your old phone towards any used smartphone purchase</p>
        </div>
      </div>

      {/* Catalog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {usedPhones.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Enquiry Banner */}
      <div className="bg-slate-900 text-white p-8 rounded-3xl text-center space-y-4 max-w-3xl mx-auto shadow-xl">
        <h3 className="text-xl font-bold">Looking for a Specific Model?</h3>
        <p className="text-xs text-slate-400">
          Our used phone inventory updates daily. Contact us on WhatsApp or call store to ask about available stock for Apple, Samsung, OnePlus, or Pixel.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-5 py-3 rounded-xl shadow"
          >
            Ask Stock on WhatsApp
          </a>
          <a
            href={`tel:${STORE_PHONE}`}
            className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs px-5 py-3 rounded-xl border border-slate-700 flex items-center gap-1.5"
          >
            <PhoneCall className="w-4 h-4 text-blue-400" />
            <span>Call +91 {STORE_PHONE}</span>
          </a>
        </div>
      </div>

    </div>
  );
}
