import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, SlidersHorizontal, X, Smartphone, RefreshCw } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { DEMO_PRODUCTS, DEMO_BRANDS } from '../services/demoData';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Query states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState(searchParams.get('brand') || 'All');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [selectedCondition, setSelectedCondition] = useState('All');
  const [selectedStorage, setSelectedStorage] = useState('All');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  useEffect(() => {
    const brandFromUrl = searchParams.get('brand');
    const categoryFromUrl = searchParams.get('category');
    if (brandFromUrl) setSelectedBrand(brandFromUrl);
    if (categoryFromUrl) setSelectedCategory(categoryFromUrl);
  }, [searchParams]);

  // Filtering logic
  const filteredProducts = useMemo(() => {
    return DEMO_PRODUCTS.filter((product) => {
      // Search
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesBrand = product.brand.toLowerCase().includes(query);
        const matchesVariant = (product.variant || '').toLowerCase().includes(query);
        if (!matchesName && !matchesBrand && !matchesVariant) return false;
      }

      // Brand Filter
      if (selectedBrand !== 'All' && product.brand.toLowerCase() !== selectedBrand.toLowerCase()) {
        return false;
      }

      // Category Filter
      if (selectedCategory !== 'All' && product.category !== selectedCategory) {
        return false;
      }

      // Condition Filter
      if (selectedCondition !== 'All') {
        if (selectedCondition === 'New' && product.condition !== 'New') return false;
        if (selectedCondition === 'Used' && product.condition === 'New') return false;
      }

      // Storage Filter
      if (selectedStorage !== 'All' && product.storage !== selectedStorage) {
        return false;
      }

      // Stock
      if (inStockOnly && !product.stock) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0; // default featured
    });
  }, [searchQuery, selectedBrand, selectedCategory, selectedCondition, selectedStorage, inStockOnly, sortBy]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedBrand('All');
    setSelectedCategory('All');
    setSelectedCondition('All');
    setSelectedStorage('All');
    setInStockOnly(false);
    setSortBy('featured');
    setSearchParams({});
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Smartphone & Accessory Catalogue
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Browse new phones, quality pre-owned smartphones, and genuine accessories available at VAMSI MOBILE NEST.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search phones, brands, accessories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Desktop Sidebar Filters */}
        <aside className="hidden lg:block lg:col-span-3 space-y-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm h-fit">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="font-bold text-slate-900 flex items-center gap-2 text-sm">
              <SlidersHorizontal className="w-4 h-4 text-blue-600" />
              <span>Filter Products</span>
            </h3>
            <button
              onClick={resetFilters}
              className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1"
            >
              <RefreshCw className="w-3 h-3" /> Reset
            </button>
          </div>

          {/* Category Filter */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs font-medium text-slate-800"
            >
              <option value="All">All Categories</option>
              <option value="new-phones">New Smartphones</option>
              <option value="used-phones">Used Phones</option>
              <option value="accessories">Accessories</option>
            </select>
          </div>

          {/* Brand Filter */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Brand</label>
            <div className="space-y-1 max-h-48 overflow-y-auto pr-1">
              <button
                onClick={() => setSelectedBrand('All')}
                className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                  selectedBrand === 'All' ? 'bg-blue-600 text-white font-bold' : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                All Brands
              </button>
              {DEMO_BRANDS.map((b) => (
                <button
                  key={b.id}
                  onClick={() => setSelectedBrand(b.name)}
                  className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                    selectedBrand.toLowerCase() === b.name.toLowerCase()
                      ? 'bg-blue-600 text-white font-bold'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {b.name}
                </button>
              ))}
            </div>
          </div>

          {/* Condition Filter */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Condition</label>
            <select
              value={selectedCondition}
              onChange={(e) => setSelectedCondition(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs font-medium text-slate-800"
            >
              <option value="All">All Conditions</option>
              <option value="New">Brand New</option>
              <option value="Used">Pre-Owned / Used</option>
            </select>
          </div>

          {/* Storage Filter */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Storage</label>
            <select
              value={selectedStorage}
              onChange={(e) => setSelectedStorage(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs font-medium text-slate-800"
            >
              <option value="All">Any Storage</option>
              <option value="128GB">128GB</option>
              <option value="256GB">256GB</option>
              <option value="512GB">512GB</option>
            </select>
          </div>

          {/* Stock Toggle */}
          <div className="pt-2">
            <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-700">
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
                className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
              />
              <span>In-Stock Items Only</span>
            </label>
          </div>
        </aside>

        {/* Product Grid Area */}
        <main className="lg:col-span-9 space-y-4">
          
          {/* Top Sort & Mobile Filter Toggle */}
          <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-xs">
            <div className="text-slate-600 font-medium">
              Showing <strong className="text-slate-900 font-bold">{filteredProducts.length}</strong> products
            </div>

            <div className="flex items-center gap-3">
              {/* Mobile Filter Button */}
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="lg:hidden flex items-center gap-1.5 bg-slate-100 text-slate-800 font-bold px-3 py-1.5 rounded-lg border border-slate-300"
              >
                <Filter className="w-3.5 h-3.5 text-blue-600" /> Filter
              </button>

              {/* Sort By Dropdown */}
              <div className="flex items-center gap-2">
                <span className="hidden sm:inline text-slate-500 font-medium">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-800"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          {/* Grid Display */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-800">No products match your filters</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Try searching for another phone model or clearing your selected filters to view available inventory.
              </p>
              <button
                onClick={resetFilters}
                className="inline-block bg-blue-600 text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow"
              >
                Reset All Filters
              </button>
            </div>
          )}

        </main>
      </div>

    </div>
  );
}
