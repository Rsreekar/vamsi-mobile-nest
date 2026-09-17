import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Privacy Policy</h1>
          <p className="text-xs text-slate-500">VAMSI MOBILE NEST • Mangalagiri</p>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 p-8 space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed shadow-sm">
        <p>
          At <strong>VAMSI MOBILE NEST</strong>, we respect your privacy. This policy outlines how we handle customer information gathered through our website, phone calls, or WhatsApp interactions.
        </p>

        <h3 className="text-sm font-bold text-slate-900 pt-2">1. Information We Collect</h3>
        <p>
          We only collect contact details (such as your name, phone number, and WhatsApp number) that you voluntarily submit through our old phone valuation forms, service enquiry forms, or direct messages.
        </p>

        <h3 className="text-sm font-bold text-slate-900 pt-2">2. Use of Information</h3>
        <p>
          Your information is strictly used to process phone evaluation requests, answer smartphone availability queries, and provide repair estimates. We never sell or share customer data with third parties.
        </p>

        <h3 className="text-sm font-bold text-slate-900 pt-2">3. Data Security</h3>
        <p>
          We take appropriate physical and electronic safeguards to ensure all trade-in requests and store communications remain secure.
        </p>

        <h3 className="text-sm font-bold text-slate-900 pt-2">4. Contact Us</h3>
        <p>
          For any privacy questions, please contact VAMSI MOBILE NEST at 1-563, Hospitals Road, Near New Bus Stand, Mangalagiri – 522503, Andhra Pradesh or call +91 9948800022.
        </p>
      </div>
    </div>
  );
}
