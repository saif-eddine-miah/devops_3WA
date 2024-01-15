const fizzBuzz = require('./fizzbuzz');

test('multiples de 3', () => {
  expect(fizzBuzz(3)).toBe('Fizz');
  expect(fizzBuzz(6)).toBe('Fizz');
  expect(fizzBuzz(9)).toBe('Fizz');
});

test('multiples de 5', () => {
  expect(fizzBuzz(5)).toBe('Buzz');
  expect(fizzBuzz(10)).toBe('Buzz');
  expect(fizzBuzz(20)).toBe('Buzz');
});

test('multipleq de 3 et 5', () => {
  expect(fizzBuzz(15)).toBe('FizzBuzz');
  expect(fizzBuzz(30)).toBe('FizzBuzz');
  expect(fizzBuzz(45)).toBe('FizzBuzz');
});

test('autre', () => {
  expect(fizzBuzz(1)).toBe('1');
  expect(fizzBuzz(7)).toBe('7');
  expect(fizzBuzz(13)).toBe('13');
});
