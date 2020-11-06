function sum(arr, n) {
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}

console.log(sum([2, 3, 4, 5], 3));

function countup(n) {
  if (n < 1) {
    console.log('first tiem');
    return [];
  } else {
    const countArr = countup(n - 1);
    countArr.push(n);

    return countArr;
  }
}

// console.log(countup(10));

function countDown(n) {
  if (n < 1) {
    console.log('first tiem');
    return [];
  } else {
    const countArr = countup(n - 1);
    countArr.unshift(n);

    return countArr;
  }
}

// console.log(countDown(10));

function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) {
    return [];
  } else {
    const res = rangeOfNumbers(startNum, endNum - 1);
    res.push(endNum);
    return res;
  }
}

console.log(rangeOfNumbers(1, 5));
