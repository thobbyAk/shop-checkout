/**
 * Returns the cart subtotal in pounds.
 * @param {{ name: string, price: number, quantity: number }[]} items
 */
function getSubtotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

module.exports = { getSubtotal };
