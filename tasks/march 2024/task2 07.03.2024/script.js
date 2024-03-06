// *task link : https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercises.php

// *task1---------------------------------------------------

// const num1 = +prompt("num1: "),
//   num2 = +prompt("num2:");

// if (num1 > num2) alert(`large number is: ${num1}`);
// else alert(`large number is: ${num2}`);

// *task2---------------------------------------------------

// const num1 = +prompt("num1: "),
//   num2 = +prompt("num2:");
// num3 = +prompt("num3:");

// if (num1 * num2 * num3 >= 0) alert("+");
// else alert("-");

// *task3---------------------------------------------------

// let arr = [+prompt("num1:"), +prompt("num2:"), +prompt("num3:")],
//   example = 0;

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[i] < arr[j]) {
//       example = arr[i];
//       arr[i] = arr[j];
//       arr[j] = example;
//     }
//   }
// }
// alert(arr.join(", "));

// *task4---------------------------------------------------
// const arr = [
//   +prompt("num1:"),
//   +prompt("num2:"),
//   +prompt("num3:"),
//   +prompt("num4:"),
//   +prompt("num5:"),
// ];
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) if (arr[i] >= max) max = arr[i];

// alert(max);

// *task5---------------------------------------------------

// for (let i = 0; i < 15; i++) i % 2 ? console.log(`${i} is odd`) : console.log(`${i} is even`);

// *task6---------------------------------------------------

// const students = ["Peter", "Adam", "Derek", "Brus", "Kevin"],
//   grades = [
//     +prompt("Peter's grade:"),
//     +prompt("Adam's grade:"),
//     +prompt("Derek's grade:"),
//     +prompt("Brus's grade:"),
//     +prompt("Kevin's grade:"),
//   ];

// let avgGrade = 0;

// for (let i = 0; i < grades.length; i++) avgGrade += grades[i];

// avgGrade = avgGrade / grades.length;

// if (avgGrade >= 90 && avgGrade <= 100)
//   alert(`Average grade: ${avgGrade} \nGrade: A `);
// else if (avgGrade >= 80 && avgGrade <= 89)
//   alert(`Average grade: ${avgGrade} \nGrade: B `);
// else if (avgGrade >= 70 && avgGrade <= 79)
//   alert(`Average grade: ${avgGrade} \nGrade: C `);
// else if (avgGrade >= 60 && avgGrade <= 69)
//   alert(`Average grade: ${avgGrade} \nGrade: D `);
// else if (avgGrade >= 0 && avgGrade <= 59)
//   alert(`Average grade: ${avgGrade} \nGrade: F `);
// else alert("Invalid GRADE");

// *task7---------------------------------------------------

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) console.log(i + " FizzBuzz");
//   else if (i % 3 == 0) console.log(i + " Fizz");
//   else if (i % 5 == 0) console.log(i + " Buzz");
//   else console.log(i);
// }

// *task8---------------------------------------------------

// let sum = 0,
//   arr = [],
//   happyNumbers = [];

// for (let j = 1; j <= 100; j++) {
//   num = j;
//   arr.length = 0;
//   sum = 0;

//   for (let i = 0; i < 10; i++) {
//     while (num > 0) {
//       arr.push(num % 10);
//       num = Math.floor(num / 10);
//     }

//     for (const item of arr) {
//       sum += item ** 2;
//     }

//     if (sum == 1) break;
//     else {
//       num = sum;
//       arr.length = 0;
//       sum = 0;
//     }
//   }

//   if (sum == 1) happyNumbers.push(j);
// }

// happyNumbers.length = 5;
// console.log(happyNumbers);

// *task9---------------------------------------------------

// let arr = [],
//   sum = 0,
//   num = 0,
//   arm = [];

// for (let i = 100; i < 1000; i++) {
//   num = i;
//   sum = 0;
//   arr.length = 0;
//   while (num > 0) {
//     arr.push(num % 10);
//     num = Math.floor(num / 10);
//   }

//   for (const item of arr) {
//     sum += item ** 3;
//   }

//   if (sum == i) arm.push(i);
// }
// console.log(arm);

// *task10---------------------------------------------------

// way1:

// const num = +prompt("any number:"),
//   star = "*";
// let collection = "";

// for (let i = 0; i < num; i++) {
//   for (let j = 0; j <= i; j++) {
//     collection += star;
//   }
//   console.log(collection);
//   collection = "";
// }

// way2:

// for (let i = 1; i <= num; i++) {
//   console.log(star.repeat(i));
// }

// *task11---------------------------------------------------

// let num1 = +prompt("num1: "),
//   num1Arr = [1],
//   num2 = +prompt("num2: "),
//   num2Arr = [1],
//   ebob = 1,
//   ebobArr = [];

// for (let i = 2; i <= num1; i++) {
//   while (num1 % i == 0) {
//     num1Arr.push(i);
//     num1 = Math.floor(num1 / i);
//   }
//   while (num2 % i == 0) {
//     num2Arr.push(i);
//     num2 = Math.floor(num2 / i);
//   }
// }

// for (let i = 0; i < (num1Arr.length > num2Arr.length ? num1Arr.length : num2Arr.length); i++) {
//   for (let j = 0; j < (num1Arr.length > num2Arr.length ? num2Arr.length : num1Arr.length); j++) {
//     if (num1Arr[i] == num2Arr[j]) {
//       ebobArr.push(num1Arr[i]);
//       break;
//     }
//   }
// }

// for (const elem of ebobArr) {
//   ebob *= elem;
// }

// alert("ebob : " + ebob);

// *task12---------------------------------------------------

// let sum = 0;
// for (let i = 0; i < 1000; i++) {
//   if (i % 3 == 0 || i % 5 == 0) sum += i;
// }
// console.log(sum);
