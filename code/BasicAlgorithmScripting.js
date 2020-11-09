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

// console.log(
//   largestOfFour([
//     [4, 5, 1, 3],
//     [13, 27, 18, 26],
//     [32, 35, 37, 39],
//     [-1000, -1001, -857, -1],
//   ]),
// );

// Basic Algorithm Scripting: Confirm the Ending

function confirmEnding(str, target) {
  if (!str || !target) return;

  const tarArr = str.split(' ');

  const el = tarArr[tarArr.length - 1];

  const found = el.substring(el.length - target.length);

  return found === target ? true : false;
}

// console.log(confirmEnding('Open sesamet', 'samet'));

// Basic Algorithm Scripting: Repeat a String Repeat a String

function repeatStringNumTimes(str, num) {
  let strRes = '';
  if (num > 0) {
    for (let i = 1; i <= num; i++) {
      strRes = strRes + str;
    }
  } else {
    return strRes;
  }

  return strRes;
}

// console.log(repeatStringNumTimes('abc', 3));

// Basic Algorithm Scripting: Truncate a String

function truncateString(str, num) {
  if (str.length > num) {
    const splStr = str.split('');
    return `${splStr.splice(0, num).join('')}...`;
  }

  return str;
}
// console.log(truncateString('Peter Piper picked a peck of pickled peppers', 11));

function findElement(arr, func) {
  let num = 0;

  for (const iterator of arr) {
    if (func(iterator)) {
      num = iterator;
      break;
    } else {
      num = undefined;
    }
  }

  return num;
}

// console.log(findElement([1, 2, 3, 4, 6, 7, 9, 10], (num) => num % 2 === 0));

// Basic Algorithm Scripting: Boo who

function booWho(bool) {
  return typeof bool === 'boolean' ? true : false;
}

// console.log(booWho(null));

// Basic Algorithm Scripting: Title Case a Sentence

function titleCase(str) {
  if (!str) return;
  const res = [];

  const strArr = str.split(' ');

  for (const iterator of strArr) {
    res.push(`${iterator[0].toUpperCase()}${iterator.slice(1, iterator.length).toLowerCase()}`);
  }

  return res.join(' ');
}

// console.log(titleCase("I'm a little teA pOt"));

// Basic Algorithm Scripting: Slice and Splice
function frankenSplice(arr1, arr2, n) {
  const newArr2 = arr2.slice();

  arr2 = [...newArr2.slice(0, n), ...arr1, ...newArr2.slice(n)];

  return arr2;
}

// console.log(frankenSplice(['claw', 'tentacle'], ['head', 'shoulders', 'knees', 'toes'], 2));

// Basic Algorithm Scripting: Falsy Bouncer

// sol 1

function bouncer(arr) {
  const newArr = [];

  for (const iterator of arr) {
    if (!!iterator) {
      newArr.push(iterator);
    }
  }

  return newArr;
}

// sol 2

function bouncer(arr) {
  const newArr = [...arr].filter((el) => !!el);

  return newArr;
}

// console.log(bouncer([7, 'ate', '', false, 9, true, 10]));

function getIndexToIns(arr, num) {
  if (!arr.length) {
    return 0;
  }

  // extra step
  // idx = arr.filter((el) => el < num) && arr.length;

  // Bubble sort
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j - 1] > arr[j]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }
    }
  }

  for (const el in arr) {
    if (arr[el] >= num) return +el;
  }

  return arr.length;
}

// sol 2
function getIndexToIns(arr, num) {
  const index = arr.sort((curr, next) => curr - next).findIndex((curNum) => curNum >= num);
  return index === -1 ? arr.length : index;
}

// sol 3
function getIndexToIns(arr, num) {
  return arr.filter((val) => num > val).length;
}

// console.log(getIndexToIns([2, 5, 15], 13));

function mutation(arr) {
  const test = arr[1].toLowerCase();
  const target = arr[0].toLowerCase();

  for (const i of test) {
    if (target.indexOf(i) < 0) return false;
  }
  return true;
}

// console.log(mutation(['Mary', 'Aarmy']));

// console.log(mutation(['floor', 'for']));

function chunkArrayInGroups(arr, size) {
  const newArr = [];

  for (let i = 0; i < arr.length; i += size) {
    let copy = arr.slice(i, i + size);

    newArr.push(copy);
  }

  return newArr;
}

console.log(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2));
