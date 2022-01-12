// Write your tests here!
const expect = require("chai").expect;
const { substitution } = require("../src/substitution");

describe("Substitution cipher", () =>  {

    it("Should return false if there is no input", () => {
        const expected = false;
        const  actual = substitution("message");
        expect(actual).to.equal(expected);
    });

    it("Should return false if alphabet was not provided", () => {
        const expected = false;
        const actual = substitution("This is a message");
        expect(actual).to.equal(expected);
    });
    
    it("Should return false if does not contain unique character", () => {
        const expected = false;
        const actual = substitution("This is another message");
        expect(actual).to.equal(expected);
    });

    it("Should not tamper with spaces", () => {
        const expected = "url gurer";
        const actual = substitution("hey there", "nopqrstuvwxyzabcdefghijklm");
        expect(actual).to.equal(expected);
    });

    it("Alphabet code should not have duplicate values", () => {
        const expected = false;
        const actual = substitution("message", "aabbcdefghigklmnopqrstuvwx");
        expect(actual).to.equal(expected);
    });
})