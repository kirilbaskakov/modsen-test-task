import generatePages from "./generatePages";

test("genPages", () => {
  expect(generatePages(3, 10, 4)).toEqual([2, 3, 4, 5]);
});

test("genPagesMin", () => {
  expect(generatePages(1, 10, 4)).toEqual([1, 2, 3, 4]);
});

test("genPagesMax", () => {
  expect(generatePages(10, 10, 4)).toEqual([7, 8, 9, 10]);
});

test("genPagesLessLimit", () => {
  expect(generatePages(1, 2, 4)).toEqual([1, 2]);
});
