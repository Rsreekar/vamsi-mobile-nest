import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MessageSquare, PhoneCall, MapPin, ShieldCheck, 
  CheckCircle, ArrowLeft, BatteryCharging, Smartphone, RefreshCw 
} from 'lucide-react';
import { DEMO_PRODUCTS } from '../services/demoData';
import { formatINR, calculateDiscount } from '../utils/formatters';
import { STORE_PHONE, MAPS_URL, getProductWhatsAppLink } from '../utils/whatsapp';
import ProductCard from '../components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = useMemo(() => {
    return DEMO_PRODUCTS.find(p => p.id === parseInt(id, 10)) || DEMO_PRODUCTS[0];
  }, [id]);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="text-2xl font-bold">Product Not Found</h2>
        <Link to="/phones" className="inline-block bg-blue-600 text-white font-bold px-4 py-2 rounded-xl text-sm">
          Return to Shop
        </Link>
      </div>
    );
  }

  const {
    name,
    brand,
    price,
    mrp,
    variant,
    ram,
    storage,
    color,
    condition,
    batteryHealth,
    stock,
    warranty,
    image,
    description,
    category
  } = product;

  const whatsappLink = getProductWhatsAppLink(name, variant, price);
  const discountText = calculateDiscount(price, mrp);

  const relatedProducts = DEMO_PRODUCTS.filter(p => p.id !== product.id && (p.brand === brand || p.category === category)).slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Back Link */}
      <div>
        <Link to="/phones" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-blue-600 transition">
          <ArrowLeft className="w-4 h-4" /> Back to Catalogue
        </Link>
      </div>

      {/* Main Product Layout */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left: Product Image */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center bg-slate-50 rounded-2xl p-6 relative border border-slate-100">
          <img
            src={image}
            alt={name}
            className="max-h-96 object-contain rounded-lg"
          />

          <div className="absolute top-4 left-4 flex gap-2">
            <span className="text-xs font-bold bg-slate-900 text-white px-3 py-1 rounded-full uppercase">
              {brand}
            </span>
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${
              condition === 'New' ? 'bg-blue-600 text-white' : 'bg-amber-500 text-white'
            }`}>
              {condition}
            </span>
          </div>

          {discountText && (
            <span className="absolute top-4 right-4 text-xs font-extrabold bg-rose-600 text-white px-3 py-1 rounded-full">
              {discountText}
            </span>
          )}
        </div>

        {/* Right: Info & Actions */}
        <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
          
          <div className="space-y-4">
            
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{brand} Smartphone</span>
              <span className={`text-xs font-bold flex items-center gap-1 ${stock ? 'text-emerald-600' : 'text-slate-400'}`}>
                <CheckCircle className="w-4 h-4" /> {stock ? 'Available in Store' : 'Out of Stock'}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              {name}
            </h1>

            {variant && (
              <p className="text-sm font-semibold text-slate-500">{variant}</p>
            )}

            {/* Price Badge */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-baseline gap-3">
              <span className="text-3xl font-black text-slate-900">{formatINR(price)}</span>
              {mrp && mrp > price && (
                <span className="text-sm text-slate-400 line-through">{formatINR(mrp)}</span>
              )}
              {discountText && (
                <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-lg">
                  Save {discountText}
                </span>
              )}
            </div>

            {/* Specs Highlight Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs pt-2">
              {ram && (
                <div className="bg-slate-100 p-3 rounded-xl border border-slate-200">
                  <span className="text-slate-400 block text-[10px] font-bold uppercase">RAM</span>
                  <span className="font-extrabold text-slate-800">{ram}</span>
                </div>
              )}
              {storage && (
                <div className="bg-slate-100 p-3 rounded-xl border border-slate-200">
                  <span className="text-slate-400 block text-[10px] font-bold uppercase">Storage</span>
                  <span className="font-extrabold text-slate-800">{storage}</span>
                </div>
              )}
              {color && (
                <div className="bg-slate-100 p-3 rounded-xl border border-slate-200">
                  <span className="text-slate-400 block text-[10px] font-bold uppercase">Color</span>
                  <span className="font-extrabold text-slate-800">{color}</span>
                </div>
              )}
              {warranty && (
                <div className="bg-slate-100 p-3 rounded-xl border border-slate-200 col-span-2 sm:col-span-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-[10px] font-bold uppercase">Warranty</span>
                    <span className="font-bold text-slate-800">{warranty}</span>
                  </div>
                </div>
              )}
              {batteryHealth && (
                <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-200 col-span-2 sm:col-span-3 flex items-center gap-2 text-emerald-900">
                  <BatteryCharging className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-bold">Battery Health: {batteryHealth}</span>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>{description}</p>
            </div>

          </div>

          {/* Primary Action Buttons */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm rounded-xl shadow-lg shadow-emerald-900/20 transition"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Enquire Availability & Price on WhatsApp</span>
            </a>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${STORE_PHONE}`}
                className="flex items-center justify-center gap-2 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition"
              >
                <PhoneCall className="w-4 h-4 text-blue-400" />
                <span>Call Store (9948800022)</span>
              </a>

              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl border border-slate-300 transition"
              >
                <MapPin className="w-4 h-4 text-indigo-600" />
                <span>Get Store Directions</span>
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="space-y-6 pt-6">
          <h3 className="text-xl font-extrabold text-slate-900">
            Similar Smartphones & Accessories
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
