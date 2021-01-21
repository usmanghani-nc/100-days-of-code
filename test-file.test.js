const { sum, mult, copyArr } = require('./test-file');

test('properly add two numbers', () => {
  expect(sum(1, 2)).toBe(3);
});

test('properly multy two numbers', () => {
  expect(mult(2, 2)).toBe(4);
});

test('copy array true', () => {
  const arr = [1, 2, 3];
  expect(copyArr(arr)).toEqual(arr);
  expect(copyArr(arr)).not.toBe(arr);
});
