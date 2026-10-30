const { calculateTotal } = require('../src/checkout');

const cart = [
  { name: 'T-shirt', price: 15, quantity: 2 },
  { name: 'Socks', price: 5, quantity: 1 },
];

test('applies a percentage discount', () => {
  expect(calculateTotal(cart, 'SAVE10').total).toBe(31.5);
});

test('applies a fixed discount', () => {
  const items = [{ name: 'Hoodie', price: 40, quantity: 1 }];
  expect(calculateTotal(items, 'FLAT20').total).toBe(20);
});

test('rejects an unknown code', () => {
  expect(() => calculateTotal(cart, 'NOTACODE')).toThrow('Invalid discount code');
});
