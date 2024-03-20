// *task1 : https://www.codewars.com/kata/57a0885cbb9944e24c00008e

// const removeExclamationMarks = s => s.replaceAll('!', '');

// *task2 : https://www.codewars.com/kata/55a5befdf16499bffb00007b

// const add = (a, b) => a + b;
// const divide = (a, b) => a / b;
// const multiply = (a, b) => a * b;
// const mod = (a, b) => a % b;
// const exponent = (a, b) => a ** b;
// const subt = (a, b) => a - b;

// *task3 : https://www.codewars.com/kata/65ba420888906c1f86e1e680

// const collinearity = ( x1,y1, x2,y2 ) => x1 * y2 == (x2 * y1) ? true : false;

// *task4 : https://www.codewars.com/kata/5bb904724c47249b10000131

// function points(games) {
//     let score = 0;
//     games.forEach((a) => {
//       if (a[0] > a[2]) score += 3;
//       else if (a[0] == a[2]) score += 1;
//       else score += 0;
//     });

//     return score;
//   }

// *task5 : https://www.codewars.com/kata/5bb0c58f484fcd170700063d

// const pillars = (numPill, dist, width) => numPill != 1 ? dist * 100 * (numPill -1) + width * (numPill -2) : 0

// *task6 : https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036

// const toCsvText = array => array.join("\n")

// *task7 : https://www.codewars.com/kata/55f73f66d160f1f1db000059

// const combineNames = (fname, lname) => fname + ' ' + lname

// *task8 : https://www.codewars.com/kata/5865918c6b569962950002a1

// const strCount = (str,letter) => str.length - str.replaceAll(letter,"").length;

// *task9 : https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad

// const invert = array => array.map(e => e * -1)

// *task10 : https://www.codewars.com/kata/544675c6f971f7399a000e79

// const stringToNumber = (str) => +str

// *task11 : https://www.codewars.com/kata/5265326f5fda8eb1160004c8

// const numberToString = num => num + '';

// *task12 : https://www.codewars.com/kata/57f781872e3d8ca2a000007e

// const maps = x => x.map(x=>x*2);

// *task13 : https://www.codewars.com/kata/56f69d9f9400f508fb000ba7

// const monkeyCount = (n) => "".padStart(n, 0).split("").map((_, i) => i + 1);

// *task14 : https://www.codewars.com/kata/57f780909f7e8e3183000078

// const grow = x => x.reduce((acc,x) => acc*=x,1)

// *task15 : https://www.codewars.com/kata/57a083a57cb1f31db7000028

// const powersOfTwo = (n) => {
//     let arr = [];
//     while (n >= 0) arr.unshift(2 ** n--);
//     return arr;
//   };

// *task16 : https://www.codewars.com/kata/58ca658cc0d6401f2700045f

// function findMultiples(integer, limit) {
//     let arr = [];
//     for (let i=integer; i <=limit; i+=integer) arr.push(i)
//     return arr
//   }

// *task17 : https://www.codewars.com/kata/54edbc7200b811e956000556

// const countSheeps = (sheep) => sheep.filter(x => x).length

// *task18 : https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

// const arrayPlusArray = (arr1, arr2) => [...arr1, ...arr2].reduce((a, x) => a + x,0);

// *task19 : https://www.codewars.com/kata/56cd44e1aa4ac7879200010b

// String.prototype.isUpperCase=function() {return this==this.toUpperCase()}

// *task20 : https://www.codewars.com/kata/5aa736a455f906981800360d

// const feast = (beast, dish) => beast[0] == dish[0] &&  beast.slice(-1) == dish.slice(-1)

// *task21 : https://www.codewars.com/kata/55d24f55d7dd296eb9000030

// const summation = num => Array.from(Array(num), (_, i) => i + 1).reduce((a, b) => a + b, 0)

// *task22 : https://www.codewars.com/kata/57a0e5c372292dd76d000d7e

// const repeatStr = (n,s) => s.repeat(n) ;
