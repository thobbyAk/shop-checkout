// Discount codes customers can enter at checkout.
// 'percent': value is the percentage taken off the subtotal.
// 'fixed': value is the amount in pounds taken off the subtotal.
const DISCOUNT_CODES = {
  SAVE10: { type: 'percent', value: 10, expiresAt: '2026-12-31' },
  FLAT20: { type: 'fixed', value: 20, expiresAt: '2026-12-31' },
  SUMMER15: { type: 'percent', value: 15, expiresAt: '2026-08-31' },
};

/**
 * Returns the discount amount in pounds for a code.
 * @param {string} code
 * @param {number} subtotal
 */
function getDiscount(code, subtotal) {
  const discount = DISCOUNT_CODES[code];
  if (!discount) {
    throw new Error('Invalid discount code');
  }

  if (discount.type === 'percent') {
    return subtotal * (discount.value / 100);
  }
  return discount.value;
}

module.exports = { DISCOUNT_CODES, getDiscount };
