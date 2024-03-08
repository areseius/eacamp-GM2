// !TASKS: ------------------------------------------------------------------------------

// Tapsiriq nomre 1:
// For loop-dan istifade ederek console-a 1-den 10-a qeder ededler cixsin.

// Tapsiriq 2:
// var arr = [13,23,12,45,22,48,66,100]
// For loop istifade ederek bu array-in icinden yalniz cut ededleri secin ve console-a cixardin

// Tapsiriq nomre 3:
// Tapsiriq 2-nin davami olaraq, hemen arraydeki cut ededleri yeni bos array-a push edin.

// Tapsiriq nomre 4:
// Tapsiriq 2-deki array-den for loop istifade ederek cut edeleri silin.

// Tapsiriq 5:
// var arr = [23,56,4,78,5,63,45,210,56]
// BU array-den 78 ededini loop istifade ederek silin.

// Tapsiriq 6:
// var arr = [[1, 2], [3, 4], [5, 6]]  bu array-in icindeki reqemleri console-da (1,2,3,4,5,6) bu formada gorsenmelidirler

// Tapsiriq 7:
// 435389 ededindeki reqemlerin cemini tapin. Yalniz for loop-u ile

// Tapsiriq 8:
// var arr = [2, 45, 3, 67, 34, 567, 34, 345, 123]
// bu arrayin icindeki en boyuk ededi tapin.

// !TASKS: ------------------------------------------------------------------------------

// *task1 ----------------------------------------

// for (let i = 1; i <= 10; i++) console.log(i);

// *task2 ----------------------------------------

// var arr = [13, 23, 12, 45, 22, 48, 66, 100];

// for (let i = 0; i < arr.length; i++) arr[i] % 2 ? 0 : console.log(arr[i]);

// *task3 ----------------------------------------

// var arr = [13, 23, 12, 45, 22, 48, 66, 100],
//   arrTest = [];

// for (let i = 0; i < arr.length; i++) arr[i] % 2 ? 0 : arrTest.push(arr[i]);

// console.log(arrTest);

// *task4 ----------------------------------------

// var arr = [13, 23, 12, 45, 22, 48, 66, 100];

// !way1:

// for (let i = 0; i < arr.length; i++)
//   if (arr[i] % 2 == 0) {
//     arr.splice(i, 1);
//     i = -1;
//   }
// console.log(arr);

// !way2:

// var arrTest = [];

// for (let i = 0; i < arr.length; i++) arr[i] % 2 ? arrTest.push(arr[i]) : 0;
// console.log(arrTest);

// *task5 ----------------------------------------

// var arr = [23, 56, 4, 78, 5, 63, 45, 210, 56];

// !way1:

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == 78) arr.splice(i, 1);
// }
// console.log(arr);

// !way2:

// var arrTest = [];
// for (let i = 0; i < arr.length; i++) arr[i] != 78 ? arrTest.push(arr[i]) : 0;

// console.log(arrTest);

// *task6 ----------------------------------------

// var arr = [
//     [1, 2],
//     [3, 4],
//     [5, 6],
//   ],
//   arrTest = [];

// !way1:
// for (let i = 0; i < arr.length; i++)
//   for (let j = 0; j < arr[i].length; j++) arrTest.push(arr[i][j]);

// console.log(`(${arrTest.join(",")})`);

// !way2:
// var j = 0;
// for (let i = 0; i < arr[j].length; i++) {
//   arrTest.push(arr[j][i]);
//   if (arr[j].length == i + 1) {
//     j++;
//     i = -1;
//   }
//   if (arr.length == j) break;
// }
// console.log(`(${arrTest.join(",")})`);

// *task7 ----------------------------------------

// var num = 435389,
//   sum = 0;
// for (let i = 0; i < 6; i++) {
//   sum += num % 10;
//   num = Math.floor(num / 10);
// }
// console.log(sum);

// *task8 ----------------------------------------

// var arr = [2, 45, 3, 67, 34, 567, 34, 345, 123],
//   max = arr[0];

// for (let i = 0; i < arr.length; i++) arr[i] > max ? (max = arr[i]) : 0;

// console.log(max);
