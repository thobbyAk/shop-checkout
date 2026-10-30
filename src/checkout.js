const { getSubtotal } = require('./cart');
const { getDiscount } = require('./discounts');

/**
 * Calculates the totals shown to the customer at checkout.
 * @param {{ name: string, price: number, quantity: number }[]} items
 * @param {string} [discountCode]
 */
function calculateTotal(items, discountCode) {
  const subtotal = getSubtotal(items);
  const discount = discountCode ? getDiscount(discountCode, subtotal) : 0;
  return { subtotal, discount, total: subtotal - discount };
}

module.exports = { calculateTotal };
