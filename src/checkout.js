const { getSubtotal } = require('./cart');

/**
 * Calculates the totals shown to the customer at checkout.
 * @param {{ name: string, price: number, quantity: number }[]} items
 */
function calculateTotal(items) {
  const subtotal = getSubtotal(items);
  return { subtotal, total: subtotal };
}

module.exports = { calculateTotal };
