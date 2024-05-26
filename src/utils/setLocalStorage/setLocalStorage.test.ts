import setLocalStorage from "./setLocalStorage";

test("setLocalStorage", () => {
  setLocalStorage("test", 42);
  expect(localStorage.getItem("test")).toBe("42");
});
