import target from "../solutions/71.simplify-path";

describe("problem 71", () => {
  test("case 1", () => {
    expect(target("/home/")).toBe("/home");
  });

  test("case 2", () => {
    expect(target("/../")).toBe("/");
  });

  test("case 3", () => {
    expect(target("/home//foo/")).toBe("/home/foo");
  });

  test("case 4", () => {
    expect(target("/a/./b/../../c/")).toBe("/c");
  });

  test("case 5", () => {
    expect(target("/a/../../b/../c//.//")).toBe("/c");
  });

  test("case 6", () => {
    expect(target("/a//b////c/d//././/..")).toBe("/a/b/c");
  });

  test("case 7", () => {
    expect(target("/.")).toBe("/");
  });
});
