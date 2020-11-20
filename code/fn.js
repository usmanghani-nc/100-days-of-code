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

// function sliceArray(anim, beginSlice, endSlice) {
//   // Only change code below this line

//   return anim.slice(beginSlice, endSlice);
//   // Only change code above this line
// }
// var inputAnim = ['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'];
// sliceArray(inputAnim, 1, 3);

// // Functional Programming: Combine Two Arrays Using the concat Method

// function nonMutatingConcat(original, attach) {
//   // Only change code below this line

//   return original.concat(attach);
//   // Only change code above this line
// }
// var first = [1, 2, 3];
// var second = [4, 5];
// nonMutatingConcat(first, second);

// Functional Programming: Add Elements to the End of an Array Using concat Instead of push

// function nonMutatingPush(original, newItem) {
//   // Only change code below this line
//   // return original.push(newItem);
//   return original.concat(newItem);

//   // Only change code above this line
// }
// var first = [1, 2, 3];
// var second = [4, 5];
// nonMutatingPush(first, second);

// Functional Programming: Use the reduce Method to Analyze Data

const watchList = [
  {
    Title: 'Inception',
    Year: '2010',
    Rated: 'PG-13',
    Released: '16 Jul 2010',
    Runtime: '148 min',
    Genre: 'Action, Adventure, Crime',
    Director: 'Christopher Nolan',
    Writer: 'Christopher Nolan',
    Actors: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy',
    Plot:
      'A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.',
    Language: 'English, Japanese, French',
    Country: 'USA, UK',
    Awards: 'Won 4 Oscars. Another 143 wins & 198 nominations.',
    Poster:
      'http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    Metascore: '74',
    imdbRating: '8.8',
    imdbVotes: '1,446,708',
    imdbID: 'tt1375666',
    Type: 'movie',
    Response: 'True',
  },
  {
    Title: 'Interstellar',
    Year: '2014',
    Rated: 'PG-13',
    Released: '07 Nov 2014',
    Runtime: '169 min',
    Genre: 'Adventure, Drama, Sci-Fi',
    Director: 'Christopher Nolan',
    Writer: 'Jonathan Nolan, Christopher Nolan',
    Actors: 'Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow',
    Plot:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: 'English',
    Country: 'USA, UK',
    Awards: 'Won 1 Oscar. Another 39 wins & 132 nominations.',
    Poster:
      'http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg',
    Metascore: '74',
    imdbRating: '8.6',
    imdbVotes: '910,366',
    imdbID: 'tt0816692',
    Type: 'movie',
    Response: 'True',
  },
  {
    Title: 'The Dark Knight',
    Year: '2008',
    Rated: 'PG-13',
    Released: '18 Jul 2008',
    Runtime: '152 min',
    Genre: 'Action, Adventure, Crime',
    Director: 'Christopher Nolan',
    Writer:
      'Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)',
    Actors: 'Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine',
    Plot:
      'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
    Language: 'English, Mandarin',
    Country: 'USA, UK',
    Awards: 'Won 2 Oscars. Another 146 wins & 142 nominations.',
    Poster:
      'http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
    Metascore: '82',
    imdbRating: '9.0',
    imdbVotes: '1,652,832',
    imdbID: 'tt0468569',
    Type: 'movie',
    Response: 'True',
  },
  {
    Title: 'Batman Begins',
    Year: '2005',
    Rated: 'PG-13',
    Released: '15 Jun 2005',
    Runtime: '140 min',
    Genre: 'Action, Adventure',
    Director: 'Christopher Nolan',
    Writer:
      'Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)',
    Actors: 'Christian Bale, Michael Caine, Liam Neeson, Katie Holmes',
    Plot:
      'After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.',
    Language: 'English, Urdu, Mandarin',
    Country: 'USA, UK',
    Awards: 'Nominated for 1 Oscar. Another 15 wins & 66 nominations.',
    Poster:
      'http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg',
    Metascore: '70',
    imdbRating: '8.3',
    imdbVotes: '972,584',
    imdbID: 'tt0372784',
    Type: 'movie',
    Response: 'True',
  },
  {
    Title: 'Avatar',
    Year: '2009',
    Rated: 'PG-13',
    Released: '18 Dec 2009',
    Runtime: '162 min',
    Genre: 'Action, Adventure, Fantasy',
    Director: 'James Cameron',
    Writer: 'James Cameron',
    Actors: 'Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang',
    Plot:
      'A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
    Language: 'English, Spanish',
    Country: 'USA, UK',
    Awards: 'Won 3 Oscars. Another 80 wins & 121 nominations.',
    Poster:
      'http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg',
    Metascore: '83',
    imdbRating: '7.9',
    imdbVotes: '876,575',
    imdbID: 'tt0499549',
    Type: 'movie',
    Response: 'True',
  },
];

function getRating(watchList) {
  // Only change code below this line
  let count = 0;

  var averageRating =
    watchList.reduce((sum, movie) => {
      if (movie.Director == 'Christopher Nolan') {
        count += 1;
        return sum + parseFloat(movie.imdbRating);
      }
      return sum;
    }, 0) / count;

  // Only change code above this line
  return averageRating;
}

console.log(getRating(watchList));
