/*
This file defines the unit tests.
Naming convention: <module_name>.test.js

"Jest ships with experimental support for ECMAScript Modules (ESM). The implementation may have bugs and lack features. For the latest status check out the issue and the label on the issue tracker."
—Source: https://jestjs.io/docs/ecmascript-modules
*/

import { checkSign } from "./script.js";
//const checkSign = require("./script.js");

// Using Describe Blocks to group tests:
describe("checkSign", () => {
  it("Returns 'positive' if input is positive", () => {
    // https://jestjs.io/docs/using-matchers
    expect(checkSign(1)).toBe("positive");
  });

  it("Returns 'negative' if input is negative", () => {
    expect(checkSign(-1)).toBe("negative");
  });

  it("Returns 'zero' if input is zero", () => {
    expect(checkSign(0)).toBe("zero");
  });
});
