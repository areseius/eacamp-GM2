// *task1 : https://www.codewars.com/kata/59126992f9f87fd31600009b

// const whoseMove = (lastPlayer, win) => win ? lastPlayer : lastPlayer == "black" ? "white" : "black";

// *task2 : https://www.codewars.com/kata/563b74ddd19a3ad462000054

// const stringy = (size) => {
//   for (var i = 0, txt = ""; i < size; i++) i % 2 ? (txt += "0") : (txt += "1");
//   return txt;
// };

// *task3 : https://www.codewars.com/kata/5704aea738428f4d30000914

// function tripleTrouble(one, two, three) {
//   let arr = [...one.split(""), ...two.split(""), ...three.split("")];

//   for (var i = 0, result = ""; i < arr.length / 3; i++)
//     result += arr[i] + arr[arr.length / 3 + i] + arr[(2 * arr.length) / 3 + i];

//   return result;
// }

// *task4 : https://www.codewars.com/kata/56a4addbfd4a55694100001f

// const validateHello = (greetings) => ["hello", "ciao", "salut", "hallo", "hola", "ahoj", "czesc"].filter((x) => greetings.toLowerCase().includes(x)).length != 0 ? true : false;

// *task5 : https://www.codewars.com/kata/5763bb0af716cad8fb000580

// const countSquares = (cuts) => cuts ? ((cuts + 1) ** 3) - ((cuts - 1) ** 3) : 1