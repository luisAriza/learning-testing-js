const Person = require('./06-person');

describe('Test for Person', () => {
  let person;

  // Arrange
  beforeEach(() => {
    person = new Person('Luis', 0, 1.76);
  });
  test('Should return nothing', () => {
    person.weight = -45;
    const imc = person.calcIMC();
    expect(imc).toBe('no found');
  });
  test('Should return down', () => {
    // Arrange
    person.weight = 45;
    // Act
    const imc = person.calcIMC();
    // Assert
    expect(imc).toBe('down');
  });
  test('Should return normal', () => {
    person.weight = 65;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});
