const BooksService = require("./books.service");

describe("Test for BooksServices", () => {
  let service;

  beforeEach(() => {
    service = new BooksService();
  });

  describe("Test for getBooks", () => {
    test("Should return a list book", async () => {
      // Arrange
      // Act
      const books = await service.getBooks();
      console.log(books);
      // Assert
      expect(books.length).toEqual();
    });
  });
});
