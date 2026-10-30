const { calculateTotal } = require('../src/checkout');

const cart = [
  { name: 'T-shirt', price: 15, quantity: 2 },
  { name: 'Socks', price: 5, quantity: 1 },
];

test('totals the cart', () => {
  expect(calculateTotal(cart).total).toBe(35);
});

test('an empty cart totals zero', () => {
  expect(calculateTotal([]).total).toBe(0);
});
