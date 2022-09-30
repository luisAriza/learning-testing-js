// Matchers
test("Test obj", () => {
  const data = {
    name: "Luis",
  };
  data.lastname = "Ariza";
  expect(data).toEqual({ name: "Luis", lastname: "Ariza" });
});
