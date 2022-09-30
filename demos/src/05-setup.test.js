describe('Group 1', () => {
  beforeAll(() => {
    console.log('beforeAll');
    // up db
  });
  afterAll(() => {
    console.log('afterAll');
    // down db
  });
  beforeEach(() => {
    console.log('beforeEach');
  });
  afterEach(() => {
    console.log('afterEach');
  });
  test('Case 1', () => {
    console.log('Case 1');
    expect(1 + 1).toBe(2);
  });
  test('Case 2', () => {
    console.log('Case 2');
    expect(2 + 2).toBe(4);
  });

  describe('Group 2', () => {
    beforeAll(() => {
      console.log('beforeAll');
      // up db
    });
    test('Case 3', () => {
      console.log('Case 3');
      expect(3 + 3).toBe(6);
    });
    test('Case 4', () => {
      console.log('Case 4');
      expect(4 + 4).toBe(8);
    });
  });
});
