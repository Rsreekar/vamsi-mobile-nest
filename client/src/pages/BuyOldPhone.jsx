import React, { useState } from 'react';
import { Banknote, CheckCircle2, MessageSquare, UploadCloud, AlertCircle } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

export default function BuyOldPhone() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    whatsapp: '',
    brand: 'Apple',
    model: '',
    storage: '128GB',
    condition: 'Good Condition',
    purchaseDate: '',
    expectedPrice: '',
    notes: '',
  });

  const [images, setImages] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    if (e.target.files) {
      const fileList = Array.from(e.target.files);
      const filePreviews = fileList.map(file => URL.createObjectURL(file));
      setImages(prev => [...prev, ...filePreviews]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Save lead to backend database endpoint if online
    try {
      await fetch('/api/tradein-requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
    } catch (err) {
      // Graceful fallback
    }
  };

  const formattedWhatsAppMsg = `Hi VAMSI MOBILE NEST, I submitted an old phone valuation request on your website for my ${formData.brand} ${formData.model} (${formData.storage || '128GB'}). Customer Name: ${formData.name}, Phone: ${formData.phone}.`;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-8 pb-28 lg:pb-12">
      
      {/* Title */}
      <div className="text-center space-y-2">
        <span className="inline-block text-xs font-extrabold text-emerald-700 bg-emerald-100/80 border border-emerald-300 px-3.5 py-1 rounded-full uppercase tracking-wider">
          Instant Cash & Trade-In
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Sell Your Old Phone
        </h1>
        <p className="text-xs sm:text-base text-slate-600 max-w-lg mx-auto leading-relaxed">
          Get top cash payout or trade-in discount for your old working or damaged smartphone at VAMSI MOBILE NEST.
        </p>
      </div>

      {submitted ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-6 sm:p-10 text-center space-y-4 shadow-lg animate-in zoom-in-95">
          <div className="w-16 h-16 bg-emerald-600 text-white rounded-full mx-auto flex items-center justify-center shadow-lg">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900">Request Received!</h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
            Thank you <strong className="text-slate-900">{formData.name}</strong>. Our store team will evaluate your <strong>{formData.brand} {formData.model}</strong> and reach out to you shortly.
          </p>
          
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href={getWhatsAppLink(formattedWhatsAppMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm py-3.5 px-6 rounded-xl shadow flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contact Directly on WhatsApp</span>
            </a>

            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: '', phone: '', whatsapp: '', brand: 'Apple',
                  model: '', storage: '128GB', condition: 'Good Condition',
                  purchaseDate: '', expectedPrice: '', notes: ''
                });
                setImages([]);
              }}
              className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs py-3.5 px-5 rounded-xl"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-slate-200 shadow-xl p-5 sm:p-8 space-y-5">
          
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100 text-slate-900">
            <Banknote className="w-5 h-5 text-emerald-600 shrink-0" />
            <h3 className="text-base sm:text-lg font-extrabold">Device & Customer Information</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Customer Name */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 block">Customer Name *</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter full name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            {/* Phone Number */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 block">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="10-digit mobile number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            {/* WhatsApp Number */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 block">WhatsApp Number</label>
              <input
                type="tel"
                name="whatsapp"
                placeholder="WhatsApp contact number"
                value={formData.whatsapp}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            {/* Phone Brand */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 block">Phone Brand *</label>
              <select
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              >
                {['Apple', 'Samsung', 'OnePlus', 'Xiaomi', 'Redmi', 'Realme', 'Vivo', 'OPPO', 'Motorola', 'Nothing', 'Google Pixel', 'Other'].map(b => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            {/* Phone Model */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 block">Phone Model *</label>
              <input
                type="text"
                name="model"
                required
                placeholder="e.g. iPhone 13 / Galaxy S21"
                value={formData.model}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            {/* Storage */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 block">Storage *</label>
              <select
                name="storage"
                value={formData.storage}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-sm font-bold text-slate-900"
              >
                {['64GB', '128GB', '256GB', '512GB', '1TB'].map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Condition */}
            <div className="space-y-1 sm:col-span-2">
              <label className="text-xs font-bold text-slate-700 block">Physical Condition *</label>
              <select
                name="condition"
                value={formData.condition}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-sm font-bold text-slate-900"
              >
                <option value="Excellent Condition">Excellent (Like new, zero scratches)</option>
                <option value="Good Condition">Good (Minor normal usage marks)</option>
                <option value="Scratched">Scratched / Minor body dents</option>
                <option value="Screen Cracked">Screen Cracked / Display issue</option>
              </select>
            </div>

            {/* Expected Price */}
            <div className="space-y-1 sm:col-span-2">
              <label className="text-xs font-bold text-slate-700 block">Expected Price (₹)</label>
              <input
                type="number"
                name="expectedPrice"
                placeholder="e.g. 25000"
                value={formData.expectedPrice}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>

          </div>

          {/* Notes */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 block">Additional Notes / Included Accessories</label>
            <textarea
              name="notes"
              rows="3"
              placeholder="Mention if box, original charger, or bill invoice is available..."
              value={formData.notes}
              onChange={handleChange}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>

          {/* Photos Upload */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 block">Upload Device Photos (Optional)</label>
            <div className="border-2 border-dashed border-slate-300 rounded-2xl p-4 text-center cursor-pointer hover:border-emerald-500 transition relative bg-slate-50/50">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <UploadCloud className="w-7 h-7 text-slate-400 mx-auto mb-1" />
              <span className="text-xs font-bold text-slate-700 block">Tap to upload device photos</span>
              <span className="text-[10px] text-slate-400">Front screen, back cover & edges</span>
            </div>

            {images.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {images.map((img, idx) => (
                  <img key={idx} src={img} alt="Upload preview" className="w-16 h-16 object-cover rounded-xl border border-slate-200" />
                ))}
              </div>
            )}
          </div>

          {/* Disclaimer Alert */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3.5 text-amber-900 text-xs flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>
              <strong>Note:</strong> Online price valuations are preliminary estimates. Final valuation is subject to physical inspection at our Mangalagiri store.
            </span>
          </div>

          {/* Submit CTA */}
          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 active:scale-98 text-white font-black text-sm sm:text-base rounded-2xl shadow-xl shadow-emerald-950/30 transition"
          >
            Submit Request for Valuation
          </button>

        </form>
      )}

    </div>
  );
}
