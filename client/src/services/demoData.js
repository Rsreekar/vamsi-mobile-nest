export const DEMO_BRANDS = [
  { id: 'apple', name: 'Apple', logoText: ' Apple' },
  { id: 'samsung', name: 'Samsung', logoText: 'SAMSUNG' },
  { id: 'oneplus', name: 'OnePlus', logoText: 'ONEPLUS' },
  { id: 'xiaomi', name: 'Xiaomi', logoText: 'Xiaomi' },
  { id: 'redmi', name: 'Redmi', logoText: 'Redmi' },
  { id: 'realme', name: 'Realme', logoText: 'realme' },
  { id: 'vivo', name: 'Vivo', logoText: 'vivo' },
  { id: 'oppo', name: 'OPPO', logoText: 'oppo' },
  { id: 'motorola', name: 'Motorola', logoText: 'motorola' },
  { id: 'nothing', name: 'Nothing', logoText: 'NOTHING' },
  { id: 'pixel', name: 'Google Pixel', logoText: 'Google Pixel' },
];

export const DEMO_ACCESSORY_SUBCATEGORIES = [
  'Tempered Glass',
  'Earphones',
  'Chargers & Cables',
  'Mobile Cases & Covers',
  'Power Banks',
  'Smartwatches & Audio'
];

export const DEMO_PRODUCTS = [
  // --- TEMPERED GLASS (Real Store Pricing) ---
  {
    id: 101,
    name: 'Normal Tempered Glass',
    brand: 'Accessories',
    category: 'accessories',
    subcategory: 'Tempered Glass',
    price: 99,
    mrp: 199,
    variant: 'All Phone Models',
    condition: 'New',
    stock: true,
    warranty: 'Free In-Store Installation',
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&auto=format&fit=crop&q=80',
    featured: true,
    description: 'Premium 9H hardness clear tempered glass screen guard for all smartphone models. Applied free at Mangalagiri store.'
  },
  {
    id: 102,
    name: 'Matte Anti-Glare Tempered Glass',
    brand: 'Accessories',
    category: 'accessories',
    subcategory: 'Tempered Glass',
    price: 149,
    mrp: 299,
    variant: 'All Phone Models',
    condition: 'New',
    stock: true,
    warranty: 'Free In-Store Installation',
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&auto=format&fit=crop&q=80',
    featured: true,
    description: 'Smooth matte anti-fingerprint screen guard. Perfect for outdoor sun visibility & gaming.'
  },
  {
    id: 103,
    name: 'UV Curved Tempered Glass',
    brand: 'Accessories',
    category: 'accessories',
    subcategory: 'Tempered Glass',
    price: 249,
    mrp: 499,
    variant: 'Curved Display Models',
    condition: 'New',
    stock: true,
    warranty: 'Free In-Store Installation',
    image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&auto=format&fit=crop&q=80',
    featured: true,
    description: 'Liquid UV glue adhesive curved glass for Samsung Galaxy Edge, OnePlus & Vivo curved displays.'
  },
  {
    id: 104,
    name: 'Privacy Tempered Glass',
    brand: 'Accessories',
    category: 'accessories',
    subcategory: 'Tempered Glass',
    price: 249,
    mrp: 499,
    variant: 'All Phone Models',
    condition: 'New',
    stock: true,
    warranty: 'Free In-Store Installation',
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&auto=format&fit=crop&q=80',
    featured: false,
    description: '2-way anti-peeping privacy screen protector keeps your screen hidden from side angles.'
  },
  {
    id: 105,
    name: '8K Full Curved Glass',
    brand: 'Accessories',
    category: 'accessories',
    subcategory: 'Tempered Glass',
    price: 399,
    mrp: 699,
    variant: 'Premium Edge Models',
    condition: 'New',
    stock: true,
    warranty: 'Free In-Store Installation',
    image: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=600&auto=format&fit=crop&q=80',
    featured: true,
    description: 'Ultra-clear 8K HD edge-to-edge full curved tempered glass with maximum impact protection.'
  },

  // --- EARPHONES & AUDIO ---
  {
    id: 201,
    name: 'Basic Stereo Earphones',
    brand: 'Accessories',
    category: 'accessories',
    subcategory: 'Earphones',
    price: 69,
    mrp: 149,
    variant: '3.5mm Jack',
    condition: 'New',
    stock: true,
    warranty: 'Store Guarantee',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80',
    featured: false,
    description: 'Clear sound 3.5mm audio jack wired earphones with built-in inline microphone.'
  },
  {
    id: 202,
    name: 'Inka Stereo Earphones',
    brand: 'Inka',
    category: 'accessories',
    subcategory: 'Earphones',
    price: 99,
    mrp: 199,
    variant: '3.5mm Jack',
    condition: 'New',
    stock: true,
    warranty: 'Store Guarantee',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&auto=format&fit=crop&q=80',
    featured: true,
    description: 'Durable cable stereo earphones with deep bass and hands-free call microphone.'
  },
  {
    id: 203,
    name: 'Samsung Stereo 3.5mm Earphones',
    brand: 'Samsung',
    category: 'accessories',
    subcategory: 'Earphones',
    price: 399,
    mrp: 799,
    variant: '3.5mm Jack',
    condition: 'New',
    stock: true,
    warranty: '6 Months Warranty',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop&q=80',
    featured: true,
    description: 'Original Samsung tuned stereo earphones with hands-free inline mic.'
  },
  {
    id: 204,
    name: 'boAt Bassheads Wired Earphones',
    brand: 'boAt',
    category: 'accessories',
    subcategory: 'Earphones',
    price: 499,
    mrp: 990,
    variant: '3.5mm Jack',
    condition: 'New',
    stock: true,
    warranty: '1 Year Brand Warranty',
    image: 'https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=600&auto=format&fit=crop&q=80',
    featured: true,
    description: 'Super extra bass 10mm dynamic drivers, tangle-free cable & mic.'
  },
  {
    id: 205,
    name: 'Redmi Dual Driver Earphones',
    brand: 'Redmi',
    category: 'accessories',
    subcategory: 'Earphones',
    price: 499,
    mrp: 999,
    variant: '3.5mm Jack',
    condition: 'New',
    stock: true,
    warranty: '6 Months Brand Warranty',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&auto=format&fit=crop&q=80',
    featured: false,
    description: 'Hi-Res audio certified dual dynamic drivers with magnetic earbud tips.'
  },
  {
    id: 206,
    name: 'boAt Type-C Wired Earphones',
    brand: 'boAt',
    category: 'accessories',
    subcategory: 'Earphones',
    price: 599,
    mrp: 1290,
    variant: 'Type-C Connector',
    condition: 'New',
    stock: true,
    warranty: '1 Year Brand Warranty',
    image: 'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=600&auto=format&fit=crop&q=80',
    featured: true,
    description: 'Direct Type-C digital audio earphones for modern Android devices without 3.5mm jack.'
  },
  {
    id: 207,
    name: 'Apple Lightning Earphones (EarPods)',
    brand: 'Apple',
    category: 'accessories',
    subcategory: 'Earphones',
    price: 1899,
    mrp: 2000,
    variant: 'Lightning Connector',
    condition: 'New',
    stock: true,
    warranty: '1 Year Apple Warranty',
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=600&auto=format&fit=crop&q=80',
    featured: true,
    description: 'Original Apple Lightning connector Earpods with built-in remote for iPhone.'
  },
  {
    id: 208,
    name: 'Apple Type-C Earphones (EarPods)',
    brand: 'Apple',
    category: 'accessories',
    subcategory: 'Earphones',
    price: 1999,
    mrp: 2000,
    variant: 'Type-C Connector',
    condition: 'New',
    stock: true,
    warranty: '1 Year Apple Warranty',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop&q=80',
    featured: true,
    description: 'Original Apple Type-C Earpods compatible with iPhone 15/16 series & iPad.'
  },

  // --- CHARGERS & ACCESSORIES ---
  {
    id: 301,
    name: '65W Fast GaN Dual Charger & Cable',
    brand: 'Accessories',
    category: 'accessories',
    subcategory: 'Chargers & Cables',
    price: 999,
    mrp: 1999,
    variant: 'Type-C Fast Charge',
    condition: 'New',
    stock: true,
    warranty: '6 Months Replacement Warranty',
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600&auto=format&fit=crop&q=80',
    featured: false,
    description: 'Ultra-fast GaN charger for iPhone, Samsung, OnePlus, Xiaomi. Thermal protection & overload safety.'
  }
];

