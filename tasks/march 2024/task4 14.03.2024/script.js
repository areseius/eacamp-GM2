// *task1 : https://www.codewars.com/kata/53dbd5315a3c69eed20002dd

// let arr = [1, 2, "aasf", "1", "123", 123];

// const filter_list = (l) => l.filter((a) => typeof a == "number");

// console.log(filter_list(arr)); // [1, 2, 123]

// *task2 : https://www.codewars.com/kata/534ea96ebb17181947000ada

// const breakChocolate = (n, m) => (n <= 0 || m <= 0 ? 0 : n * m - 1);

// console.log(breakChocolate(-1,2));

// *task3 : https://www.codewars.com/kata/57cc981a58da9e302a000214

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let limit = 7;

// const smallEnough = (a, limit) => a.map((a) => (a <= limit ? true : false)).includes(false) ? false : true;

// console.log(smallEnough(arr, limit));

// *task4 : https://www.codewars.com/kata/544a54fd18b8e06d240005c0

// const arr = [2, 3, 1, 4, 5];
// const text = "value";

// const min = (arr, toReturn) => toReturn == "value" ? Math.min(...arr) : arr.indexOf(Math.min(...arr));

// console.log(min(arr, text));

// *task5 : https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d

// const text = "abc";
// const ending = "";

// const solution = (str, ending) => ending == "" ? true : (str.split(ending).slice(-1) == "" ? true : false)

// console.log(solution(text,ending));

// *task6 : https://www.codewars.com/kata/5bb0c58f484fcd170700063d

// const numPill = 1;
// const dist = 10;
// const width = 10;

// const pillars = (numPill, dist, width) =>
//   numPill != 1 ? dist * 100 * (numPill - 1) + width * (numPill - 2) : 0;

// console.log(pillars(numPill, dist, width));

// *task7 : https://www.codewars.com/kata/576b93db1129fcf2200001e6

// let arr = [6, 2, 1, 8, 10]; //16
// let arr1 = [1, 1, 11, 2, 3]; //6

// const sumArray = (array) => (array == null || array.length <= 1) ? 0 : array.reduce((a, b) => a + b, 0) - Math.max(...array) - Math.min(...array);

// console.log(sumArray([arr1]));

// *task8 : https://www.codewars.com/kata/55f73f66d160f1f1db000059

// const fname = "James";
// const lname = "Stevens";

// const combineNames = (fname, lname) => fname + " " + lname;

// console.log(combineNames(fname, lname));
