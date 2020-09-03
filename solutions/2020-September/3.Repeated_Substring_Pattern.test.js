const target = require("./3.Repeated_Substring_Pattern");

test("case 1", () => {
  expect(target("abab")).toBeTruthy();
});

test("case 2", () => {
  expect(target("aba")).toBeFalsy();
});

test("case 3", () => {
  expect(target("abcabcabcabc")).toBeTruthy();
});

test("case 4", () => {
  expect(target("abccbabccbabccbabccbabccb")).toBeTruthy();
});
