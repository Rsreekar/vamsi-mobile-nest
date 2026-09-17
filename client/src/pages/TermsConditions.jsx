import React from 'react';
import { FileText } from 'lucide-react';

export default function TermsConditions() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
          <FileText className="w-5 h-5" />
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Terms & Conditions</h1>
          <p className="text-xs text-slate-500">VAMSI MOBILE NEST • Mangalagiri</p>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 p-8 space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed shadow-sm">
        <p>
          Welcome to <strong>VAMSI MOBILE NEST</strong>. By accessing our website or using our services in Mangalagiri, you agree to the following terms and conditions.
        </p>

        <h3 className="text-sm font-bold text-slate-900 pt-2">1. Old Phone Valuation & Physical Inspection</h3>
        <p>
          All online price estimates for used smartphones are preliminary and subject to physical verification of hardware condition, display original state, battery health, and IMEI verification at our store.
        </p>

        <h3 className="text-sm font-bold text-slate-900 pt-2">2. Product Pricing & Stock Availability</h3>
        <p>
          Prices and stock status displayed on the catalogue are subject to real-time store availability. Final sales take place directly at our Mangalagiri retail store or via confirmed phone/WhatsApp orders.
        </p>

        <h3 className="text-sm font-bold text-slate-900 pt-2">3. Servicing & Warranty</h3>
        <p>
          Store warranties for pre-owned phones and repair replacements cover specified hardware components as documented in the physical receipt issued upon store purchase.
        </p>
      </div>
    </div>
  );
}
