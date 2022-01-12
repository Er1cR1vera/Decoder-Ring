 // Write your tests here!
const expect = require("chai").expect;
const { caesar } = require("../src/caesar")

describe("caesarModule", () => {

    it("Should be false if shift is 0", () => { 
  const expected = false;
  const actual = caesar("example", 0);
  expect(actual).to.equal(expected);
  });

  it("Should be false if shift is not present", () => {
      const expected = false;
      const actual = caesar("example");
      expect(actual).to.equal(expected);
  });

  it("Should be false if shift input is les than -25", () => {
      const expected = false;
      const actual = caesar("example", -26);
      expect(actual).to.equal(expected);
  });

  it("Should be false if shift input is greater than 25", () => {
      const expected = false;
      const actual = caesar("example", 26);
      expect(actual).to.equal(expected);
  });
  it("Encoding should not tamper with spaces and special symbols", () => {
      const expected = "bpqa qa i amkzmb umaaiom";
      const actual = caesar("This is a secret message", 8);
      expect(actual).to.equal(expected);
  });

  it("Decoding should not tamper with spaces and special symbols", () => {
      const expected = "this is a secret message";
      const actual = caesar("BPQA QA I amkzmb umaaiom", 8, false);
      expect(actual).to.equal(expected);
    });

  it("Should get capitol letters and convert to lower case", () => {
  const upperCase = caesar("THIS IS AN EXAMPLE", 0);
  const lowerCase = caesar("this is an example", 0);
  expect(upperCase).to.equal(lowerCase);
  });
  
});

