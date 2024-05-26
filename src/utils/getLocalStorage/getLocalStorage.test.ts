import getLocalStorage from "./getLocalStorage";

test("getLocalStorage", () => {
  localStorage.setItem("test", "42");
  expect(getLocalStorage("test", 0)).toBe(42);
  localStorage.removeItem("test");
});

test("getLocalStorageInitial", () => {
  expect(getLocalStorage("test2", 0)).toBe(0);
});
