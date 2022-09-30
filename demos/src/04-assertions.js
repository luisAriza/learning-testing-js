// Matchers

test('Test obj', () => {
  const data = {
    name: 'Luis',
  };
  data.lastname = 'Ariza';
  expect(data).toEqual({
    name: 'Luis',
    lastname: 'Ariza',
  });
});

test('Null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('Booleans', () => {
  expect(true).toEqual(true);
  expect(false).toBeDefined(false);
  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

test('String', () => {
  expect('Jose').toMatch(/os/);
});

test('Arrays', () => {
  const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  expect(list).toContain(3);
});
