// https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed/javascript --------------------------------------------------

// const replace = s => s.split("").map((x) => (["a", "e", "i", "o", "u"].includes(x.toLowerCase()) ? "!" : x)).join("")

// https://www.codewars.com/kata/56f699cd9400f5b7d8000b55/javascript --------------------------------------------------

// const fixTheMeerkat = arr => arr.reverse();

//https://www.codewars.com/kata/57a06b07cf1fa58b2b000252/javascript --------------------------------------------------

// const isItLetter = character => character.toUpperCase().charCodeAt() > 64 && character.toUpperCase().charCodeAt() < 91;

// https://www.codewars.com/kata/57d29ccda56edb4187000052/javascript --------------------------------------------------

/*

const rpsls = (pl1, pl2) =>
  pl1 == pl2
    ? "Draw!"
    : [
        "rosc",
        "roli",
        "paro",
        "pasp",
        "scpa",
        "scli",
        "lisp",
        "lipa",
        "spro",
        "spsc",
      ].some((x) => x == pl1.slice(0, 2) + pl2.slice(0, 2))
    ? "Player 1 Won!"
    : "Player 2 Won!";

    */

// https://www.codewars.com/kata/56786a687e9a88d1cf00005d/javascript --------------------------------------------------

/*

const validateWord = (s) =>
  Object.values(
    s
      .toLowerCase()
      .split("")
      .reduce((acc, x) => {
        !acc[x] ? (acc[x] = 1) : acc[x]++;

        return acc;
      }, {})
  ).every((x, _, arr) => x == arr[0]);

console.log(validateWord(s));

*/
