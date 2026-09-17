/**
 * Format Indian Currency (₹ 45,999)
 */
export const formatINR = (amount) => {
  if (amount === undefined || amount === null || isNaN(amount)) return '₹ --';
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

/**
 * Calculate discount percentage
 */
export const calculateDiscount = (price, mrp) => {
  if (!price || !mrp || mrp <= price) return null;
  const discount = Math.round(((mrp - price) / mrp) * 100);
  return `${discount}% OFF`;
};
