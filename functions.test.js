const {
  multiply,
  isNull,
  checkTruthy,
  addLastName,
} = require("./functions.js");


/*
NOTE: The ARRANGE / ACT / ASSERT structure has been omitted as it is considered unnecessary/redundant for most of the test cases. 
However in the last test case we are going to see a good example of a worthwhile implementation of the structure. 
P.S. Feedback will be aprecciated 
 */
describe("multiply function", () => {
  it("should return the positive result of the multiplication of the given two positive integers", () => {
    expect(multiply(2, 5)).toBe(10);
  });
  it("should return the negative result of the multiplication of a given positive integer and a negative integer", () => {
    expect(multiply(2, -5)).toBe(-10);
  });
  it("should return the positive result of the multiplication of the given two negative integers", () => {
    expect(multiply(-2, -5)).toBe(10);
  });
  it("should return 0 when one of the inputs is zero", () => {
    const random = Math.random();
    expect(multiply(random, 0)).toBe(0);
  });
  it("should return NAN when input is not a number", () => {
    expect(multiply("not a number", 10)).toBeNaN();
  });
  it("should return 0 when one of the inputs is false", () => {
    expect(multiply(5, false)).toBe(0);
  });
  it("should return the other input when one of the inputs is true", () => {
    expect(multiply(5, true)).toBe(5);
  });
});

describe("isNull function", () => {
  it("should always return null", () => {
    expect(isNull()).toBe(null);
  });
});

describe("checkTruthy function", () => {
  it("should return true when I sent true", () => {
    expect(checkTruthy(true)).toBe(true);
  });
  it("should return false when I sent false", () => {
    expect(checkTruthy(false)).toBe(false);
  });
});

describe("addLastName function", () => {
  it("should return an user object with Name equal to pepito and lastname equal to Perez", () => {
    const expectedUser = { firstname: "Pepito", lastname: "Perez" };
    const user = addLastName("Perez");
    expect(user).toEqual(expectedUser);
  });
});

/*
COVERAGE

File                 | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s                                                                                                                                                 
---------------------|---------|----------|---------|---------|-------------------
All files            |     100 |      100 |     100 |     100 | 
 js-unittesting      |     100 |      100 |     100 |     100 | 
  functions.js       |     100 |      100 |     100 |     100 | 
 js-unittesting/suma |     100 |      100 |     100 |     100 | 
  index.js           |     100 |      100 |     100 |     100 | 
---------------------|---------|----------|---------|---------|-------------------

Test Suites: 2 passed, 2 total
Tests:       14 passed, 14 total
*/