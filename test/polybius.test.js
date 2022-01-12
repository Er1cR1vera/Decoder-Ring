// Write your tests here!
const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

describe("Polybius square decoder and encoder", () => {

    it("Encoding: output should be a string", () => {//teste one
        const expected = "string";
        const actual = typeof polybius("this is a string");
        expect(actual).to.equal(expected);
    });

    it("Decode: Output should be a string", () => {//test two
        const expected = "string";
        const actual = typeof polybius("5319009");
        expect(actual).to.equal(expected);
    });

    it("Encoding: Should encode a lowercase string", () => {//test three
        const expected = "23513434112251";
        const actual = polybius("message");
        expect(actual).to.equal(expected);
    });

    it("Decode: Should work with i/j", () => {//test four
        const expected = "th(i/j)nkful" ;
        const actual = polybius("4432423352125413", false);
        expect(actual).to.equal(expected);
    });

    it("Decode: Should include spaces", () => { // test five
        const expected = "hello world";
        const actual = polybius("3251131343 2543241341", false);
        expect(actual).to.equal(expected);
    })
})