console.log('running');

// Convert Celsius to Fahrenheit

function convertToF(celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;

  return fahrenheit;
}

// console.log(convertToF(-10));

// Reverse a String

function reverseString(str) {
  if (!str) return;

  const newStr = [];

  const strArr = [...str];

  for (const key in strArr) {
    newStr.unshift(strArr[key]);
  }

  return newStr.join('');
}

// console.log(reverseString('usman ghani'));

// Factorialize a Number

function factorialize(num) {
  if (num < 0) return;
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result = result * i;
  }

  return result;
}

// console.log(factorialize(5));

// Basic Algorithm Scripting: Find the Longest Word in a String

function findLongestWordLength(str) {
  if (!str || str.length < 1) return;

  let result = 0;

  const strArr = str.split(' ');

  for (const i of strArr) {
    if (i.length > result) {
      result = i.length;
    }
  }

  return result;
}

// console.log(findLongestWordLength('The quick brown fox jumped over the lazy dog'));

// Basic Algorithm Scripting: Return Largest Numbers in Arrays

function largestOfFour(arr) {
  if (!arr) return;
  const res = [];

  for (const i in arr) {
    let num = arr[i][0];

    for (const j of arr[i]) {
      if (j > num) num = j;
    }

    res.push(num);
  }

  return res;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [-1000, -1001, -857, -1],
  ]),
);
