import React, { useState } from 'react';
import { DEMO_PRODUCTS, DEMO_ACCESSORY_SUBCATEGORIES } from '../services/demoData';
import ProductCard from '../components/ProductCard';
import { ShoppingBag, Search, Sparkles, SlidersHorizontal } from 'lucide-react';

export default function Accessories() {
  const [selectedSubcategory, setSelectedSubcategory] = useState('All');
  const [search, setSearch] = useState('');

  const accessories = DEMO_PRODUCTS.filter(p => p.category === 'accessories');

  const filteredAccessories = accessories.filter(item => {
    if (selectedSubcategory !== 'All' && item.subcategory !== selectedSubcategory) {
      return false;
    }
    if (search.trim() !== '') {
      return item.name.toLowerCase().includes(search.toLowerCase());
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 pb-28 lg:pb-12">
      
      {/* Mobile Title Banner */}
      <div className="bg-gradient-to-r from-purple-900 via-indigo-950 to-slate-950 text-white rounded-3xl p-6 sm:p-8 space-y-3 relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-3xl rounded-full pointer-events-none" />
        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-purple-300 bg-purple-500/20 border border-purple-500/30 px-3 py-1 rounded-full uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-purple-300" /> Original Store Inventory
        </span>
        <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
          Mobile Accessories
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
          Tempered glass, earphones, cases, chargers & cables available with transparent pricing at VAMSI MOBILE NEST.
        </p>
      </div>

      {/* Mobile Search & Filter Bar */}
      <div className="space-y-3">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search accessories (e.g. Tempered Glass, Boat Earphones)..."
            className="w-full bg-white text-slate-900 placeholder-slate-400 text-xs font-semibold pl-10 pr-4 py-3 rounded-2xl border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        {/* Mobile Horizontal Swipeable Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 px-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:justify-center">
          <button
            onClick={() => setSelectedSubcategory('All')}
            className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold whitespace-nowrap transition-all shadow-sm active:scale-95 shrink-0 ${
              selectedSubcategory === 'All'
                ? 'bg-purple-600 text-white shadow-purple-900/30'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All Items
          </button>
          {DEMO_ACCESSORY_SUBCATEGORIES.map((sub) => (
            <button
              key={sub}
              onClick={() => setSelectedSubcategory(sub)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold whitespace-nowrap transition-all shadow-sm active:scale-95 shrink-0 ${
                selectedSubcategory === sub
                  ? 'bg-purple-600 text-white shadow-purple-900/30'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {sub}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      {filteredAccessories.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredAccessories.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-slate-200 p-10 text-center space-y-3">
          <ShoppingBag className="w-10 h-10 text-purple-500 mx-auto" />
          <h3 className="text-base font-extrabold text-slate-800">No accessories found matching your search</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            We carry all mobile accessories at our Mangalagiri store. Contact us on WhatsApp for live stock updates.
          </p>
        </div>
      )}

    </div>
  );
}
