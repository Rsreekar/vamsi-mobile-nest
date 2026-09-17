import React from 'react';
import { Smartphone, ShieldCheck, Heart, MapPin, PhoneCall } from 'lucide-react';
import { STORE_PHONE, MAPS_URL, getWhatsAppLink } from '../utils/whatsapp';

export default function AboutUs() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white mx-auto flex items-center justify-center shadow-lg">
          <Smartphone className="w-8 h-8" />
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          About VAMSI MOBILE NEST
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Serving Mangalagiri with top-tier smartphones, genuine accessories, instant screen repairs, and transparent used phone trade-ins.
        </p>
      </div>

      {/* Story Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 sm:p-12 space-y-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900">Your Trusted Local Mobile Destination</h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Located right near the New Bus Stand on Hospitals Road in Mangalagiri, <strong>VAMSI MOBILE NEST</strong> was founded with a clear mission: to provide the local community with authentic smartphones, reliable pre-owned devices, original accessories, and transparent mobile repair services under one roof.
        </p>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Whether you are looking for the latest flagship Samsung or iPhone, seeking an affordable quality-checked used phone, or needing an express display replacement while you wait, our dedicated store team ensures friendly guidance and competitive pricing.
        </p>

        {/* 3 Core Values */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-slate-100">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Genuine Quality</h3>
            <p className="text-xs text-slate-500">100% original brand products and verified tested pre-owned devices.</p>
          </div>

          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Customer First</h3>
            <p className="text-xs text-slate-500">Honest device valuation, clear repair estimates, and friendly after-sales support.</p>
          </div>

          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Convenient Location</h3>
            <p className="text-xs text-slate-500">Easily accessible near New Bus Stand, Hospitals Road, Mangalagiri.</p>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="text-center pt-4">
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-6 py-3.5 rounded-xl shadow"
        >
          <MapPin className="w-4 h-4" />
          <span>Get Directions to Store</span>
        </a>
      </div>

    </div>
  );
}
