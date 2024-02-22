const { sum, createUser } = require("./main");

describe("main Tests", () => {
  it("should add 1 + 2", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("should create new user", () => {
    const user = createUser("John Doe");
    expect(user).toMatchSnapshot();
    // expect(user).toBe("John Doe1");
    // expect(user.firstName).toBe("John");
    // expect(user.lastName).toBe("Doe");
  });
});
