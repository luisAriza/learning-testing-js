const { sum, multiply, divide } = require('./02-math');

describe('Test fot math', () => {
  describe('Test for sum', () => {
    test('adds 3 + 4 should be 7', () => {
      const rta = sum(3, 4);
      expect(rta).toBe(7);
    });
  });
  describe('Test for multiply', () => {
    test('Should be 12', () => {
      const rta = multiply(3, 4);
      expect(rta).toBe(12);
    });
  });
  describe('Test for divide', () => {
    test('Should divide', () => {
      const rta = divide(12, 4);
      expect(rta).toBe(3);
      const rta2 = divide(12, 3);
      expect(rta2).toBe(4);
    });
    test('Should divide for zero', () => {
      const rta = divide(12, 0);
      expect(rta).toBeNull();
    });
  });
});
