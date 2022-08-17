import { expect } from "chai";
import { getAnagram } from "./anagram";

describe("getAnagram - basic functionality", () => {
  it("returns an empty object when passed an empty string", () => {
    const expected = {};
    const actual = getAnagram("", "");
    expect(actual).to.deep.equal(expected);
  }); //assertions

  it("returns an object with all the occuring letters in keys but with 0 in value", () => {
    const expected = { l: 0, i: 0, s: 0, t: 0, e: 0, n: 0 };
    const actual = getAnagram("listen", "silent");
    expect(actual).to.deep.equal(expected);
  });

  it("returns an object with all the occuring letters in keys but with 0 in value except 1 in s", () => {
    const expected = { l: 0, i: 0, s: 1, t: 0, e: 0, n: 0 };
    const actual = getAnagram("listens", "silent");
    expect(actual).to.deep.equal(expected);
  });

  it("returns an object with all the occuring letters with Caps in keys but with 0 in value", () => {
    const expected = {
      c: 0,
      o: 0,
      n: 0,
      v: 0,
      e: 0,
      r: 0,
      s: 0,
      a: 0,
      t: 0,
      i: 0,
      o: 0,
      n: 0,
    };
    const actual = getAnagram("conversation", "voices rant on");
    expect(actual).to.deep.equal(expected);
  });

  it("returns an object with all the occuring letters with Spaces in keys but with 0 in value", () => {
    const expected = { r: 0, a: 0, t: 0 };
    const actual = getAnagram("RAT", "tar");
    expect(actual).to.deep.equal(expected);
  });
});
