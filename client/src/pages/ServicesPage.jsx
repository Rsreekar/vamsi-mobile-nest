import React from 'react';
import { DEMO_SERVICES } from '../services/demoData';
import ServiceCard from '../components/ServiceCard';
import { PhoneCall, MapPin } from 'lucide-react';
import { STORE_PHONE, MAPS_URL, getWhatsAppLink } from '../utils/whatsapp';

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Page Title */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Expert Mobile Repairs & Servicing</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Mobile Repair & Hardware Services
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          From express screen replacement to genuine battery upgrades and software solutions, visit VAMSI MOBILE NEST in Mangalagiri for fast and reliable servicing.
        </p>
      </div>

      {/* Top 5 Core Offerings Banner */}
      <div className="bg-gradient-to-r from-blue-900 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-4">
        <span className="bg-emerald-500 text-slate-950 font-black text-xs px-3 py-1 rounded-full uppercase">
          Top 5 Store Specialties
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs pt-2">
          <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">1. Mobile Screen Replacement</div>
          <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">2. Tempered Glass Installation</div>
          <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">3. Used Mobile Sale</div>
          <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">4. Buy Old Phones</div>
          <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">5. All Mobile Accessories</div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DEMO_SERVICES.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      {/* Direct Contact Bar */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-lg text-center space-y-4 max-w-2xl mx-auto">
        <h3 className="text-xl font-bold text-slate-900">Need Immediate Assistance?</h3>
        <p className="text-xs text-slate-500">
          Bring your smartphone directly to our store near New Bus Stand, Mangalagiri for quick diagnosis.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-5 py-3 rounded-xl shadow"
          >
            Chat on WhatsApp
          </a>
          <a
            href={`tel:${STORE_PHONE}`}
            className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-5 py-3 rounded-xl shadow flex items-center gap-1.5"
          >
            <PhoneCall className="w-4 h-4 text-blue-400" />
            <span>Call +91 {STORE_PHONE}</span>
          </a>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs px-5 py-3 rounded-xl border border-slate-300 flex items-center gap-1.5"
          >
            <MapPin className="w-4 h-4 text-indigo-600" />
            <span>Get Directions</span>
          </a>
        </div>
      </div>

    </div>
  );
}
