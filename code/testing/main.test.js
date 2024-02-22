const { sum, createUser, multiply } = require("./main");

describe("main", () => {
  it("should add 1 + 2", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("should multiply 1 * 2", () => {
    expect(multiply(1, 2)).toBe(2);
  });

  it("should create new user", () => {
    const user = createUser("John Doe");
    expect(user).toMatchSnapshot();
    // expect(user).toBe("John Doe1");
    // expect(user.firstName).toBe("John");
    // expect(user.lastName).toBe("Doe");
  });
});
