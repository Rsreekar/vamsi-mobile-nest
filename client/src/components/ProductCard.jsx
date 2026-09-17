import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Eye, ShieldCheck, BatteryCharging, CheckCircle, XCircle } from 'lucide-react';
import { formatINR, calculateDiscount } from '../utils/formatters';
import { getProductWhatsAppLink } from '../utils/whatsapp';

export default function ProductCard({ product }) {
  const {
    id,
    name,
    brand,
    price,
    mrp,
    variant,
    ram,
    storage,
    condition,
    batteryHealth,
    stock,
    image,
    category
  } = product;

  const whatsappMsg = getProductWhatsAppLink(name, variant, price);
  const discountLabel = calculateDiscount(price, mrp);

  return (
    <div className="group bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
      
      {/* Top Image Container */}
      <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden flex items-center justify-center p-4">
        <img
          src={image || 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=80'}
          alt={name}
          className="max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-900/90 text-white px-2.5 py-1 rounded-full shadow-sm backdrop-blur-sm">
            {brand}
          </span>
          
          {condition && (
            <span className={`text-[10px] font-bold px-2 py-1 rounded-full shadow-sm ${
              condition === 'New' 
                ? 'bg-blue-600 text-white' 
                : 'bg-amber-500 text-white'
            }`}>
              {condition}
            </span>
          )}
        </div>

        {/* Top Right Discount Pill */}
        {discountLabel && (
          <div className="absolute top-3 right-3 bg-rose-600 text-white text-[11px] font-extrabold px-2.5 py-1 rounded-full shadow">
            {discountLabel}
          </div>
        )}

        {/* Battery Health Pill for Used Devices */}
        {batteryHealth && (
          <div className="absolute bottom-3 left-3 bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 backdrop-blur-md text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
            <BatteryCharging className="w-3 h-3 text-emerald-400" />
            <span>Battery: {batteryHealth}</span>
          </div>
        )}
      </div>

      {/* Product Content Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Stock indicator */}
          <div className="flex items-center justify-between text-xs mb-1">
            {variant && (
              <span className="text-slate-500 font-medium text-xs">{variant}</span>
            )}
            <span className={`flex items-center gap-1 font-semibold text-[11px] ${
              stock ? 'text-emerald-600' : 'text-slate-400'
            }`}>
              {stock ? (
                <>
                  <CheckCircle className="w-3 h-3" /> In Stock
                </>
              ) : (
                <>
                  <XCircle className="w-3 h-3" /> Out of Stock
                </>
              )}
            </span>
          </div>

          {/* Product Title */}
          <Link to={`/products/${id}`}>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition line-clamp-1">
              {name}
            </h3>
          </Link>

          {/* RAM & Storage tags if present */}
          {(ram || storage) && (
            <div className="flex items-center gap-2 mt-1 text-xs text-slate-500">
              {ram && <span className="bg-slate-100 px-2 py-0.5 rounded text-[11px] font-medium">{ram} RAM</span>}
              {storage && <span className="bg-slate-100 px-2 py-0.5 rounded text-[11px] font-medium">{storage} Storage</span>}
            </div>
          )}
        </div>

        {/* Price Section */}
        <div className="pt-2 border-t border-slate-100">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-extrabold text-slate-900">
              {formatINR(price)}
            </span>
            {mrp && mrp > price && (
              <span className="text-xs text-slate-400 line-through">
                {formatINR(mrp)}
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <Link
            to={`/products/${id}`}
            className="flex items-center justify-center gap-1.5 py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition"
          >
            <Eye className="w-3.5 h-3.5 text-slate-600" />
            <span>Details</span>
          </Link>

          <a
            href={whatsappMsg}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2 px-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl shadow-sm transition"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

    </div>
  );
}
