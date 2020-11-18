// Functional Programming: Learn About Functional Programming
// Function that returns a string representing a cup of green tea
// const prepareTea = () => 'greenTea';

// /*
// Given a function (representing the tea type) and number of cups needed, the
// following function returns an array of strings (each representing a cup of
// a specific type of tea).
// */
// const getTea = (numOfCups) => {
//   const teaCups = [];

//   for (let cups = 1; cups <= numOfCups; cups += 1) {
//     const teaCup = prepareTea();
//     teaCups.push(teaCup);
//   }
//   return teaCups;
// };

// const tea4TeamFCC = getTea(40);

// // Functional Programming: Understand Functional Programming Terminology

// // Function that returns a string representing a cup of green tea
// const prepareGreenTea = () => 'greenTea';

// // Function that returns a string representing a cup of black tea
// const prepareBlackTea = () => 'blackTea';

// /*
// Given a function (representing the tea type) and number of cups needed, the
// following function returns an array of strings (each representing a cup of
// a specific type of tea).
// */
// const getTea = (prepareTea, numOfCups) => {
//   const teaCups = [];

//   for (let cups = 1; cups <= numOfCups; cups += 1) {
//     const teaCup = prepareTea();
//     teaCups.push(teaCup);
//   }
//   return teaCups;
// };

// Only change code below this line
// const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
// const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// // Only change code above this line

// console.log(tea4GreenTeamFCC, tea4BlackTeamFCC);

// Functional Programming: Understand the Hazards of Using Imperative Code
// Functional Programming: Avoid Mutations and Side Effects Using Functional Programming

// The global variable
// var fixedValue = 4;

// function incrementer(arg) {
//   return arg + 1;
// }

// Functional Programming: Pass Arguments to Avoid External Dependence in a Function

// Functional Programming: Use the map Method to Extract Data from an Array

// Functional Programming: Use the map Method to Extract Data from an Array

// var ratings = watchList.map((el, idx) => {
//   return {
//     title: el.Title,
//     rating: el.imdbRating,
//   };

// Functional Programming: Implement map on a Prototype

// var s = [23, 65, 98, 5];

// Array.prototype.myMap = function (callback) {
//   var newArray = [];

//   var items = this;

//   for (const item of items) {
//     newArray.push(callback(item));
//   }

//   return newArray;
// };

// var new_s = s.myMap(function (item) {
//   return item * 2;
// });

// console.log(new_s);

// console.log(Array.prototype, 'dad ?');

// Functional Programming: Use the filter Method to Extract Data from an Array

// var newArr = watchList.map((el, idx) => {
//   return {
//     title: el.Title,
//     rating: el.imdbRating,
//   };
// });

// var filteredList = newArr.filter((el, idx) => el.rating >= 8.0);

// console.log(filteredList);

// The global variable
// var s = [23, 65, 98, 5];

// Array.prototype.myFilter = function (callback) {
//   // Only change code below this line
//   var newArray = [];

//   var items = this;

//   for (const item of items) {
//     if (callback(item)) {
//       newArray.push(item);
//     }
//   }

//   // Only change code above this line
//   return newArray;
// };

// var new_s = s.myFilter(function (item) {
//   return item % 2 === 1;
// });

// console.log(new_s, 'filter');

// Functional Programming: Return Part of an Array Using the slice Method

function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line

  return anim.slice(beginSlice, endSlice);
  // Only change code above this line
}
var inputAnim = ['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'];
sliceArray(inputAnim, 1, 3);

// Functional Programming: Combine Two Arrays Using the concat Method

function nonMutatingConcat(original, attach) {
  // Only change code below this line

  return original.concat(attach);
  // Only change code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);
