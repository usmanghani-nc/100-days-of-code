console.log('run');

// Intermediate Algorithm Scripting: Sum All Numbers in a Range

// function sumAll(arr) {
//   if (!arr) return;

//   const max = Math.max(...arr);
//   const min = Math.min(...arr);

//   let result = 0;

//   for (let i = min; i <= max; i++) {
//     result = result + i;
//   }

//   return result;
// }

// function sumAll([first, last]) {
//   const step = first - last < 0 ? 1 : -1;
//   return first !== last ? first + sumAll([first + step, last]) : first;
// }

// console.log(sumAll([10, 20]));

function diffArray(arr1, arr2) {
  const newArr = [...arr1, ...arr2];

  return newArr.filter((num) => !arr1.includes(num) || !arr2.includes(num));
}

// console.log(diffArray([1, 3, 5, 2], [1, 5, 3, 4, 2]));

// Intermediate Algorithm Scripting: Seek and Destroy

function destroyer(arr) {
  const [array, ...arr2] = [...arguments];

  return array.filter((el) => !arr2.includes(el));
}

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

function whatIsInAName(collection, source) {
  var srcKeys = Object.keys(source);

  return collection.filter(function (obj) {
    return srcKeys.every(function (key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}

// console.log(whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], { apple: 1 }));

// Intermediate Algorithm Scripting: Spinal Tap Case

function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join('-')
    .toLowerCase();
}

// console.log(spinalCase('This Is Spinal Tap'));

// Intermediate Algorithm Scripting: Pig Latin

function translatePigLatin(str) {
  const consonantRegex = /^[^aeiou]+/;

  // if consanonet will return on of these words a,e,i,o,u

  const myConsonants = str.match(consonantRegex);

  console.log(str.replace(consonantRegex, '').concat(myConsonants).concat('ay'), '???');

  return myConsonants !== null
    ? str.replace(consonantRegex, '').concat(myConsonants).concat('ay')
    : str.concat('way');
}

// console.log(translatePigLatin('consonant'));

// Intermediate Algorithm Scripting: Search and Replace
function myReplace(str, before, after) {
  const index = str.indexOf(before);

  // chack case
  if (str[index] === str[index].toUpperCase()) {
    // change after before replacing
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    // if no upper case
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }

  return str.replace(before, after);
}

// console.log(myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped'));

// Intermediate Algorithm Scripting: DNA Pairing

function pairElement(str) {
  //create object for pair lookup//create object for pair lookup

  const pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  };

  const char = str.split('');

  return char.map((x) => [x, pairs[x]]);
}

// console.log(pairElement('GCG'));

// Intermediate Algorithm Scripting: Missing letters

// function fearNotLetter(str) {
//   for (let i = 0; i < str.length; i++) {
//     // finde numaric value of string.
//     const code = str.charCodeAt(i);

//     // code start at 0 so we get first word num val
//     // then we compare (codeNum !== strNum + i)

//     if (code !== str.charCodeAt(0) + i) {
//       return String.fromCharCode(code - 1);
//     }
//   }

//   return undefined;
// }

// sol 2

function fearNotLetter(str) {
  let missing;
  let compare = str.charCodeAt(0); // return first inDex num;

  str.split('').map((letter, idx) => {
    if (str.charCodeAt(idx) === compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
}

// console.log(fearNotLetter('abce'));

// Intermediate Algorithm Scripting: Sorted Union

function uniteUnique(...arr) {
  const flatArray = [].concat(...arr);

  // create a Set which clears any duplicates since it's a regular set and not a multiset
  return [...new Set(flatArray)];
}

// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

function convertHTML(str) {
  const htmlEntities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
  };

  return str
    .split('')
    .map((entity) => htmlEntities[entity] || entity)
    .join('');
}

// console.log(convertHTML('Dolce & Gabbana'));

// Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers

function sumFibs(num) {
  if (num <= 0) return 0;

  const arrFib = [1, 1];
  let nextFib = 0;

  while ((nextFib = arrFib[0] + arrFib[1]) <= num) {
    arrFib.unshift(nextFib);
  }

  return arrFib.filter((num) => num % 2 != 0).reduce((a, b) => a + b);
}
// console.log(sumFibs(4));

// Intermediate Algorithm Scripting: Sum All Primes

function sumPrimes(num) {
  if (num == 0) return 0;

  function isPrime(number) {
    for (let i = 2; i <= number; i++) {
      if (number % i === 0 && number != i) {
        return false;
      }
    }
    return true;
  }

  if (!isPrime(num)) {
    return sumPrimes(num - 1);
  }

  if (isPrime(num)) {
    return num + sumPrimes(num - 1);
  }
}

// console.log(sumPrimes(10));

// Intermediate Algorithm Scripting: Smallest Common Multiple
function smallestCommons(arr) {
  const min = Math.min(...arr); // 1
  const max = Math.max(...arr); // 2

  let sol = max; // 2

  // start from max - 1 => 5 - 1 = 4;
  for (let i = max - 1; i >= min; i--) {
    if (sol % i) {
      sol += max;
      i = max;
    }
  }

  return sol;
}
// console.log(smallestCommons([1, 5]));

function dropElements(arr, func) {
  return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func) : arr.length);
}

// console.log(
//   dropElements([0, 1, 0, 1], function (n) {
//     return n === 1;
//   }),
// );

function steamrollArray(arr) {
  return arr.reduce((acc, val) => {
    return acc.concat(Array.isArray(val) ? steamrollArray(val) : val);
  }, []);
}

// console.log(steamrollArray([1, [2], [3, [[4]]]]));

function binaryAgent(str) {
  return str
    .split(' ')
    .map((el) => {
      return String.fromCharCode(parseInt(el, 2));
    })
    .join('');
}

// console.log(
//   binaryAgent(
//     '01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111',
//   ),
// );

// Intermediate Algorithm Scripting: Everything Be True

function truthCheck(collection, pre) {
  return collection.every((obj) => obj.sex === obj[pre]);
}

// console.log(
//   truthCheck(
//     [
//       { user: 'Tinky-Winky', sex: 'male' },
//       { user: 'Dipsy', sex: 'male' },
//       { user: 'Laa-Laa', sex: 'female' },
//       { user: 'Po', sex: 'female' },
//     ],
//     'sex',
//   ),
// );

// Intermediate Algorithm Scripting: Arguments Optional

function addTogether(first, second) {
  if (typeof first !== 'number') return undefined;

  const sum = (second) => (typeof second === 'number' ? first + second : undefined);
  return typeof second === 'undefined' ? (second) => sum(second) : sum(second);
}

// console.log(addTogether(2, 3));

// Intermediate Algorithm Scripting: Make a Person

var Person = function (firstAndLast) {
  var fullName = firstAndLast;

  this.getFirstName = function () {
    return fullName.split(' ')[0];
  };

  this.getLastName = function () {
    return fullName.split(' ')[1];
  };

  this.getFullName = function () {
    return fullName;
  };

  this.setFirstName = function (name) {
    fullName = name + ' ' + fullName.split(' ')[1];
  };

  this.setLastName = function (name) {
    fullName = fullName.split(' ')[0] + ' ' + name;
  };

  this.setFullName = function (name) {
    fullName = name;
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();

// Intermediate Algorithm Scripting: Map the Debris

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return arr.map(({ name, avgAlt }) => {
    const earth = earthRadius + avgAlt;
    const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earth, 3) / GM));
    return { name, orbitalPeriod };
  });
}

orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]);