export const DEMO_SERVICES = [
  {
    id: 'screen-replacement',
    name: 'Mobile Screen Replacement',
    icon: 'Smartphone',
    description: 'High quality original & OEM screen replacements for Apple, Samsung, OnePlus, Vivo, Oppo, Realme, Xiaomi with quick turnaround.',
    highlight: 'Includes free tempered glass installation!'
  },
  {
    id: 'tempered-glass',
    name: 'Tempered Glass Installation',
    icon: 'ShieldCheck',
    description: 'Precision bubble-free installation of 9H tempered glass, UV curved glass, and matte privacy screen protectors starting at ₹99/-.',
    highlight: 'Done in under 5 minutes.'
  },
  {
    id: 'buy-old-phone',
    name: 'Sell Your Old Phone (Instant Cash)',
    icon: 'Banknote',
    description: 'Instant evaluation & top price offer for your old working or broken smartphone. Quick cash payout at Mangalagiri store.',
    highlight: 'Immediate valuation at store.'
  },
  {
    id: 'all-accessories',
    name: 'All Mobile Accessories',
    icon: 'ShoppingBag',
    description: 'Huge inventory of back covers, fast chargers, braided cables, power banks, and earphones starting at ₹69/-.',
    highlight: 'All major brands in stock.'
  },
  {
    id: 'battery-repair',
    name: 'Battery Replacement',
    icon: 'Zap',
    description: 'Genuine high-capacity battery replacements for fast draining or swollen smartphone batteries.',
    highlight: 'Restores original battery life.'
  },
  {
    id: 'charging-port',
    name: 'Charging Port Repairs',
    icon: 'Usb',
    description: 'Fix loose charging pins, slow charging issues, and damaged Type-C / Lightning ports.',
    highlight: 'Clean and durable repair.'
  }
];
