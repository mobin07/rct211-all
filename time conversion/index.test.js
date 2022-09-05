const time = require("./index");

describe("Testing time conversion", () => {
  test("checking time in seconds", () => {
    expect(time(5200 )).toBe("5 seconds");
  });
  test("checking time in minutes", () => {
    expect(time(60000)).toBe("1 minutes");
  });
  test("checking time in minutes (plural)", () => {
    expect(time(180000)).toBe("3 minutes");
  });
  test("checking time in minutes and seconds", () => {
    expect(time(200000)).toBe("3 minutes 20 seconds");
  });
  test("check time in hours", () => {
    expect(time(3600000)).toBe("1 hours");
  });
  test("check time in hours and minutes", () => {
    expect(time(3660000)).toBe("1 hours 1 minutes");
  });
  test("check time in hours and minutes and seconds", () => {
    expect(time(3665000)).toBe("1 hours 1 minutes 5 seconds");
  });
 
});