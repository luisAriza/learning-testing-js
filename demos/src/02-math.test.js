const { sum, multiply, divide } = require('./02-math');

test('adds 3 + 4 should be 7', () => {
  const rta = sum(3, 4);
  expect(rta).toBe(7);
});

test('Should be 12', () => {
  const rta = multiply(3, 4);
  expect(rta).toBe(12);
});

test('Should divide', () => {
  const rta = divide(12, 4);
  expect(rta).toBe(3);
  const rta2 = divide(12, 3);
  expect(rta2).toBe(4);
  const rta3 = divide(12, 0);
  expect(rta3).toBeNull();
});
