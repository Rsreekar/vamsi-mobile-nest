import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Clock, Instagram, Send, CheckCircle } from 'lucide-react';
import { STORE_PHONE, WHATSAPP_NUMBER, MAPS_URL, INSTAGRAM_URL, getWhatsAppLink } from '../utils/whatsapp';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', queryType: 'General Enquiry', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full uppercase">
          Get In Touch
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Contact VAMSI MOBILE NEST
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Visit our Mangalagiri mobile store, reach out via WhatsApp, or call us directly. We are always ready to assist you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Contact Info */}
        <div className="lg:col-span-5 bg-slate-900 text-white p-8 rounded-3xl space-y-6 shadow-xl">
          <div>
            <h2 className="text-2xl font-bold">VAMSI MOBILE NEST</h2>
            <p className="text-xs text-blue-400">Mangalagiri, Andhra Pradesh</p>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-300">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white">Address:</strong>
                <span>1-563, Hospitals Road, Near New Bus Stand, Mangalagiri – 522503, Andhra Pradesh, India</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <strong className="block text-white">Phone Call:</strong>
                <a href={`tel:${STORE_PHONE}`} className="hover:text-blue-300 transition">+91 {STORE_PHONE}</a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MessageSquare className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <strong className="block text-white">WhatsApp:</strong>
                <a href={getWhatsAppLink()} target="_blank" rel="noreferrer" className="hover:text-emerald-300 transition">+91 {WHATSAPP_NUMBER}</a>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-2 border-t border-slate-800">
              <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white">Working Hours:</strong>
                <span>Mon–Sat: 10:00 AM – 10:00 PM</span><br />
                <span>Sun: 11:00 AM – 1:00 PM</span>
              </div>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-slate-800">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow transition"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us Now</span>
            </a>

            <a
              href={`tel:${STORE_PHONE}`}
              className="flex items-center justify-center gap-2 w-full py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-xl border border-slate-700 transition"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              <span>Call Store (+91 {STORE_PHONE})</span>
            </a>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xs rounded-xl shadow transition"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow on Instagram</span>
            </a>
          </div>
        </div>

        {/* Right: Interactive Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-8 shadow-xl">
          {sent ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full mx-auto flex items-center justify-center">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">Message Sent!</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Thank you {form.name}. We will get back to you shortly. For immediate help, feel free to WhatsApp us.
              </p>
              <button onClick={() => setSent(false)} className="bg-slate-900 text-white text-xs font-bold px-5 py-2.5 rounded-xl">
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 pb-2 border-b border-slate-100">Send an Enquiry</h3>
              
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Enter name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs font-medium focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="10-digit mobile number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs font-medium focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Category *</label>
                <select
                  value={form.queryType}
                  onChange={(e) => setForm({ ...form, queryType: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs font-medium text-slate-900"
                >
                  <option value="General Enquiry">General Smartphone Query</option>
                  <option value="Screen Replacement">Mobile Screen Replacement</option>
                  <option value="Mobile Repair">Hardware / Battery Repair</option>
                  <option value="Used Phone">Used Phone Inquiry</option>
                  <option value="Sell Old Phone">Sell Old Phone Valuation</option>
                  <option value="Accessories">Accessories Stock Check</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Message / Query *</label>
                <textarea
                  rows="4"
                  required
                  placeholder="Type your message here..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs font-medium focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Message</span>
              </button>
            </form>
          )}
        </div>

      </div>

      {/* Google Maps Embed */}
      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-lg p-2">
        <iframe
          title="Vamsi Mobile Nest Mangalagiri Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15309.21481977755!2d80.5471!3d16.4419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f013d2c8034b%3A0x867eb3eb795fdf3!2sMangalagiri%2C%20Andhra%20Pradesh%20522503!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          className="w-full h-80 border-0 rounded-2xl"
          allowFullScreen=""
          loading="lazy"
        />
      </div>

    </div>
  );
}
